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
          <p class="hero__tagline">I BUILD IMMERSIVE, USER-FOCUSED GAMES AND XR EXPERIENCES THAT ARE SIMPLE, SMART, AND IMPACTFUL.</p>
        </div>
        <div></div>
      </div>

      <div class="hero__portrait">
        <img src="https://picsum.photos/seed/hero-portrait/800/1000" alt="Dharmik Gohil" />
      </div>

      <div class="hero__featured-card">
        <img src="https://picsum.photos/seed/featured-proj/400/300" alt="Featured Project" />
        <div class="hero__featured-card-info">
          <span>ZENTIX</span>
          <span>/ Game Dev</span>
        </div>
      </div>

      <div class="hero__bottom">
        <div class="hero__bottom-left">
          <div class="hero__copyright">©2026</div>
          <div class="hero__big-name">DHARMIK</div>
        </div>
        <div class="hero__contact-card">
          <img src="https://picsum.photos/seed/avatar-sm/100/100" alt="Dharmik" />
          <div class="hero__contact-card-text">
            <div class="hero__contact-card-label">Let's Talk</div>
            <div class="hero__contact-card-name">Dharmik Gohil</div>
            <div class="hero__contact-card-role">Unity Game Developer & XR Engineer</div>
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
              <img src="https://picsum.photos/seed/about-walk/400/500" alt="About" />
            </div>
            <div class="about__img-frame about__img-frame--small reveal">
              <img src="https://picsum.photos/seed/about-portrait/300/400" alt="Portrait" />
            </div>
          </div>
          <div class="about__text">
            <div class="about__eyebrow eyebrow reveal">BETTER DIGITAL JOURNEYS.</div>
            <h2 class="about__heading heading-two-tone reveal">MY IMPACT THROUGH<br>USER<br><span class="gray">EXPERIENCE</span></h2>
            <span class="about__sparkle reveal">✳</span>
            <img src="https://picsum.photos/seed/about-small/200/200" alt="Dharmik" class="about__portrait-small" />
            <p class="about__bio reveal">
              Hi, I'm Dharmik Gohil, a Unity Game Developer & XR Engineer passionate about creating intuitive and visually engaging games and interactive experiences. I combine technical depth with creative design to build products that truly resonate.
            </p>
            <div class="about__stats reveal">
              <div class="about__stat">
                <div class="about__stat-icon">✳</div>
                <div class="about__stat-number" data-count="37" data-suffix="+">0+</div>
                <div class="about__stat-label">PROJECTS COMPLETED</div>
                <p class="about__stat-desc">Successfully delivered games, XR apps, and interactive experiences across multiple platforms.</p>
              </div>
              <div class="about__stat">
                <div class="about__stat-icon">✳</div>
                <div class="about__stat-number" data-count="70" data-suffix="+">0+</div>
                <div class="about__stat-label">HAPPY CLIENTS</div>
                <p class="about__stat-desc">Clients worldwide trust my work for quality, performance, and creative excellence.</p>
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
            <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">POWERFUL DEVELOPMENT SERVICES <span class="gray">FOR YOUR BRAND</span></h2>
          </div>
        </div>

        <div class="services__list">
          <div class="services__item active">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">001 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">GAME</span><br>DEVELOPMENT</h3>
                <p class="services__item-desc">End-to-end game creation from concept to launch across mobile, PC, and console platforms.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-1/400/300" alt="Game Development" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Unity Engine</span>
                    <span class="pill-tag">C# Scripting</span>
                    <span class="pill-tag">Mobile Builds</span>
                    <span class="pill-tag">Cross-Platform</span>
                    <span class="pill-tag">Performance Optimization</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">002 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">XR</span><br>/ AR-VR DEVELOPMENT</h3>
                <p class="services__item-desc">Building immersive augmented and virtual reality experiences for enterprise and entertainment.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-2/400/300" alt="XR Development" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">AR Foundation</span>
                    <span class="pill-tag">Meta XR SDK</span>
                    <span class="pill-tag">OpenXR</span>
                    <span class="pill-tag">XR Interaction Toolkit</span>
                    <span class="pill-tag">Spatial Anchors</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">003 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">UNITY</span><br>3D DEVELOPMENT</h3>
                <p class="services__item-desc">Custom Unity solutions for interactive 3D applications, simulations, and visualizations.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-3/400/300" alt="Unity 3D" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Shader Graph</span>
                    <span class="pill-tag">HLSL</span>
                    <span class="pill-tag">3D Physics</span>
                    <span class="pill-tag">Custom Editor Tools</span>
                    <span class="pill-tag">Scriptable Objects</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">004 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">MULTIPLAYER</span><br>SYSTEMS</h3>
                <p class="services__item-desc">Real-time multiplayer architecture for competitive and cooperative gaming experiences.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-4/400/300" alt="Multiplayer" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Photon PUN</span>
                    <span class="pill-tag">Mirror Networking</span>
                    <span class="pill-tag">Netcode for GameObjects</span>
                    <span class="pill-tag">Relay Servers</span>
                    <span class="pill-tag">Matchmaking</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">005 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">3D</span><br>& ANIMATION</h3>
                <p class="services__item-desc">Creating stunning 3D assets, environments, and animations for games and interactive media.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-5/400/300" alt="3D & Animation" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Blender</span>
                    <span class="pill-tag">3D Modeling</span>
                    <span class="pill-tag">Rigging</span>
                    <span class="pill-tag">Animation</span>
                    <span class="pill-tag">VFX Graph</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="services__item">
            <div class="services__item-header" data-accordion-header>
              <span class="services__item-index">006 ✳</span>
              <div>
                <h3 class="services__item-title"><span class="accent">TECHNICAL</span><br>CONSULTING</h3>
                <p class="services__item-desc">Expert guidance on Unity architecture, XR integration, and game development pipelines.</p>
              </div>
              <span class="services__item-toggle">+</span>
            </div>
            <div class="services__item-body">
              <div class="services__item-body-content">
                <img src="https://picsum.photos/seed/service-6/400/300" alt="Technical Consulting" class="services__item-image" />
                <div>
                  <div class="services__item-tags">
                    <span class="pill-tag">Code Review</span>
                    <span class="pill-tag">Architecture Planning</span>
                    <span class="pill-tag">Pipeline Optimization</span>
                    <span class="pill-tag">Team Training</span>
                    <span class="pill-tag">Documentation</span>
                  </div>
                  <a href="#" class="btn btn--accent services__item-btn" data-hover>VIEW PROJECT <span class="btn__arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services__load-more reveal">
          <button class="btn btn--accent" data-hover>LOAD MORE <span class="btn__arrow">→</span></button>
        </div>
      </div>
    </section>

    <!-- SECTION 4: PROJECTS -->
    <section class="projects section">
      <div class="container">
        <div class="projects__header reveal">
          <div class="eyebrow">PORTFOLIO</div>
          <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem;">OUR <span class="gray">PROJECTS.</span></h2>
        </div>

        <div class="projects__grid reveal-stagger">
          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-nebula/600/700" alt="Nebula Runner" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Nebula Runner</span>
              <span class="projects__card-category">/Game Dev</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-armuseum/600/800" alt="AR Museum Guide" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> AR Museum Guide</span>
              <span class="projects__card-category">/XR</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-void/600/700" alt="Void Strikers" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Void Strikers</span>
              <span class="projects__card-category">/Multiplayer</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-medivr/600/750" alt="MediVR Training" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> MediVR Training</span>
              <span class="projects__card-category">/VR</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-pixel/600/700" alt="Pixel Forge Editor" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Pixel Forge Editor</span>
              <span class="projects__card-category">/Tools</span>
            </div>
          </div>

          <div class="projects__card" data-hover>
            <div class="projects__card-image">
              <img src="https://picsum.photos/seed/proj-drift/600/800" alt="Drift Legends" />
            </div>
            <div class="projects__card-info">
              <span class="projects__card-name"><span class="sparkle">✳</span> Drift Legends</span>
              <span class="projects__card-category">/Racing</span>
            </div>
          </div>

          <div class="projects__all-btn">
            <a href="#/blogs" class="btn btn--accent" data-hover>ALL PROJECTS <span class="btn__arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: PROCESS -->
    <section class="process section">
      <div class="container">
        <div class="eyebrow reveal">MY DEVELOPMENT PROCESS</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">DEVELOPMENT PROCESS <span class="gray">THAT WORKS</span></h2>

        <div class="process__grid reveal-stagger">
          <div class="process__card" data-hover>
            <div class="process__card-icon">🎯</div>
            <div class="process__card-number">01</div>
            <div>
              <h3 class="process__card-title">PROTOTYPING</h3>
              <p class="process__card-desc">Rapid iteration on core mechanics and user flows to validate concepts before full development.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">⚙️</div>
            <div class="process__card-number">02</div>
            <div>
              <h3 class="process__card-title">CORE MECHANICS</h3>
              <p class="process__card-desc">Building robust game systems, physics, AI, and interaction frameworks that form the foundation.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">🎮</div>
            <div class="process__card-number">03</div>
            <div>
              <h3 class="process__card-title">PLAYTESTING</h3>
              <p class="process__card-desc">Rigorous user testing and feedback loops to refine gameplay and ensure intuitive experiences.</p>
            </div>
          </div>
          <div class="process__card" data-hover>
            <div class="process__card-icon">✨</div>
            <div class="process__card-number">04</div>
            <div>
              <h3 class="process__card-title">OPTIMIZATION & POLISH</h3>
              <p class="process__card-desc">Performance profiling, visual polish, and platform-specific optimization for launch readiness.</p>
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
              <span data-price-monthly>$200</span>
              <span data-price-project style="display:none">$500</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Core Gameplay Prototype</li>
              <li><span class="icon">→</span> Single Platform Build</li>
              <li><span class="icon">→</span> Basic Game UI/UX</li>
              <li><span class="icon">→</span> 2 Revision Rounds</li>
              <li><span class="icon">→</span> Email Support</li>
              <li><span class="icon">→</span> Source Files</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon">⚡</span>
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
              <span data-price-monthly>$500</span>
              <span data-price-project style="display:none">$1200</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Full Game Development</li>
              <li><span class="icon">→</span> Cross-Platform Build</li>
              <li><span class="icon">→</span> Advanced Game UI/UX</li>
              <li><span class="icon">→</span> AR/VR Integration</li>
              <li><span class="icon">→</span> Performance Optimization</li>
              <li><span class="icon">→</span> Source Files & Documentation</li>
              <li><span class="icon">→</span> 3 Months Support</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon">⚡</span>
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
              <span data-price-monthly>$900</span>
              <span data-price-project style="display:none">$2500</span>
              <span class="pricing__card-price-suffix">/Month</span>
            </div>
            <ul class="pricing__card-features">
              <li><span class="icon">→</span> Multiplayer Game Systems</li>
              <li><span class="icon">→</span> Full XR Experience</li>
              <li><span class="icon">→</span> Custom Shader Development</li>
              <li><span class="icon">→</span> Backend Integration</li>
              <li><span class="icon">→</span> Dedicated Support Channel</li>
              <li><span class="icon">→</span> Complete Source & Docs</li>
              <li><span class="icon">→</span> 6 Months Support</li>
            </ul>
            <div class="pricing__card-guarantee">
              <span class="pricing__card-guarantee-icon">⚡</span>
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
        <div class="eyebrow reveal">DESIGN INSIGHTS</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">LATEST DEV & <span class="gray">DESIGN INSIGHTS</span></h2>

        <div class="insights__grid reveal-stagger">
          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="https://picsum.photos/seed/blog-unity/800/500" alt="Unity Performance" />
              <span class="insights__card-tag pill-tag pill-tag--accent">UNITY</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">OPTIMIZING DRAW CALLS IN UNITY FOR MOBILE VR PERFORMANCE</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Jan 2026</p>
            </div>
          </div>

          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="https://picsum.photos/seed/blog-xr/800/500" alt="Hand Tracking" />
              <span class="insights__card-tag pill-tag pill-tag--accent">XR</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">DESIGNING INTUITIVE HAND TRACKING INTERACTIONS FOR QUEST 3</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Dec 2025</p>
            </div>
          </div>

          <div class="insights__card" data-hover>
            <div class="insights__card-image">
              <img src="https://picsum.photos/seed/blog-mp/800/500" alt="Multiplayer" />
              <span class="insights__card-tag pill-tag pill-tag--accent">GAME DEV</span>
            </div>
            <div class="insights__card-content">
              <h3 class="insights__card-title">BUILDING A SCALABLE MULTIPLAYER ARCHITECTURE WITH PHOTON</h3>
              <p class="insights__card-meta">Written by Dharmik Gohil • Published Nov 2025</p>
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
