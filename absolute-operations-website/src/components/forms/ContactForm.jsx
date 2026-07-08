import { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/xpqnqklw';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  location: '',
  timeline: '',
  service: 'Electrical',
  fileLink: '',
  description: '',
  ndaAcknowledged: false
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const emailBody = `
Full Name
${form.name}

Company
${form.company}

Email
${form.email}

Phone
${form.phone}

Project Location
${form.location}

Project Timeline
${form.timeline}

Service Interest
${form.service}

Project File Link
${form.fileLink}

Project Description
${form.description}

NDA/IP Acknowledgement
${form.ndaAcknowledged ? 'Yes' : 'No'}
    `.trim();

    const payload = new FormData();
    payload.append('subject', `New Project Intake from ${form.name}`);
    payload.append('name', form.name);
    payload.append('email', form.email);
    payload.append('company', form.company);
    payload.append('phone', form.phone);
    payload.append('Project Location', form.location);
    payload.append('Project Timeline', form.timeline);
    payload.append('Service Interest', form.service);
    payload.append('Project File Link', form.fileLink);
    payload.append('message', emailBody);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json'
        }
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your request right now.');
      }

      setStatus('success');
      setMessage('Your project intake was submitted successfully. We will review it and follow up soon.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input name="name" value={form.name} onChange={updateField} required />
      </label>

      <label>
        Company
        <input name="company" value={form.company} onChange={updateField} required />
      </label>

      <label>
        Email
        <input type="email" name="email" value={form.email} onChange={updateField} required />
      </label>

      <label>
        Phone
        <input type="tel" name="phone" value={form.phone} onChange={updateField} required />
      </label>

      <label>
        Project Location
        <input name="location" value={form.location} onChange={updateField} required />
      </label>

      <label>
        Project Timeline
        <input
          name="timeline"
          value={form.timeline}
          onChange={updateField}
          required
        />
      </label>

      <label>
        Service Interest
        <select name="service" value={form.service} onChange={updateField}>
          <option>Electrical</option>
          <option>Mechanical</option>
          <option>Manufacturing</option>
          <option>Multiple Services</option>
          <option>Not Sure Yet</option>
        </select>
      </label>

      <label>
        Project File Link
        <input
          type="url"
          name="fileLink"
          value={form.fileLink}
          onChange={updateField}
          placeholder="Google Drive, Dropbox, or OneDrive share link"
        />
      </label>

      <label className="full-width">
        Project Description
        <textarea
          name="description"
          rows="7"
          value={form.description}
          onChange={updateField}
          required
          placeholder="Describe the general scope, problem, goals, site conditions, and desired result."
        />
      </label>

      <label className="checkbox full-width">
        <input
          type="checkbox"
          name="ndaAcknowledged"
          checked={form.ndaAcknowledged}
          onChange={updateField}
          required
        />
        <span>
          I understand that I should not submit confidential intellectual property or sensitive technical information before an NDA is in place.
        </span>
      </label>

      <button className="button button-primary full-width" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit Project Intake'}
      </button>

      {message && <p className={`form-message form-message--${status}`}>{message}</p>}
    </form>
  );
}