export function renderResultsGrid() {
  return `
    <section class="results section">
      <div class="container">
        <div class="eyebrow reveal">WHY CHOOSE ME</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">FOCUSED ON BUILDING SYSTEMS<br><span class="gray">THAT DELIVER RESULTS</span></h2>
        
        <div class="results__grid reveal-stagger">
          <div class="results__card">
            <div class="results__card-eyebrow">DEVELOPMENT EXPERIENCE</div>
            <div class="results__card-number" data-count="6" data-suffix="+">0+</div>
            <div class="results__card-label">Years</div>
            <p class="results__card-desc">Architecting full stack web applications, cloud microservices, and high-performance databases.</p>
          </div>
          
          <div class="results__card results__card--image">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="System Code Architecture" />
          </div>
          
          <div class="results__card">
            <div class="results__card-stars">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="results__card-rating">4.9/5</span>
            </div>
            <p class="results__card-quote">"Dharmik architected an exceptional distributed API system for our platform launch. His attention to code quality, system performance, and database indexing is world-class."</p>
            <div class="results__card-reviewer">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Reviewer" />
              <div>
                <div class="results__card-reviewer-name">Arjun Mehta</div>
                <div class="results__card-reviewer-title">VP of Engineering, TechNova</div>
              </div>
            </div>
          </div>
          
          <div class="results__card results__card--span2">
            <div class="results__card-number" data-count="99" data-suffix="%">0%</div>
            <div class="results__card-label">SYSTEM UPTIME & SATISFACTION</div>
            <p class="results__card-desc">Consistently delivering resilient software architectures that scale effortlessly under high load. From full stack web apps to production microservices.</p>
          </div>
          
          <div class="results__card">
            <div class="results__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="results__card-label">FAST & SECURE</div>
            <p class="results__card-desc">Optimized API response times, secure authentication protocols, and automated CI/CD pipelines for rapid deployment.</p>
          </div>
        </div>
        
        <div class="results__bts reveal">
          <img src="https://dharmikgohil.art/assets/img/blog/hackron/hackathon-7.jpg" alt="Dharmik Gohil coding at 24-hour Hackathon" />
        </div>
      </div>
    </section>
  `;
}
