import { renderContactCTA } from '../components/contactCTA.js';
import { renderResultsGrid } from '../components/resultsGrid.js';
import { renderFooter } from '../components/footer.js';
import { renderTrustedBy } from '../components/trustedBy.js';
import { heroAnimation, initAccordion, initPricingToggle } from '../animations.js';
import { initCounters } from '../counter.js';

export function renderHome() {
  return `
    <!-- SECTION 1: HERO -->
    <section class="hero">
      <div class="hero__grid-overlay"></div>
      <div class="hero__ghost-text">DHARMIK</div>

      <div class="hero__content">
        <div class="hero__left">
          <p class="hero__tagline">I DESIGN & BUILD SCALABLE WEB APPLICATIONS, ERPNEXT CUSTOMIZATIONS, CRM PLATFORMS, AND HIGH-PERFORMANCE CLOUD ARCHITECTURES.</p>
        </div>
        <div></div>
      </div>

      <div class="hero__portrait">
        <img src="/dharmik-persona.png" alt="Dharmik Gohil — Full Stack Software Engineer & System Architect" title="Dharmik Gohil - Software Engineer" fetchpriority="high" loading="eager" decoding="async" width="800" height="950" />
      </div>

      <div class="hero__featured-card">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" alt="ERPNext Enterprise Hub - Custom ERP & CRM Architecture by Dharmik Gohil" title="ERPNext Enterprise Architecture" loading="lazy" decoding="async" width="400" height="267" />
        <div class="hero__featured-card-info">
          <span>ERPNEXT</span>
          <span>/ Enterprise Hub</span>
        </div>
      </div>

      <div class="hero__bottom">
        <div class="hero__bottom-left">
          <div class="hero__copyright">©2026</div>
          <div class="hero__big-name">DHARMIK</div>
        </div>
        <div class="hero__contact-card">
          <div class="hero__contact-card-badge">⚡</div>
          <div class="hero__contact-card-text">
            <div class="hero__contact-card-label">Let's Talk</div>
            <div class="hero__contact-card-name">Dharmik Gohil</div>
            <div class="hero__contact-card-role">Full Stack Engineer, ERPNext & CRM Specialist</div>
          </div>
          <a href="#/contact" class="hero__contact-card-btn" data-hover>→</a>
        </div>
      </div>

      <span class="crosshair crosshair--tl">+</span>
      <span class="crosshair crosshair--tr">+</span>
      <span class="crosshair crosshair--bl">+</span>
      <span class="crosshair crosshair--br">+</span>

      ${renderTrustedBy()}
    </section>

    <!-- SECTION 2: ABOUT / IMPACT -->
    <section class="about section">
      <div class="container">
        <div class="about__grid">
          <div class="about__images">
            <div class="about__img-frame about__img-frame--large reveal">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" alt="Scalable Enterprise Systems, ERPNext and CRM Infrastructure by Dharmik Gohil" title="Enterprise Systems Architecture" loading="lazy" decoding="async" width="600" height="400" />
            </div>
          </div>
          <div class="about__text">
            <div class="about__eyebrow eyebrow reveal">SCALABLE SYSTEM DESIGN & ENTERPRISE SOLUTIONS</div>
            <h2 class="about__heading heading-two-tone reveal">MY IMPACT THROUGH<br>SOFTWARE<br><span class="gray">ENGINEERING</span></h2>
            <span class="about__sparkle reveal">✳</span>
            <img src="/code-raider.png" alt="Code Raider Clash Champion Logo - Awarded to Dharmik Gohil" title="Code Raider Clash Winner" class="about__portrait-small" loading="lazy" decoding="async" width="120" height="120" />
            <p class="about__bio reveal">
              Hi, I'm Dharmik Gohil, a Full Stack Software Engineer & System Architect specializing in custom ERPNext implementations, Frappe framework development, high-throughput CRM platforms, scalable microservices, and modern web applications.
            </p>
            <div class="about__stats reveal">
              <div class="about__stat">
                <div class="about__stat-icon">✳</div>
                <div class="about__stat-number" data-count="15" data-suffix="+">0+</div>
                <div class="about__stat-label">SYSTEMS DEPLOYED</div>
                <p class="about__stat-desc">Successfully architected and deployed full stack applications, ERPNext modules, CRM systems, and cloud APIs.</p>
              </div>
              <div class="about__stat">
                <div class="about__stat-icon">✳</div>
                <div class="about__stat-number" data-count="8" data-suffix="+">0+</div>
                <div class="about__stat-label">HAPPY CLIENTS</div>
                <p class="about__stat-desc">Global clients trust my code for business automation, CRM performance, speed, security, and clean system design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SERVICES -->
    <section class="services section">
      <div class="container">
        <div class="services__header reveal">
          <div>
            <div class="eyebrow">OUR SERVICES</div>
            <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">SCALABLE SOFTWARE & ENTERPRISE SERVICES <span class="gray">FOR YOUR BUSINESS</span></h2>
          </div>
        </div>

        <div class="services__list">
          <!-- Service 001 -->
          <div class="services__item active">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">001 ✳</span>
              <h3 class="services__item-title"><span class="accent">FULL STACK</span> WEB DEVELOPMENT</h3>
              <p class="services__item-desc">End-to-end modern web applications built with React, Next.js, Node.js, and TypeScript.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" alt="Full Stack Web Development Services - React, Next.js, Node.js by Dharmik Gohil" title="Full Stack Web Development" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">React / Next.js</span>
                    <span class="pill-tag">TypeScript</span>
                    <span class="pill-tag">Node.js</span>
                    <span class="pill-tag">Tailwind CSS</span>
                    <span class="pill-tag">Web Vitals</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 002 -->
          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">002 ✳</span>
              <h3 class="services__item-title"><span class="accent">ERPNEXT & FRAPPE</span> CUSTOMIZATION</h3>
              <p class="services__item-desc">Tailored ERPNext modules, custom DocTypes, automated workflow triggers, HRMS/Inventory automation, and Frappe script extensions.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" alt="ERPNext and Frappe Framework Customization Services by Dharmik Gohil" title="ERPNext & Frappe Customization" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">ERPNext Modules</span>
                    <span class="pill-tag">Frappe Framework</span>
                    <span class="pill-tag">Custom DocTypes</span>
                    <span class="pill-tag">Python & MariaDB</span>
                    <span class="pill-tag">Workflow Automation</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 003 -->
          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">003 ✳</span>
              <h3 class="services__item-title"><span class="accent">CUSTOM CRM & SALES</span> PLATFORMS</h3>
              <p class="services__item-desc">Designing multi-tenant CRM systems with automated lead pipelines, email/WhatsApp triggers, deal forecasting, and customer portals.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" alt="Custom CRM Platform and Sales Pipeline Development by Dharmik Gohil" title="Custom CRM & Sales Platforms" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">CRM Pipelines</span>
                    <span class="pill-tag">Lead Management</span>
                    <span class="pill-tag">WhatsApp API Integration</span>
                    <span class="pill-tag">Analytics Dashboard</span>
                    <span class="pill-tag">Omnichannel CRM</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 004 -->
          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">004 ✳</span>
              <h3 class="services__item-title"><span class="accent">CLOUD & SYSTEM</span> ARCHITECTURE</h3>
              <p class="services__item-desc">Architecting fault-tolerant microservices, serverless backends, and event-driven cloud systems.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" alt="Cloud & Microservices System Architecture Services by Dharmik Gohil" title="Cloud & System Architecture" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Microservices</span>
                    <span class="pill-tag">Docker & K8s</span>
                    <span class="pill-tag">AWS Cloud</span>
                    <span class="pill-tag">Serverless</span>
                    <span class="pill-tag">System Design</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 005 -->
          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">005 ✳</span>
              <h3 class="services__item-title"><span class="accent">REST & GRAPHQL</span> API ENGINEERING</h3>
              <p class="services__item-desc">High-throughput backend APIs, secure authentication gateways, and microservice communication.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop" alt="REST and GraphQL API Engineering Services by Dharmik Gohil" title="REST & GraphQL API Engineering" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">GraphQL</span>
                    <span class="pill-tag">RESTful APIs</span>
                    <span class="pill-tag">Express / FastAPI</span>
                    <span class="pill-tag">JWT & OAuth</span>
                    <span class="pill-tag">OpenAPI</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 006 -->
          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">006 ✳</span>
              <h3 class="services__item-title"><span class="accent">DATABASE</span> DESIGN & CACHING</h3>
              <p class="services__item-desc">Relational and NoSQL database modeling, high-performance indexing, and Redis caching layers.</p>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="/datasphere-db.jpg" alt="Database Architecture, PostgreSQL and Redis Caching Services by Dharmik Gohil" title="Database Design & Caching" class="services__item-image" loading="lazy" decoding="async" width="400" height="267" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">PostgreSQL</span>
                    <span class="pill-tag">MongoDB</span>
                    <span class="pill-tag">Redis</span>
                    <span class="pill-tag">Prisma ORM</span>
                    <span class="pill-tag">Query Optimization</span>
                  </div>
                  <a href="#/services" class="btn btn--accent services__item-btn" data-hover>EXPLORE SERVICES <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services__load-more reveal">
          <a href="#/services" class="btn btn--accent" data-hover>ALL SERVICES <span class="btn__arrow">→</span></a>
        </div>
      </div>
    </section>

    <!-- SECTION 4: PROJECTS -->
    <section class="projects section">
      <div class="container">
        <div class="projects__header reveal">
          <div class="eyebrow">PORTFOLIO</div>
          <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem;">FEATURED <span class="gray">SYSTEMS & PROJECTS.</span></h2>
        </div>

        <div class="projects__grid reveal-stagger">
          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="ERPNext Enterprise Operations Hub - Custom ERP Solution by Dharmik Gohil" title="ERPNext Enterprise Operations Hub" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> ERPNext Enterprise Hub</span>
              <span class="projects__card-category">/ERPNext & Enterprise ERP</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" alt="OmniFlow CRM Platform - Multi-tenant Sales Pipeline Suite by Dharmik Gohil" title="OmniFlow CRM Platform" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> OmniFlow CRM Platform</span>
              <span class="projects__card-category">/CRM & Sales Automation</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" alt="FrappeERP E-Commerce Sync Engine - Async Middleware Integration by Dharmik Gohil" title="FrappeERP E-Commerce Sync Engine" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> FrappeERP Sync Engine</span>
              <span class="projects__card-category">/ERPNext Middleware</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="Nexus Cloud Engine - Distributed Cloud Microservices Platform by Dharmik Gohil" title="Nexus Cloud Engine" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Nexus Cloud Engine</span>
              <span class="projects__card-category">/Cloud Microservices</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="DevPulse Analytics - Real-time SaaS Web Application by Dharmik Gohil" title="DevPulse Analytics" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> DevPulse Analytics</span>
              <span class="projects__card-category">/SaaS Web Application</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="/datasphere-db.jpg" alt="DataSphere DB - Optimized Distributed Relational Database System by Dharmik Gohil" title="DataSphere DB" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> DataSphere DB</span>
              <span class="projects__card-category">/Database Systems</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" alt="FlowCraft Studio - Dynamic Frontend Web Application Architecture by Dharmik Gohil" title="FlowCraft Studio" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> FlowCraft Studio</span>
              <span class="projects__card-category">/Web Application</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" alt="Vanguard Sentinel - Enterprise DevOps and Cloud Security System by Dharmik Gohil" title="Vanguard Sentinel" loading="lazy" decoding="async" width="600" height="400" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Vanguard Sentinel</span>
              <span class="projects__card-category">/DevOps & Security</span>
            </div>
          </div>

          <div class="projects__all-btn">
            <a href="#/blogs" class="btn btn--accent" data-hover>TECHNICAL ARTICLES <span class="btn__arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: PROCESS -->
    <section class="process section">
      <div class="container">
        <div class="eyebrow reveal">MY DEVELOPMENT PROCESS</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">ENGINEERING PROCESS <span class="gray">THAT SCALES</span></h2>

        <div class="process__grid reveal-stagger">
          <div class="process__card" data-hover>
            <div class="process__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div class="process__card-number">01</div>
            <div>
              <h3 class="process__card-title">ARCHITECTURE & SPECIFICATION</h3>
              <p class="process__card-desc">Thorough requirements gathering, system design modeling, database schemas, and API specification.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <div class="process__card-number">02</div>
            <div>
              <h3 class="process__card-title">FULL STACK IMPLEMENTATION</h3>
              <p class="process__card-desc">Writing clean, testable frontend and backend code with modular design patterns and modern frameworks.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="process__card-number">03</div>
            <div>
              <h3 class="process__card-title">TESTING & INTEGRATION</h3>
              <p class="process__card-desc">Automated unit testing, integration tests, end-to-end verification, and continuous security audits.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <div class="process__card-number">04</div>
            <div>
              <h3 class="process__card-title">DEPLOYMENT & OPTIMIZATION</h3>
              <p class="process__card-desc">CI/CD automation, cloud deployment, database query tuning, and real-time performance monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: RESULTS -->
    ${renderResultsGrid()}

    <!-- SECTION 7: PRICING -->
    <section class="pricing section">
      <div class="container">
        <div class="pricing__header reveal">
          <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 4vw, 3.5rem);">SIMPLE PLANS <span class="gray">FOR EVERY NEED</span></h2>
          <div class="pricing__toggle">
            <button class="pricing__toggle-btn active" data-mode="monthly" data-hover>MONTHLY</button>
            <button class="pricing__toggle-btn" data-mode="project" data-hover>PROJECT BASED</button>
          </div>
        </div>

        <div class="pricing__grid reveal-stagger">
          <!-- Starter -->
          <div class="pricing__card" data-hover>
            <div class="pricing__card-label">STARTER PACKAGE</div>
            <div class="pricing__card-price">
              <span data-price-monthly>$300</span>
              <span data-price-project style="display:none">$800</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Custom Web Application</li>
              <li><span class="icon">→</span> Responsive UI/UX Design</li>
              <li><span class="icon">→</span> REST API Integration</li>
              <li><span class="icon">→</span> Database Architecture</li>
              <li><span class="icon">→</span> Source Code & Docs</li>
              <li><span class="icon">→</span> 1 Month Support</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div class="pricing__card-guarantee-text">
                <div class="pricing__card-guarantee-title">SATISFACTION GUARANTEE</div>
                <div class="pricing__card-guarantee-desc">100% satisfaction or free revisions</div>
              </div>
            </div>
            <div class="pricing__card-meta">
              <span>2-3 weeks delivery</span>
              <span>2 Revisions</span>
            </div>
            <a href="#/contact" class="btn btn--outline pricing__card-btn" data-hover>GET STARTED</a>
          </div>

          <!-- Professional (Featured) -->
          <div class="pricing__card pricing__card--featured" data-hover>
            <div class="pricing__card-label">COMPLETE PACKAGE</div>
            <div class="pricing__card-price">
              <span data-price-monthly>$700</span>
              <span data-price-project style="display:none">$1800</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Full Stack Web Platform</li>
              <li><span class="icon">→</span> ERPNext / Custom CRM Module</li>
              <li><span class="icon">→</span> Microservices & Cloud Setup</li>
              <li><span class="icon">→</span> Advanced Database & Caching</li>
              <li><span class="icon">→</span> CI/CD & Automated Testing</li>
              <li><span class="icon">→</span> Security & Auth Gateway</li>
              <li><span class="icon">→</span> 3 Months Support</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div class="pricing__card-guarantee-text">
                <div class="pricing__card-guarantee-title">SATISFACTION GUARANTEE</div>
                <div class="pricing__card-guarantee-desc">100% satisfaction or free revisions</div>
              </div>
            </div>
            <div class="pricing__card-meta">
              <span>4-8 weeks delivery</span>
              <span>5 Revisions</span>
            </div>
            <a href="#/contact" class="btn btn--accent pricing__card-btn" data-hover>GET STARTED</a>
          </div>

          <!-- Enterprise -->
          <div class="pricing__card" data-hover>
            <div class="pricing__card-label">ENTERPRISE</div>
            <div class="pricing__card-price">
              <span data-price-monthly>$1200</span>
              <span data-price-project style="display:none">$3500</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Full ERPNext Enterprise Setup</li>
              <li><span class="icon">→</span> Multi-Tenant CRM Platform</li>
              <li><span class="icon">→</span> Distributed System Architecture</li>
              <li><span class="icon">→</span> Enterprise Multi-tenant Cloud</li>
              <li><span class="icon">→</span> Dedicated DevOps Support</li>
              <li><span class="icon">→</span> 24/7 System Monitoring</li>
              <li><span class="icon">→</span> 6 Months Support</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div class="pricing__card-guarantee-text">
                <div class="pricing__card-guarantee-title">SATISFACTION GUARANTEE</div>
                <div class="pricing__card-guarantee-desc">100% satisfaction or free revisions</div>
              </div>
            </div>
            <div class="pricing__card-meta">
              <span>8-16 weeks delivery</span>
              <span>Unlimited Revisions</span>
            </div>
            <a href="#/contact" class="btn btn--outline pricing__card-btn" data-hover>GET STARTED</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8: INSIGHTS -->
    <section class="insights section">
      <div class="container">
        <div class="eyebrow reveal">ENGINEERING ARTICLES</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">LATEST DEV & <span class="gray">SYSTEM INSIGHTS</span></h2>

        <div class="insights__grid reveal-stagger">
          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Building Custom ERPNext Modules with Frappe Framework - Article by Dharmik Gohil" title="Building Custom ERPNext Modules with Frappe" loading="lazy" decoding="async" width="800" height="533" />
              <span class="insights__card-tag pill-tag pill-tag--accent">ERPNEXT</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">BUILDING CUSTOM ERPNEXT MODULES & WORKFLOWS WITH FRAPPE</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Jan 2026</p>
            </div>
          </div>

          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" alt="Architecting High Throughput Multi-tenant CRM Systems - Technical Article by Dharmik Gohil" title="Architecting High-Throughput CRM Systems" loading="lazy" decoding="async" width="800" height="533" />
              <span class="insights__card-tag pill-tag pill-tag--accent">CRM</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">ARCHITECTING HIGH-THROUGHPUT MULTI-TENANT CRM PIPELINES</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Jan 2026</p>
            </div>
          </div>

          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="/postgres-optimization.jpg" alt="Optimizing Database Query Performance in PostgreSQL at Scale - Technical Article by Dharmik Gohil" title="Optimizing PostgreSQL Performance at Scale" loading="lazy" decoding="async" width="800" height="533" />
              <span class="insights__card-tag pill-tag pill-tag--accent">DATABASE</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">OPTIMIZING DATABASE QUERY PERFORMANCE IN POSTGRESQL AT SCALE</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Dec 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: CONTACT CTA -->
    ${renderContactCTA()}

    <!-- FOOTER -->
    ${renderFooter()}
  `;
}

export function initHome() {
  heroAnimation();
  initAccordion('.services__item');
  initPricingToggle();
  initCounters();
}
