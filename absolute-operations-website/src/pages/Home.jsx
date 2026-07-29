import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/cards/ServiceCard.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow=""
        title="Welcome to Absolute Operations, LLC"
        text="Practical electrical, mechanical, and manufacturing support for businesses ready to move with precision."
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

      <section className="section ownership-section">
        <Reveal>
          <div className="ownership-card">
            <div className="ownership-heading">
              <p className="eyebrow">Creator Ownership</p>
              <h2>Protecting the ideas behind every innovation.</h2>
            </div>

            <div className="ownership-copy">
              <p className="large-copy">
                All original ideas, concepts, designs, and intellectual property
                remain the property of their creator unless otherwise agreed
                upon in writing.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section comparison-section">
        <Reveal>
          <p className="eyebrow">Why Absolute Operations</p>
          <h2>A different approach to technical consulting.</h2>

          <p className="large-copy comparison-intro">
            We combine practical execution, flexible capabilities, and respect
            for creator ownership. This gives clients focused support without
            unnecessary layers or overhead.
          </p>
        </Reveal>

        <div className="comparison-grid">
          <Reveal delay={80}>
            <article className="comparison-card comparison-card-muted">
              <p className="comparison-label">
                Traditional Consulting Model
              </p>

              <div className="comparison-item">
                <h3>Intellectual Property</h3>
                <p>
                  Ownership terms can be complex, with work products and newly
                  developed ideas potentially subject to broad contractual
                  rights.
                </p>
              </div>

              <div className="comparison-item">
                <h3>Cost</h3>
                <p>
                  Larger teams, multiple management layers, and standardized
                  processes can add overhead to an engagement.
                </p>
              </div>

              <div className="comparison-item">
                <h3>Range of Capabilities</h3>
                <p>
                  Services may be divided among specialized departments,
                  vendors, or separate consulting engagements.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="comparison-card comparison-card-featured">
              <p className="comparison-label">
                The Absolute Operations Approach
              </p>

              <div className="comparison-item">
                <h3>Creator Focused IP Protection</h3>
                <p>
                  We begin with the principle that original ideas, concepts,
                  and intellectual property remain with their creator unless
                  different terms are clearly agreed upon in writing.
                </p>
              </div>

              <div className="comparison-item">
                <h3>Cost Conscious Support</h3>
                <p>
                  Our direct and adaptable working model focuses resources on
                  the technical work that moves the project forward.
                </p>
              </div>

              <div className="comparison-item">
                <h3>Dynamic Range of Capabilities</h3>
                <p>
                  Electrical, mechanical, manufacturing, and operational
                  experience come together in one flexible resource. We support
                  projects from early concepts through implementation and real
                  world operation.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section card-section">
        <Reveal>
          <p className="eyebrow">Core Services</p>
          <h2>Technical support built around real operations.</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={index * 80}
            />
          ))}
        </div>
      </section>
    </>
  );
}