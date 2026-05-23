import Hero from '../components/Hero.jsx';
import ProjectCard from '../components/cards/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Portfolio() {
  return (
    <>
      <Hero
        eyebrow=""
        title="Project cards with room for detailed case studies."
        text="These examples are placeholders that can be replaced with real client-approved work after review and confidentiality clearance."
        primaryLabel="Start Your Project"
        primaryTo="/contact"
      />

      <section className="section project-grid project-grid--page">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={index * 80} large />
        ))}
      </section>
    </>
  );
}
