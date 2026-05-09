import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';

export default function ProjectCard({ project, delay = 0, large = false }) {
  return (
    <Reveal delay={delay} className={`project-card ${large ? 'project-card--large' : ''}`}>
      <img src={project.image} alt="" />
      <div>
        <p>{project.category}</p>
        {large ? <h2>{project.title}</h2> : <h3>{project.title}</h3>}
        <span>{project.summary}</span>
        <Link to={`/portfolio/${project.slug}`}>{large ? 'Open case study' : 'Read project details'}</Link>
      </div>
    </Reveal>
  );
}
