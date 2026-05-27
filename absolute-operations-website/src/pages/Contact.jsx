import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow=""
        title="Let’s Turn YOUR Idea Into Something Bigger."
        text="Use this intake form to share basic project information. Please do not submit proprietary designs, formulas, source code, trade secrets, or other confidential intellectual property before an NDA is in place."
        primaryLabel="View Services"
        primaryTo="/services"
      />

      <section className="section contact-layout">
        <Reveal className="contact-note">
          <h2>Project Intake Notice</h2>
          <p>
            This form is for general intake only. Do not send confidential intellectual property, trade secrets, protected technical drawings, customer data, or sensitive business information until a written NDA has been reviewed and executed by both parties.
          </p>
          <p>
            Placeholder phone, address, and business details can be replaced before launch.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
