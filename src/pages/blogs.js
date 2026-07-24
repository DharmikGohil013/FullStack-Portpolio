import { renderContactCTA } from '../components/contactCTA.js';
import { renderFooter } from '../components/footer.js';

export function renderBlogs() {
  return `
    <section class="blogs-hero">
      <div class="container">
        <span class="blogs-hero__scroll">©2026 Scroll to Explore</span>
        <h1 class="blogs-hero__heading reveal">ARTICLES</h1>
      </div>
    </section>

    <section class="blogs-grid section">
      <div class="container">
        <div class="blogs-grid__content reveal-stagger">
          <!-- Article 1 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art1/800/500" alt="BUILDING SCALABLE MICROSERVICES WITH GO & DOCKER" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">CLOUD</span>
              <h2 class="blogs-grid__card-title">BUILDING SCALABLE MICROSERVICES WITH GO & DOCKER</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Jan 2026</p>
            </div>
          </a>

          <!-- Article 2 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art2/800/500" alt="OPTIMIZING DATABASE QUERY PERFORMANCE IN POSTGRESQL AT SCALE" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">DATABASE</span>
              <h2 class="blogs-grid__card-title">OPTIMIZING DATABASE QUERY PERFORMANCE IN POSTGRESQL AT SCALE</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Dec 2025</p>
            </div>
          </a>

          <!-- Article 3 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art3/800/500" alt="NEXT.JS 15 SERVER COMPONENTS: ARCHITECTURE & BEST PRACTICES" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">FULL STACK</span>
              <h2 class="blogs-grid__card-title">NEXT.JS 15 SERVER COMPONENTS: ARCHITECTURE & BEST PRACTICES</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Nov 2025</p>
            </div>
          </a>

          <!-- Article 4 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art4/800/500" alt="DESIGNING RESILIENT DISTRIBUTED SYSTEMS WITH REDIS & KAFKA" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">SYSTEM DESIGN</span>
              <h2 class="blogs-grid__card-title">DESIGNING RESILIENT DISTRIBUTED SYSTEMS WITH REDIS & KAFKA</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Oct 2025</p>
            </div>
          </a>

          <!-- Article 5 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art5/800/500" alt="HIGH-THROUGHPUT GRAPHQL APIS WITH NODE.JS & PRISMA" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">API</span>
              <h2 class="blogs-grid__card-title">HIGH-THROUGHPUT GRAPHQL APIS WITH NODE.JS & PRISMA</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Sep 2025</p>
            </div>
          </a>

          <!-- Article 6 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art6/800/500" alt="DEV-TO-CLOUD: AUTOMATING ZERO-DOWNTIME CI/CD PIPELINES" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">DEVOPS</span>
              <h2 class="blogs-grid__card-title">DEV-TO-CLOUD: AUTOMATING ZERO-DOWNTIME CI/CD PIPELINES</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Aug 2025</p>
            </div>
          </a>
        </div>
        <div class="blogs-grid__load-more reveal">
          <button class="btn btn--accent" data-hover>LOAD MORE <span class="btn__arrow">→</span></button>
        </div>
      </div>
    </section>

    ${renderContactCTA()}
    ${renderFooter()}
  `;
}

export function initBlogs() {}
