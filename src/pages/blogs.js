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
              <img src="https://picsum.photos/seed/art1/800/500" alt="MASTERING OBJECT POOLING FOR HIGH-PERFORMANCE UNITY GAMES" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">UNITY</span>
              <h2 class="blogs-grid__card-title">MASTERING OBJECT POOLING FOR HIGH-PERFORMANCE UNITY GAMES</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Jan 2026</p>
            </div>
          </a>

          <!-- Article 2 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art2/800/500" alt="DESIGNING INTUITIVE HAND TRACKING INTERACTIONS FOR QUEST 3" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">XR</span>
              <h2 class="blogs-grid__card-title">DESIGNING INTUITIVE HAND TRACKING INTERACTIONS FOR QUEST 3</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Dec 2025</p>
            </div>
          </a>

          <!-- Article 3 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art3/800/500" alt="BUILDING A SCALABLE MULTIPLAYER ARCHITECTURE WITH PHOTON" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">GAME DEV</span>
              <h2 class="blogs-grid__card-title">BUILDING A SCALABLE MULTIPLAYER ARCHITECTURE WITH PHOTON</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Nov 2025</p>
            </div>
          </a>

          <!-- Article 4 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art4/800/500" alt="SHADER GRAPH ESSENTIALS: CREATING STYLIZED WATER IN UNITY URP" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">UNITY</span>
              <h2 class="blogs-grid__card-title">SHADER GRAPH ESSENTIALS: CREATING STYLIZED WATER IN UNITY URP</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Oct 2025</p>
            </div>
          </a>

          <!-- Article 5 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art5/800/500" alt="AR FOUNDATION 6.0: WHAT IS NEW AND HOW TO MIGRATE YOUR PROJECT" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">AR</span>
              <h2 class="blogs-grid__card-title">AR FOUNDATION 6.0: WHAT IS NEW AND HOW TO MIGRATE YOUR PROJECT</h2>
              <p class="blogs-grid__card-meta">Written by Dharmik Gohil • Published Sep 2025</p>
            </div>
          </a>

          <!-- Article 6 -->
          <a href="#" class="blogs-grid__card">
            <div class="blogs-grid__card-image">
              <img src="https://picsum.photos/seed/art6/800/500" alt="PROCEDURAL LEVEL GENERATION TECHNIQUES FOR ROGUELIKE GAMES" />
            </div>
            <div class="blogs-grid__card-content">
              <span class="pill-tag pill-tag--accent blogs-grid__card-tag">GAME DEV</span>
              <h2 class="blogs-grid__card-title">PROCEDURAL LEVEL GENERATION TECHNIQUES FOR ROGUELIKE GAMES</h2>
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
