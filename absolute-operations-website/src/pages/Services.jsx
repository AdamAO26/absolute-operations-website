import Hero from '../components/Hero.jsx';
import ServiceDetailCard from '../components/cards/ServiceDetailCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Electrical, mechanical, and manufacturing support."
        text="We focus on practical engineering work that improves operations, increases competitiveness, and supports growth."
        primaryLabel="Request Consultation"
        primaryTo="/contact"
      />

      <section className="section service-detail-list">
        {services.map((service, index) => (
          <ServiceDetailCard key={service.title} service={service} delay={index * 90} />
        ))}
      </section>
    </>
  );
}
