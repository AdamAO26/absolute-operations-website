import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/cards/ServiceCard.jsx';
import ProjectCard from '../components/cards/ProjectCard.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow=""
        title="Welcome to Absolute Operations, LLC"
        text="Practical electrical, mechanical, and manufacturing engineering support for businesses ready to move with precision."
        primaryLabel="Start a Project"
        primaryTo="/contact"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />

      <section className="section split-section">
        <Reveal>
          <p className="eyebrow">Mission</p>
          <h2>Bringing advanced technology within reach.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="large-copy">{company.mission}</p>
        </Reveal>
      </section>

      <section className="section card-section">
        <Reveal>
          <p className="eyebrow">Core Services</p>
          <h2>Engineering support built around real operations.</h2>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 80} />
          ))}
        </div>
      </section>

      {/* <section className="section dark-section">
        <Reveal>
          <p className="eyebrow">Portfolio Preview</p>
          <h2>Project examples designed for clarity.</h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 80} />
          ))}
        </div>
      </section> */}
    </>
  );
}
