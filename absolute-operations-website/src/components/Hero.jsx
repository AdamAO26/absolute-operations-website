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

export default function Hero() {
  return (
    <section className="hero">
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

      <div className="hero-content">
        <p className="eyebrow">Engineering for small-business scale</p>

        <h1>Welcome to Absolute Operations, LLC</h1>

        <p className="hero-text">
          Practical electrical, mechanical, and manufacturing engineering support for businesses ready to move with precision.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/contact">
            Start a Project
          </Link>
          <Link className="button button-secondary" to="/services">
            View Services
          </Link>
        </div>
      </div>

      <div className="scroll-cue">Scroll</div>
    </section>
  );
}