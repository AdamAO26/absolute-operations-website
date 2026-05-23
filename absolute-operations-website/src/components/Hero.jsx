import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: '/slideshow-pictures-hero/antenna_module_cubesat.JPG',
    position: 'hero-slide--center'
  },
  {
    image: '/slideshow-pictures-hero/ptfe_dipole_holder.JPG',
    position: 'hero-slide--top'
  },
  {
    image: '/slideshow-pictures-hero/titaniumprop2.JPG',
    position: 'hero-slide--right'
  }
];

export default function Hero({
  eyebrow = 'Engineering for small-business scale',
  title = 'Welcome to Absolute Operations, LLC',
  text = 'Practical electrical, mechanical, and manufacturing engineering support for businesses ready to move with precision.',
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'View Services',
  secondaryTo = '/services',
  slideshow = true,
  backgroundImage
}) {
  return (
    <section className="hero">
      {slideshow ? (
        <div className="hero-slideshow" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`hero-slide ${slide.position}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                animationDelay: `${index * 6}s`
              }}
            />
          ))}
        </div>
      ) : (
        <div
          className="hero-slide hero-slide-static"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${backgroundImage || heroSlides[0].image})`
          }}
        />
      )}

      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>

        <h1 className="hero-title" data-text={title}>{title}</h1>

        <p className="hero-text">{text}</p>

        <div className="hero-actions">
          {primaryLabel && primaryTo && (
            <Link className="button button-primary" to={primaryTo}>
              {primaryLabel}
            </Link>
          )}

          {secondaryLabel && secondaryTo && (
            <Link className="button button-secondary" to={secondaryTo}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>

      <div className="scroll-cue">Scroll</div>
    </section>
  );
}