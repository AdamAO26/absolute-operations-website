import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay} className="service-card">
      <h3>{service.shortTitle}</h3>
      <p>{service.summary}</p>
      <Link to="/services">Learn more</Link>
    </Reveal>
  );
}
