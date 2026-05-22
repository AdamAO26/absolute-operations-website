import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';

const aboutSections = [
  {
    eyebrow: 'Our Mission',
    title: 'Expert engineering should not only belong to large companies.',
    text: 'At Absolute Operations, our mission is to help small business owners and entrepreneurs turn strong ideas into real, competitive products. We believe custom design, advanced technology, and professional engineering support should be accessible to businesses that do not have massive corporate budgets.'
  },
  {
    eyebrow: 'Pro-Small Business',
    title: 'Built for entrepreneurs who need practical support.',
    text: 'We are proudly pro-small business. Our goal is to create affordable, custom-built products and engineering solutions that help entrepreneurs compete with larger companies, stand out in their market, and grow with confidence.'
  },
  {
    eyebrow: 'What We Build',
    title: 'Custom products, machines, electronics, and manufacturing support.',
    text: 'Our work can include custom machines, mechanical assemblies, printed circuit boards, automation systems, manufacturing technologies, and product development support. Each project is shaped around the client’s specific needs, budget, timeline, and long-term business goals.'
  },
  {
    eyebrow: 'Why It Matters',
    title: 'We bridge the gap between a good idea and a buildable product.',
    text: 'Many entrepreneurs have great ideas but do not always have the equipment, resources, or engineering team needed to bring those ideas to life. Absolute Operations helps close that gap with professional design and development services that are affordable, practical, and built with purpose.'
  }
];

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About Absolute Operations"
        title="Engineering access for small-business ambition."
        text="We help entrepreneurs and small business owners turn ideas into practical products, custom technology, and competitive business solutions."
        primaryLabel="Start a Project"
        primaryTo="/contact"
      />

      {aboutSections.map((section) => (
        <section className="section split-section" key={section.title}>
          <Reveal>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="large-copy">{section.text}</p>
          </Reveal>
        </section>
      ))}
    </>
  );
}
