import { useState } from 'react';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  location: '',
  timeline: '',
  service: 'Electrical',
  description: '',
  ndaAcknowledged: false
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      if (file) payload.append('attachment', file);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to submit form.');

      setStatus('success');
      setMessage('Your project intake was submitted successfully. We will review it and follow up using the contact information provided.');
      setForm(initialForm);
      setFile(null);
      event.target.reset();
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
        <input name="timeline" value={form.timeline} onChange={updateField} placeholder="Example: 30 days, Q3, urgent, planning phase" required />
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
        Optional File Upload
        <input type="file" onChange={(event) => setFile(event.target.files?.[0] || null)} />
      </label>
      <label className="full-width">
        Project Description
        <textarea name="description" rows="7" value={form.description} onChange={updateField} required placeholder="Describe the general scope, problem, goals, site conditions, and desired result. Do not include confidential IP before an NDA." />
      </label>
      <label className="checkbox full-width">
        <input type="checkbox" name="ndaAcknowledged" checked={form.ndaAcknowledged} onChange={updateField} required />
        <span>I understand that I should not submit confidential intellectual property or sensitive technical information before an NDA is in place.</span>
      </label>
      <button className="button button-primary full-width" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit Project Intake'}
      </button>
      {message && <p className={`form-message form-message--${status}`}>{message}</p>}
    </form>
  );
}
