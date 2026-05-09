import { Resend } from 'resend';

export const config = {
  runtime: 'edge'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 8192;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405);
  }

  try {
    const formData = await request.formData();
    const fields = Object.fromEntries(formData.entries());
    const required = ['name', 'company', 'email', 'phone', 'location', 'timeline', 'service', 'description', 'ndaAcknowledged'];

    for (const field of required) {
      if (!fields[field]) {
        return json({ error: `Missing required field: ${field}` }, 400);
      }
    }

    if (fields.ndaAcknowledged !== 'true') {
      return json({ error: 'NDA acknowledgement is required.' }, 400);
    }

    if (!process.env.RESEND_API_KEY) {
      return json({ error: 'Email service is not configured yet.' }, 500);
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const attachment = formData.get('attachment');
    const attachments = [];

    if (attachment && typeof attachment.arrayBuffer === 'function' && attachment.size > 0) {
      const buffer = await attachment.arrayBuffer();
      attachments.push({
        filename: attachment.name || 'project-attachment',
        content: arrayBufferToBase64(buffer)
      });
    }

    const html = `
      <h1>New Absolute Operations Project Intake</h1>
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(fields.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
      <p><strong>Project Location:</strong> ${escapeHtml(fields.location)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(fields.timeline)}</p>
      <p><strong>Service Interest:</strong> ${escapeHtml(fields.service)}</p>
      <p><strong>NDA/IP Acknowledgement:</strong> ${escapeHtml(fields.ndaAcknowledged)}</p>
      <h2>Project Description</h2>
      <p>${escapeHtml(fields.description).replaceAll('\n', '<br />')}</p>
    `;

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Absolute Operations Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'braden@absoluteoperations.com',
      replyTo: fields.email,
      subject: `New Project Intake from ${fields.name} - ${fields.company}`,
      html,
      attachments
    });

    return json({ ok: true });
  } catch (error) {
    console.error(error);
    return json({ error: 'Unable to send form submission.' }, 500);
  }
}
