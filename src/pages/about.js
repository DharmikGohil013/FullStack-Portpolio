import { renderContactCTA } from '../components/contactCTA.js';
import { renderResultsGrid } from '../components/resultsGrid.js';
import { renderAchievements } from '../components/achievements.js';
import { renderFAQ } from '../components/faq.js';
import { renderNewsletter } from '../components/newsletter.js';
import { renderFooter } from '../components/footer.js';
import { initAccordion } from '../animations.js';
import { initCounters } from '../counter.js';

export function renderAbout() {
  const skills = [
    'React / Next.js', 'TypeScript', 'Node.js & Express',
    'PostgreSQL & SQL', 'MongoDB', 'Docker & Kubernetes',
    'AWS & Cloud Architecture', 'GraphQL & REST APIs', 'Redis Caching',
    'Go / Golang', 'Python & FastAPI', 'Prisma ORM',
    'Git & CI/CD Pipelines', 'Tailwind CSS & Modern UI', 'System Design & Microservices',
    'Performance Tuning & Web Vitals', 'Security & OAuth2', 'Figma & System Specs'
  ];

  return `
    <!-- ABOUT HERO -->
    <section class="about-hero">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <p class="about-hero__label">DHARMIK GOHIL<sup>®</sup></p>
            <h1 class="about-hero__heading reveal">ABOUT ME<span class="about-hero__accent"></span></h1>
          </div>
          <span class="about-hero__scroll">©2026 Scroll to Explore</span>
        </div>

        <!-- Gallery Strip -->
        <div class="about-gallery reveal-stagger">
          <div class="about-gallery__img">
            <img src="/dharmik-persona.png" alt="Dharmik Gohil" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery2/600/400" alt="System Architecture" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery3/600/400" alt="Codebase Setup" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery4/600/400" alt="Developer Workspace" />
          </div>
        </div>
      </div>
    </section>

    <!-- STATEMENT SECTION -->
    <section class="about-statement section">
      <div class="container">
        <h2 class="about-statement__heading heading-two-tone reveal">
          DHARMIK BELIEVES CLEAN ARCHITECTURE CREATES <span class="gray">RELIABLE & SCALABLE SYSTEMS.</span>
        </h2>
        <p class="about-statement__text reveal">
          As a Full Stack Software Engineer & System Architect, my philosophy centers on building high-performance, fault-tolerant web applications and distributed backend infrastructure. I combine deep technical expertise with clean code practices to deliver robust software products.
        </p>
        <div class="about-statement__stats reveal-stagger">
          <div>
            <div class="about-statement__stat-value" data-count="45" data-suffix="+">0+</div>
            <div class="about-statement__stat-label">Successful Systems</div>
          </div>
          <div>
            <div class="about-statement__stat-value" data-count="6" data-suffix="+">0+</div>
            <div class="about-statement__stat-label">Years Experience</div>
          </div>
          <div>
            <div class="about-statement__stat-value" data-count="85" data-suffix="+">0+</div>
            <div class="about-statement__stat-label">Global Clients</div>
          </div>
        </div>
        <div class="about-statement__trust reveal">
          <div class="about-statement__trust-avatars">
            <img src="https://picsum.photos/seed/trust1/80/80" alt="Client" />
            <img src="https://picsum.photos/seed/trust2/80/80" alt="Client" />
            <img src="https://picsum.photos/seed/trust3/80/80" alt="Client" />
          </div>
          <div class="about-statement__trust-text">
            <div style="display: inline-flex; gap: 2px; align-items: center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <strong>4K+</strong> Trust Me
          </div>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS -->
    ${renderAchievements()}

    <!-- CAREER JOURNEY -->
    <section class="career section">
      <div class="container">
        <div class="eyebrow reveal">CAREER JOURNEY</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem; margin-bottom: 3rem;">
          ENGINEERING EXCELLENCE <span class="gray">FOR MODERN ENTERPRISES</span>
        </h2>
        <div class="career__cards reveal-stagger">
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-evo/700/500" alt="Senior Software Engineer" />
            <div class="career__card-overlay">
              <div class="career__card-name">Tech Scale Inc</div>
              <div class="career__card-period">SENIOR_FULL_STACK_ENGINEER_[2023-PRESENT]</div>
            </div>
          </div>
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-free/700/500" alt="System Architect" />
            <div class="career__card-overlay">
              <div class="career__card-name">Independent Consultant</div>
              <div class="career__card-period">SYSTEM_ARCHITECT_[2022-PRESENT]</div>
            </div>
          </div>
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-idc/700/500" alt="Co-Founder & Tech Lead" />
            <div class="career__card-overlay">
              <div class="career__card-name">Dev Collective</div>
              <div class="career__card-period">CO-FOUNDER_&_TECH_LEAD_[2021-PRESENT]</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS CLOUD -->
    <section class="skills-cloud section">
      <div class="container">
        <div class="eyebrow reveal">TECH STACK</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem;">
          TOOLS & <span class="gray">TECHNOLOGIES</span>
        </h2>
        <div class="skills-cloud__grid reveal-stagger">
          ${skills.map(skill => `
            <div class="skills-cloud__tag" data-hover>
              <span class="skills-cloud__tag-icon">✳</span>
              ${skill}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- RESULTS GRID (reused) -->
    ${renderResultsGrid()}

    <!-- FAQ (reused) -->
    ${renderFAQ()}

    <!-- CONTACT CTA (reused) -->
    ${renderContactCTA()}

    <!-- NEWSLETTER (reused) -->
    ${renderNewsletter()}

    <!-- FOOTER (reused) -->
    ${renderFooter()}
  `;
}

export function initAbout() {
  initAccordion('.faq__item');
  initCounters();
}
