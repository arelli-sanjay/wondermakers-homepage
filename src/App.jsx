import "./App.css";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

const projects = [
  {
    number: "01",
    name: "Avax.network",
    type: "Company website",
    theme: "avax",
    image: "/images/avax-project.png",
    imageAlt: "Avax.network website shown on a tablet",
  },
  {
    number: "02",
    name: "Dimenso",
    type: "Student mobile app",
    theme: "dimenso",
    image: "/images/dimenso-app.png",
    imageAlt: "Dimenso student app shown on a phone",
  },
  {
    number: "03",
    name: "Sphere",
    type: "Immersive website",
    theme: "sphere",
    image: "/images/sphere-website.png",
    imageAlt: "Sphere website shown on a laptop",
  },
];

const services = [
  {
    number: "01",
    title: "Flagship websites",
    description:
      "Distinctive websites that shape perception and make complex brands easier to understand.",
    tags: ["Company sites", "Product sites", "Digital experiences"],
  },
  {
    number: "02",
    title: "AI products",
    description:
      "Intuitive interfaces that turn useful AI capabilities into clear, practical experiences.",
    tags: ["AI tools", "Assistants", "Conversational UI"],
  },
  {
    number: "03",
    title: "Digital platforms",
    description:
      "Reliable digital products designed to stay clear and usable as they grow.",
    tags: ["Web apps", "SaaS", "Data platforms"],
  },
  {
    number: "04",
    title: "Commerce experiences",
    description:
      "Thoughtful shopping experiences that bring product stories and customer needs together.",
    tags: ["Online stores", "B2B portals", "Product tools"],
  },
];

const useCases = [
  {
    number: "01",
    title: "Create something new",
    label: "From early idea to product",
    description:
      "Shape an early opportunity into a useful digital product with a clear direction.",
  },
  {
    number: "02",
    title: "Rethink what exists",
    label: "From current experience to better",
    description:
      "Rework a website, product, or customer experience around what people need now.",
  },
  {
    number: "03",
    title: "Add intelligence",
    label: "AI with a clear purpose",
    description:
      "Make a product more useful and responsive with AI where it adds real value.",
  },
  {
    number: "04",
    title: "Push the experience further",
    label: "Make it memorable",
    description:
      "Use motion, interaction, or 3D to make a digital experience stand out.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Think",
    description:
      "Understand the problem, explore opportunities, and decide what is worth building.",
    tags: ["Strategy", "Research", "Concepts"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape the idea into an experience people can see, understand, and use.",
    tags: ["UX / UI", "Art direction", "Prototyping"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the design into a reliable product and bring it to market.",
    tags: ["Frontend", "Backend", "Integrations"],
  },
];

export default function App() {

const [activeCase, setActiveCase] = useState(0);
const selectedCase = useCases[activeCase];

const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wonder Makers home">
          WONDER
          <span>MAKERS<span className="brand__dot">.</span></span>
        </a>

        <nav className="primary-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="contact-link" href="#contact">
          Let’s talk <span aria-hidden="true">&#8599;</span>
        </a>
      </header>

       {/* Main  */}
      <main>

        {/* Top Section */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__meta">
            <span>Independent digital studio</span>
            <span>Prague · Working worldwide</span>
          </div>

          <div className="hero__shape" aria-hidden="true" />

          <h1 id="hero-title">
            Digital products
            <br />
            for what’s <em>next</em>
            <span className="hero__period">.</span>
          </h1>

          <div className="hero__footer">
            <p>
              AI changed what’s possible. Great products still need taste,
              judgment, and engineering.
            </p>

            <a className="work-button" href="#work">
              Explore our work <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </section>

        {/* Work Section */}
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="work-section__heading">
            <p className="work-section__eyebrow">Selected work / 01—03</p>
            <h2 id="work-title">
              Made to move
              <br />
              things forward.
            </h2>
            <p className="work-section__intro">
              Digital experiences shaped around ambitious ideas.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`project-art project-art--${project.theme}`}>
                  <img
                    className="project-art__image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-art__number" aria-hidden="true">
                    {project.number}
                  </span>
                </div>

                <div className="project-card__details">
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="services-section__heading">
            <p className="services-section__eyebrow">What we build</p>
            <h2 id="services-title">
              Ideas into
              <br />
              useful experiences.
            </h2>
            <p className="services-section__intro">
              From the first direction to launch, we design and build digital products
              for ambitious teams.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card__top">
                  <span>{service.number}</span>
                  <span aria-hidden="true">&#8599;</span>
                </div>

                <h3>{service.title}</h3>
                <p className="service-card__description">{service.description}</p>

                <ul className="service-card__tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <a className="service-card__link" href="#contact">
                  Discuss a project <span aria-hidden="true">&#8599;</span>
                </a>
              </article>
            ))}
          </div>
        </section>
         
         {/* Use Cases Section */}
        <section
          className="use-cases-section"
          id="approach"
          aria-labelledby="use-cases-title"
        >
          <p className="use-cases-section__eyebrow">Use cases</p>

          <h2 id="use-cases-title">
            AI gives us leverage.
            <br />
            <em>We give it direction.</em>
          </h2>

          <div className="use-cases-layout">
            <div className="use-case-list" role="group" aria-label="Choose a use case">
              {useCases.map((item, index) => (
                <button
                  className="use-case-button"
                  key={item.number}
                  type="button"
                  aria-pressed={activeCase === index}
                  onClick={() => setActiveCase(index)}
                >
                  <span>{item.title}</span>
                  <span className="use-case-button__number">{item.number}</span>
                </button>
              ))}
            </div>

            <article className="use-case-detail" aria-live="polite">
              <span className="use-case-detail__number">{selectedCase.number}</span>
              <p className="use-case-detail__label">{selectedCase.label}</p>
              <h3>{selectedCase.title}</h3>
              <p className="use-case-detail__description">
                {selectedCase.description}
              </p>
            </article>
          </div>
        </section>
         
         {/* Process Section */}
        <section
          className="process-section"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="process-section__heading">
            <p className="process-section__eyebrow">How we work</p>
            <h2 id="process-title">
              From idea
              <br />
              to launch.
            </h2>
            <p>
              A clear path from the first question to a product people can use.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p className="process-card__description">{step.description}</p>

                <ul className="process-card__tags">
                  {step.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        
        {/* Engagement Section */}
        <section
          className="engagement-section"
          id="engagement"
          aria-labelledby="engagement-title"
        >
          <div className="engagement-section__heading">
            <p className="engagement-section__eyebrow">Ways to work together</p>
            <h2 id="engagement-title">
              Start where
              <br />
              you are.
            </h2>
          </div>

          <div className="engagement-grid">
            <article className="engagement-card">
              <div className="engagement-card__meta">
                <span>01 / Direction</span>
                <span>For early ideas</span>
              </div>

              <h3>Direction sprint</h3>
              <p>
                Turn an early idea into a clear, costed plan with a practical next step.
              </p>

              <a href="#contact">
                Find your direction <span aria-hidden="true">&#8599;</span>
              </a>
            </article>

            <article className="engagement-card engagement-card--dark">
              <div className="engagement-card__meta">
                <span>02 / Delivery</span>
                <span>For defined projects</span>
              </div>

              <h3>Build &amp; delivery</h3>
              <p>
                Bring the product from design to launch, or add senior specialists to
                your existing team.
              </p>

              <a href="#contact">
                Talk about your project <span aria-hidden="true">&#8599;</span>
              </a>
            </article>
          </div>
        </section>
        
        {/* Studio Section */}
        <section className="studio-section" id="studio" aria-labelledby="studio-title">
          <div className="studio-section__intro">
            <p className="studio-section__eyebrow">Senior-led studio</p>
            <h2 id="studio-title">
              Small enough to care.
              <br />
              Experienced enough to deliver.
            </h2>
            <p>
              A multidisciplinary team bringing design and engineering together for
              ambitious digital products.
            </p>
          </div>

          <div className="studio-stats">
            <div className="studio-stat">
              <strong>11&#43;</strong>
              <span>years in digital design and development</span>
            </div>
            <div className="studio-stat">
              <strong>20&#43;</strong>
              <span>in-house experts</span>
            </div>
            <div className="studio-stat">
              <strong>150&#43;</strong>
              <span>projects delivered</span>
            </div>
            <div className="studio-stat">
              <strong>4</strong>
              <span>continents covered</span>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-section__intro">
            <p className="faq-section__eyebrow">FAQ</p>
            <h2 id="faq-title">
              Good questions.
              <br />
              Clear answers.
            </h2>
            <p>Here are a few things teams often ask before getting started.</p>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                <span>What kinds of projects do you take on?</span>
                <span className="faq-item__icon" aria-hidden="true">&#43;</span>
              </summary>
              <div className="faq-item__answer">
                <p>
                  Websites, digital products, AI tools, and commerce experiences. The
                  best fit is a project where design and engineering both matter.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>Can we start if our idea is still taking shape?</span>
                <span className="faq-item__icon" aria-hidden="true">&#43;</span>
              </summary>
              <div className="faq-item__answer">
                <p>
                  Yes. Start with the problem or opportunity you see; the first step is
                  to clarify what is worth building.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>How long does a project usually take?</span>
                <span className="faq-item__icon" aria-hidden="true">&#43;</span>
              </summary>
              <div className="faq-item__answer">
                <p>
                  It depends on the project’s scope. A focused website takes less time
                  than a full digital product, so agree on a scope and timeline before
                  starting.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>Will senior team members stay involved?</span>
                <span className="faq-item__icon" aria-hidden="true">&#43;</span>
              </summary>
              <div className="faq-item__answer">
                <p>
                  The studio describes itself as senior-led, with experienced people
                  guiding the work from direction through delivery.
                </p>
              </div>
            </details>
          </div>
        </section>
        
        {/* Contact Section */}
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-section__copy">
            <p className="contact-section__eyebrow">Start a conversation</p>
            <h2 id="contact-title">
              Let’s make
              <br />
              what’s next.
            </h2>
            <p>
              Share a little about your project and what you’re hoping to build.
            </p>
            <a className="contact-section__email" href="mailto:hello@yourstudio.com">
              hello@yourstudio.com
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setFormSubmitted(true);
            }}
          >
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" required />
            </label>

            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>

            <label>
              What are you looking to build?
              <textarea name="message" rows="4" required />
            </label>

            <button type="submit">
              Send inquiry <span aria-hidden="true">&#8599;</span>
            </button>

            {formSubmitted && (
              <p className="contact-form__status" role="status">
                Thanks! This demo form isn’t connected to a service yet.
              </p>
            )}
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Wonder Makers home">
          WONDER
          <span>MAKERS<span className="brand__dot">.</span></span>
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="site-footer__bottom">
          <span>Independent digital studio</span>
          <a href="#top">Back to top &#8593;</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}