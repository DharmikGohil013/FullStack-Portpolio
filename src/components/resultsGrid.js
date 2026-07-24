export function renderResultsGrid() {
  return `
    <section class="results section">
      <div class="container">
        <div class="eyebrow reveal">WHY CHOOSE ME</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">FOCUSED ON BUILDING EXPERIENCES<br><span class="gray">THAT DELIVER RESULTS</span></h2>
        
        <div class="results__grid reveal-stagger">
          <div class="results__card">
            <div class="results__card-eyebrow">DEVELOPMENT EXPERIENCE</div>
            <div class="results__card-number" data-count="7" data-suffix="+">0+</div>
            <div class="results__card-label">Years</div>
            <p class="results__card-desc">Crafting games and XR experiences with Unity, from mobile titles to immersive VR worlds.</p>
          </div>
          
          <div class="results__card results__card--image">
            <img src="https://picsum.photos/seed/profile-color/600/400" alt="Profile" />
            <img src="https://picsum.photos/seed/avatar-main/150/150" alt="Dharmik" class="results__card-avatar" />
          </div>
          
          <div class="results__card">
            <div class="results__card-stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <span class="results__card-rating">4.9/5</span>
            </div>
            <p class="results__card-quote">"Dharmik delivered an exceptional AR experience for our product launch. His attention to detail and understanding of user interaction in XR is outstanding."</p>
            <div class="results__card-reviewer">
              <img src="https://picsum.photos/seed/reviewer1/100/100" alt="Reviewer" />
              <div>
                <div class="results__card-reviewer-name">Arjun Mehta</div>
                <div class="results__card-reviewer-title">Product Lead, TechNova</div>
              </div>
            </div>
          </div>
          
          <div class="results__card results__card--span2">
            <div class="results__card-number" data-count="98" data-suffix="%">0%</div>
            <div class="results__card-label">CLIENT SATISFACTION</div>
            <p class="results__card-desc">Consistently delivering projects that exceed expectations, on time and within scope. From game prototypes to production-ready XR applications.</p>
          </div>
          
          <div class="results__card">
            <div class="results__card-icon">⚡</div>
            <div class="results__card-label">FAST & RELIABLE</div>
            <p class="results__card-desc">Rapid prototyping to production pipeline. Optimized workflows ensuring quick turnaround without compromising quality.</p>
          </div>
        </div>
        
        <div class="results__bts reveal">
          <img src="https://picsum.photos/seed/workspace-bts/1400/450" alt="Behind the scenes workspace" />
        </div>
      </div>
    </section>
  `;
}
