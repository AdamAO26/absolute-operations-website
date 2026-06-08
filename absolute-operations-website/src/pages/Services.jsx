import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';

const serviceGroups = [
  {
    title: 'Product Feasibility',
    text: 'We help determine whether an idea is practical, what the biggest risks are, and what it may take to build it.'
  },
  {
    title: 'Mechanical Design',
    text: 'We create early layouts, mechanisms, housings, brackets, fixtures, and physical product concepts that can be reviewed and improved.'
  },
  {
    title: 'Prototype Planning',
    text: 'We help small business owners get from an idea on paper to a testable prototype using practical parts and realistic build methods.'
  },
  {
    title: 'Manufacturing Prep',
    text: 'We turn a proven concept into a clearer production plan with parts lists, assembly steps, supplier direction, and projected costs.'
  }
];

const designSteps = [
  {
    stage: 'Free',
    title: 'Free Consultation',
    summary: 'We start with a no-cost conversation to understand the product idea and what success needs to look like.',
    details: [
      'Review the basic product idea and the problem it solves',
      'Discuss whether the idea appears feasible before money is spent on design',
      'Set a rough budget, design timeline, and expectations',
      'Decide how far you want us to take the design',
      'Provide a personalized quote for the next step'
    ],
    deliverable: 'A clear recommendation, next-step scope, and quote.'
  },
  {
    stage: '30%',
    title: '30% Design',
    summary: 'This is the first serious mockup of the idea. The goal is to prove the concept can work before polishing every detail.',
    details: [
      'Create a simple product layout focused mainly on the mechanical design',
      'Use off-the-shelf electronics where possible to keep the early design practical',
      'Identify the main parts, motion, fit, and function',
      'Look for obvious risks before moving into a more expensive design phase'
    ],
    deliverable: 'A proof-of-concept design that shows the idea can work as intended.'
  },
  {
    stage: '30%',
    title: '30% Prototype',
    summary: 'When it makes sense, we build and test an early prototype so you can see the idea working in the real world.',
    details: [
      'Build a prototype based on the proof-of-concept design',
      'Use practical parts and build methods that may cost more than final production',
      'Test the core function and document what needs to improve',
      'Give the project a real starting point before deeper design work begins'
    ],
    deliverable: 'A working prototype meant for learning, testing, and improving the idea.'
  },
  {
    stage: '60%',
    title: '60% Design',
    summary: 'This is where we start shaping the idea into something that can become a manufacturable product.',
    details: [
      'Refine the product layout based on what was learned from the early design or prototype',
      'Outline the important dimensions, materials, parts, and performance targets',
      'Identify the critical details that need to be right for manufacturing',
      'Start reducing unnecessary complexity and avoidable cost'
    ],
    deliverable: 'A more complete design direction with the major manufacturing needs identified.'
  },
  {
    stage: '90%',
    title: '90% Design',
    summary: 'This is the manufacturing-ready package. The product is no longer just an idea, it is prepared for quoting, sourcing, and assembly.',
    details: [
      'Finalize the product design for manufacturing',
      'Create a bill of materials so the required parts are clear',
      'Provide assembly instructions and build notes',
      'Recommend manufacturers or supplier types',
      'Estimate projected production costs where possible'
    ],
    deliverable: 'A complete package for building, quoting, and preparing the product for production.'
  }
];

export default function Services() {
  return (
    <>
      <Hero
        eyebrow=""
        title="From product idea to build-ready design."
        text="Absolute Operations helps small business owners evaluate, design, prototype, and prepare physical products for manufacturing with a clear step-by-step process."
        primaryLabel="Start With a Free Consultation"
        primaryTo="/contact"
      />

      <section className="section services-overview">
        <Reveal className="services-overview-copy">
          <p className="eyebrow">What We Bid</p>
          <h2>Practical product development for small businesses.</h2>
          <p>
            You do not need a finished technical plan before talking with us. Bring the product idea, the problem you are trying to solve, and any sketches, notes, or links you already have. We help turn that starting point into a realistic path forward.
          </p>
        </Reveal>

        <div className="service-bid-grid">
          {serviceGroups.map((service, index) => (
            <Reveal key={service.title} className="service-bid-card" delay={index * 80}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section design-process-section">
        <Reveal className="process-heading">
          <p className="eyebrow">Design Process</p>
          <h2>A clear timeline from first call to manufacturing package.</h2>
          <p>
            Each phase is designed to answer the right question at the right time. We start by checking whether the idea makes sense, then move through proof of concept, prototype testing, manufacturable design, and production planning.
          </p>
        </Reveal>

        <div className="design-timeline">
          {designSteps.map((step, index) => (
            <Reveal key={step.title} className="design-step" delay={index * 90}>
              <div className="design-step-marker">
                <span>{step.stage}</span>
              </div>

              <div className="design-step-content">
                <p className="design-step-label">Phase {index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>

                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="deliverable">
                  <strong>What you leave with:</strong>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section services-cta">
        <Reveal>
          <p className="eyebrow">Ready To Start</p>
          <h2>Start with the idea. We will help define the next step.</h2>
          <p>
            The free consultation is built to keep the process low-pressure and practical. We will talk through feasibility, budget, timeline, and the design depth that makes sense for your product.
          </p>
          <Link className="button button-primary" to="/contact">
            Request Free Consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
