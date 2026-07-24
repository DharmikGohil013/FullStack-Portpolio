export function renderAchievements() {
  return `
    <section class="achievements section section--dark">
      <div class="container">
        <div class="eyebrow reveal" style="color: rgba(255,255,255,0.5);">HONORS & AWARDS</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem; color: white;">DHARMIK GOHIL<sup style="font-size:0.3em">®</sup> <span class="gray">ACHIEVEMENTS</span></h2>
        
        <div class="achievements__grid reveal-stagger">
          <div class="achievements__card">
            <div class="achievements__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
            </div>
            <h3 class="achievements__card-title">BEST CLOUD ARCHITECTURE EXCELLENCE AWARD WINNER</h3>
            <div class="achievements__card-meta">
              <span>Cloud Engineering</span>
              <span>2025</span>
            </div>
          </div>
          <div class="achievements__card">
            <div class="achievements__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="achievements__card-title">TOP FULL STACK DEVELOPER CONTRIBUTOR AWARD</h3>
            <div class="achievements__card-meta">
              <span>Software Engineering</span>
              <span>2024</span>
            </div>
          </div>
          <div class="achievements__card">
            <div class="achievements__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <h3 class="achievements__card-title">EXCELLENCE IN DISTRIBUTED SYSTEM DESIGN ACHIEVEMENT</h3>
            <div class="achievements__card-meta">
              <span>System Design</span>
              <span>2024</span>
            </div>
          </div>
          <div class="achievements__card">
            <div class="achievements__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 class="achievements__card-title">ENTERPRISE SAAS SOLUTION OF THE YEAR AWARD</h3>
            <div class="achievements__card-meta">
              <span>Web Systems</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
