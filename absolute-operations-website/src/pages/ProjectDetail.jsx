import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section simple-page">
        <h1>Project not found.</h1>
        <Link className="button button-primary" to="/portfolio">Back to Portfolio</Link>
      </section>
    );
  }

  return (
    <>
      <section className="project-hero" style={{ backgroundImage: `linear-gradient(rgba(6, 22, 40, 0.58), rgba(6, 22, 40, 0.82)), url(${project.image})` }}>
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="section case-study">
        {[
          ['Challenge', project.challenge],
          ['Process', project.process],
          ['Solution', project.solution],
          ['Outcome', project.outcome]
        ].map(([title, text], index) => (
          <Reveal key={title} delay={index * 80} className="case-row">
            <h2>{title}</h2>
            <p>{text}</p>
          </Reveal>
        ))}
        <Link className="button button-primary" to="/contact">Discuss a Similar Project</Link>
      </section>
    </>
  );
}
