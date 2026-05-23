import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <>
      <Hero
        eyebrow=""
        title="Engineering access for small-business ambition."
        text="We help entrepreneurs and small business owners turn ideas into practical products, custom technology, and competitive business solutions."
        primaryLabel="Start a Project"
        primaryTo="/contact"
      />

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">Our Mission</p>
          <h2>Expert engineering should not only belong to large companies.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">
            At Absolute Operations, our mission is to help small business owners and entrepreneurs turn strong ideas into real, competitive products. We believe custom design, advanced technology, and professional engineering support should be accessible to businesses that do not have massive corporate budgets.
          </p>
        </Reveal>
      </section>

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">Pro-Small Business</p>
          <h2>Built for entrepreneurs who need practical support.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">
            We are proudly pro-small business. Our goal is to create affordable, custom-built products and engineering solutions that help entrepreneurs compete with larger companies, stand out in their market, and grow with confidence.
          </p>
        </Reveal>
      </section>

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">What We Build</p>
          <h2>Custom products, machines, electronics, and manufacturing support.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">
            Our work can include custom machines, mechanical assemblies, printed circuit boards, automation systems, manufacturing technologies, and product development support. Each project is shaped around the client’s specific needs, budget, timeline, and long-term business goals.
          </p>
        </Reveal>
      </section>

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">Why It Matters</p>
          <h2>We bridge the gap between a good idea and a buildable product.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">
            Many entrepreneurs have great ideas but do not always have the equipment, resources, or engineering team needed to bring those ideas to life. Absolute Operations helps close that gap with professional design and development services that are affordable, practical, and built with purpose.
          </p>
        </Reveal>
      </section>
    </>
  );
}