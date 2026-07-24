import { renderFooter } from '../components/footer.js';

export function renderServices() {
  return `
    <section class="services-hero">
      <div class="container">
        <span class="services-hero__scroll">©2026 Scroll to Explore</span>
        <h1 class="services-hero__heading reveal">SERVICES</h1>
      </div>
    </section>

    <section class="services-detail section">
      <div class="container">
        <div class="services-detail__list">
          
          <!-- Service 1 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">001 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>GAME</span> DEVELOPMENT</h3>
              <p class="services-detail__item-desc">
                End-to-end game development services bringing your creative vision to life. From initial prototyping to final polishing and deployment across multiple platforms, ensuring high performance, engaging gameplay mechanics, and captivating aesthetics.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Unity Engine</span>
                <span class="pill-tag">C# Scripting</span>
                <span class="pill-tag">Mobile Builds</span>
                <span class="pill-tag">Cross-Platform</span>
                <span class="pill-tag">Performance Optimization</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-game/600/400" alt="Game Development">
          </div>

          <!-- Service 2 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">002 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>XR</span> DEVELOPMENT</h3>
              <p class="services-detail__item-desc">
                Building immersive augmented and virtual reality experiences that transform how users interact with digital content. From enterprise training simulations to consumer entertainment, leveraging the latest XR hardware and software.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">AR Foundation</span>
                <span class="pill-tag">Meta XR SDK</span>
                <span class="pill-tag">OpenXR</span>
                <span class="pill-tag">XR Interaction Toolkit</span>
                <span class="pill-tag">Spatial Computing</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-xr/600/400" alt="XR Development">
          </div>

          <!-- Service 3 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">003 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>UNITY</span> 3D DESIGN</h3>
              <p class="services-detail__item-desc">
                Custom Unity solutions for interactive 3D applications, architectural visualizations, product configurators, and simulation systems. Combining technical precision with visual excellence.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Shader Graph</span>
                <span class="pill-tag">HLSL</span>
                <span class="pill-tag">3D Physics</span>
                <span class="pill-tag">Custom Editor Tools</span>
                <span class="pill-tag">Scriptable Objects</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-unity/600/400" alt="Unity 3D Design">
          </div>

          <!-- Service 4 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">004 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>MULTIPLAYER</span> SYSTEMS</h3>
              <p class="services-detail__item-desc">
                Architecting robust real-time multiplayer systems for competitive esports titles, cooperative adventures, and social gaming platforms. Scalable backend infrastructure with seamless networking.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Photon PUN</span>
                <span class="pill-tag">Mirror</span>
                <span class="pill-tag">Netcode for GameObjects</span>
                <span class="pill-tag">Relay Servers</span>
                <span class="pill-tag">Matchmaking</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-multi/600/400" alt="Multiplayer Systems">
          </div>

          <!-- Service 5 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">005 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>AR/VR</span> EXPERIENCES</h3>
              <p class="services-detail__item-desc">
                Crafting cutting-edge immersive experiences that blend the physical and digital worlds. Hand tracking, spatial anchors, passthrough mixed reality, and room-scale VR applications.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Hand Tracking</span>
                <span class="pill-tag">Spatial Anchors</span>
                <span class="pill-tag">Passthrough MR</span>
                <span class="pill-tag">Room-Scale VR</span>
                <span class="pill-tag">WebXR</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-arvr/600/400" alt="AR/VR Experiences">
          </div>

          <!-- Service 6 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">006 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>TECHNICAL</span> ART</h3>
              <p class="services-detail__item-desc">
                Bridging the gap between art and engineering with custom shaders, VFX systems, procedural generation, and post-processing pipelines that elevate visual fidelity and performance.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Shader Development</span>
                <span class="pill-tag">VFX Graph</span>
                <span class="pill-tag">Particle Systems</span>
                <span class="pill-tag">Procedural Generation</span>
                <span class="pill-tag">Post-Processing</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://picsum.photos/seed/svc-art/600/400" alt="Technical Art">
          </div>

        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

export function initServices() {}
