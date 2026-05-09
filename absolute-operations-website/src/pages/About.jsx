import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import { company } from '../data/company.js';

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About Absolute Operations"
        title="Engineering designed for ambitious small businesses."
        text="Absolute Operations, LLC exists to make advanced operations support more accessible, practical, and competitive."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">Our Purpose</p>
          <h2>Technology should not only belong to the biggest competitors.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">{company.purpose}</p>
        </Reveal>
      </section>

      <section className="section values-grid">
        {company.values.map(([title, text], index) => (
          <Reveal key={title} delay={index * 80} className="value-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
