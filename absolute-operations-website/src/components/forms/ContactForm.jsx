export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/braden@absoluteoperations.com"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value="New Absolute Operations Project Intake" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />

      <label>
        Full Name
        <input name="Full Name" required />
      </label>

      <label>
        Company
        <input name="Company" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Phone
        <input type="tel" name="Phone" required />
      </label>

      <label>
        Project Location
        <input name="Project Location" required />
      </label>

      <label>
        Project Timeline
        <input
          name="Project Timeline"
          placeholder="Example: 30 days, Q3, urgent, planning phase"
          required
        />
      </label>

      <label>
        Service Interest
        <select name="Service Interest" defaultValue="Electrical">
          <option>Electrical</option>
          <option>Mechanical</option>
          <option>Manufacturing</option>
          <option>Multiple Services</option>
          <option>Not Sure Yet</option>
        </select>
      </label>

      <label>
        Optional File Upload
        <input type="file" name="attachment" />
      </label>

      <label className="full-width">
        Project Description
        <textarea
          name="Project Description"
          rows="7"
          required
          placeholder="Describe the general scope, problem, goals, site conditions, and desired result. Do not include confidential IP before an NDA."
        />
      </label>

      <label className="checkbox full-width">
        <input type="checkbox" name="NDA/IP Acknowledgement" value="Yes" required />
        <span>
          I understand that I should not submit confidential intellectual property or sensitive technical information before an NDA is in place.
        </span>
      </label>

      <button className="button button-primary full-width" type="submit">
        Submit Project Intake
      </button>
    </form>
  );
}
