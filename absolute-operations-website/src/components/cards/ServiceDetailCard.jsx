import Reveal from '../Reveal.jsx';

export default function ServiceDetailCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay} className="service-detail">
      <div>
        <p className="eyebrow">{service.number}</p>
        <h2>{service.title}</h2>
        <p>{service.text}</p>
      </div>
      <ul>
        {service.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </Reveal>
  );
}
