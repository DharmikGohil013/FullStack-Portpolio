export function renderFAQ() {
  const faqs = [
    {
      q: 'What software engineering services do you offer?',
      a: 'I specialize in full stack web application development (React/Next.js & Node.js/TypeScript), distributed system architecture, REST/GraphQL API design, database modeling & query optimization (PostgreSQL, MongoDB, Redis), and DevOps CI/CD automation.',
      open: true
    },
    {
      q: 'What is your software development process from start to finish?',
      a: 'My engineering workflow follows four core phases: Architecture & Specification (system modeling, DB schemas, API specs), Full Stack Implementation (clean modular code, modern frameworks), Testing & Integration (unit testing, security audits), and Deployment & Optimization (CI/CD pipelines, cloud infrastructure, real-time monitoring).',
      open: true
    },
    {
      q: 'Will I have full access to the codebase during development?',
      a: 'Yes! All projects use Git version control (GitHub/GitLab). You get complete access to code repositories, staging deployments, and regular architecture updates at every milestone.'
    },
    {
      q: 'What deliverables will I receive upon project completion?',
      a: 'You will receive clean, fully documented source code, production build artifacts, Docker container setups, environment configuration specs, API documentation (OpenAPI/Swagger), and full deployment rights.'
    },
    {
      q: 'Do you offer post-launch support and maintenance?',
      a: 'Yes. All packages include post-launch support (ranging from 1 to 6 months) covering system monitoring, bug fixes, performance tuning, and scaling adjustments.'
    },
    {
      q: 'Can you work with an existing legacy codebase or cloud setup?',
      a: 'Absolutely. I regularly audit, refactor, and modernize existing codebases — whether it is migrating monoliths to microservices, optimizing slow database queries, or upgrading frontend/backend stacks.'
    }
  ];
  
  const faqItems = faqs.map((faq, i) => `
    <div class="faq__item${faq.open ? ' active' : ''}">
      <div class="faq__question" data-accordion-header>
        <span class="faq__question-text">${faq.q}</span>
        <span class="faq__question-icon">+</span>
      </div>
      <div class="faq__answer">
        <p class="faq__answer-text">${faq.a}</p>
      </div>
    </div>
  `).join('');
  
  return `
    <section class="faq section">
      <div class="container">
        <div class="faq__content">
          <div class="reveal">
            <div class="eyebrow">FAQ</div>
            <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">FREQUENT<br><span class="gray">QUESTIONS</span></h2>
          </div>
          <div class="faq__list reveal">
            ${faqItems}
          </div>
        </div>
      </div>
    </section>
  `;
}
