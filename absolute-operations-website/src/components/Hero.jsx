import { Link } from 'react-router-dom';

export default function Hero({ eyebrow, title, text, primaryLabel = 'Start a Project', primaryTo = '/contact', secondaryLabel, secondaryTo }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to={primaryTo}>{primaryLabel}</Link>
          {secondaryLabel && <Link className="button button-secondary" to={secondaryTo}>{secondaryLabel}</Link>}
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}
