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
    'Unity Engine (2D & 3D)', 'C# Scripting', 'AR Foundation',
    'VR SDKs (Meta XR / OpenXR)', 'Multiplayer Netcode', 'Photon PUN',
    'Mirror Networking', 'Shader Graph', 'HLSL Basics', 'Blender',
    'Game UI/UX Design', 'Mobile Builds (Android/iOS)', 'Git & Version Control',
    'Performance Profiling', 'XR Interaction Toolkit', 'HTML/CSS/JS',
    'Firebase', 'Figma'
  ];

  return `
    <!-- ABOUT HERO -->
    <section class="about-hero">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <p class="about-hero__label">DHARMIK GOHIL<sup>®</sup></p>
            <h1 class="about-hero__heading reveal">ABOUT US<span class="about-hero__accent"></span></h1>
          </div>
          <span class="about-hero__scroll">©2026 Scroll to Explore</span>
        </div>

        <!-- Gallery Strip -->
        <div class="about-gallery reveal-stagger">
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery1/600/400" alt="Gallery 1" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery2/600/400" alt="Gallery 2" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery3/600/400" alt="Gallery 3" />
          </div>
          <div class="about-gallery__img">
            <img src="https://picsum.photos/seed/gallery4/600/400" alt="Gallery 4" />
          </div>
        </div>
      </div>
    </section>

    <!-- STATEMENT SECTION -->
    <section class="about-statement section">
      <div class="container">
        <h2 class="about-statement__heading heading-two-tone reveal">
          DHARMIK BELIEVES GAMES & XR CREATE <span class="gray">MEANINGFUL USER EXPERIENCES.</span>
        </h2>
        <p class="about-statement__text reveal">
          As a Unity Game Developer and XR Engineer, my philosophy centers on building immersive and performant experiences.
          I combine deep technical expertise with a sharp eye for interactive design to craft solutions that captivate users
          and push the boundaries of spatial computing and interactive entertainment.
        </p>
        <div class="about-statement__stats reveal-stagger">
          <div>
            <div class="about-statement__stat-value" data-count="37" data-suffix="+">0+</div>
            <div class="about-statement__stat-label">Successful Projects</div>
          </div>
          <div>
            <div class="about-statement__stat-value" data-count="7" data-suffix="+">0+</div>
            <div class="about-statement__stat-label">Years Experience</div>
          </div>
          <div>
            <div class="about-statement__stat-value" data-count="70" data-suffix="+">0+</div>
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
            <span style="color: #F59E0B;">★★★★★</span>
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
          PURPOSE-DRIVEN EXPERIENCES <span class="gray">FOR MODERN COMPANIES</span>
        </h2>
        <div class="career__cards reveal-stagger">
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-evo/700/500" alt="evoDART Studios" />
            <div class="career__card-overlay">
              <div class="career__card-name">evoDART Studios</div>
              <div class="career__card-period">GAME_DEVELOPER_[2023-PRESENT]</div>
            </div>
          </div>
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-free/700/500" alt="Freelance" />
            <div class="career__card-overlay">
              <div class="career__card-name">Freelance</div>
              <div class="career__card-period">XR_ENGINEER_[2022-PRESENT]</div>
            </div>
          </div>
          <div class="career__card" data-hover>
            <img src="https://picsum.photos/seed/career-idc/700/500" alt="Indian Developer Community" />
            <div class="career__card-overlay">
              <div class="career__card-name">Indian Developer Community</div>
              <div class="career__card-period">CO-FOUNDER_[2021-PRESENT]</div>
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
