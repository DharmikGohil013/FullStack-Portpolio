export function renderFAQ() {
  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'I specialize in Unity game development (2D & 3D), XR/AR/VR application development, multiplayer game systems, technical art, and interactive experience design. I also offer consulting for game studios looking to integrate XR features or optimize their Unity pipelines.',
      open: true
    },
    {
      q: 'What is your typical development process from start to finish?',
      a: 'My process follows four key phases: Discovery & Prototyping (understanding requirements, creating rapid prototypes), Core Development (building game mechanics, systems architecture, XR interactions), Playtesting & Iteration (user testing, feedback integration, polish), and Deployment & Optimization (performance profiling, platform-specific builds, launch support).',
      open: true
    },
    {
      q: 'Will I be involved in the process along the way?',
      a: 'Absolutely. I believe in collaborative development. You will receive regular builds, progress updates, and opportunities to playtest at every milestone. Your feedback drives the direction of the project.'
    },
    {
      q: 'What files will I receive when the project is complete?',
      a: 'You will receive the complete Unity project source files, build files for target platforms (Android APK, iOS, Windows, WebGL as agreed), documentation for the codebase, and any 3D assets or shaders created during development.'
    },
    {
      q: 'Do you offer revisions after delivery?',
      a: 'Yes. Every project includes a post-launch support window (typically 1–3 months depending on the package) that covers bug fixes, minor feature adjustments, and performance optimizations.'
    },
    {
      q: 'Can you work with an existing codebase or game project?',
      a: 'Definitely. I regularly work with existing Unity projects — whether it is adding new features, optimizing performance, integrating XR capabilities, or refactoring legacy code. I will start with a thorough code review and project audit.'
    }
  ];
  
  const faqItems = faqs.map((faq, i) => `
    <div class="faq__item${faq.open ? ' active' : ''}">
      <div class="faq__question" data-accordion-header>
        <span class="faq__question-text">${faq.q}</span>
        <span class="faq__question-icon">+</span>
      </div>
      <div class="faq__answer">
        <p class="faq__answer-text">${faq.a}</p>
      </div>
    </div>
  `).join('');
  
  return `
    <section class="faq section">
      <div class="container">
        <div class="faq__content">
          <div class="reveal">
            <div class="eyebrow">FAQ</div>
            <h2 class="heading-two-tone" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-top: 1rem;">FREQUENT<br><span class="gray">QUESTIONS</span></h2>
          </div>
          <div class="faq__list reveal">
            ${faqItems}
          </div>
        </div>
      </div>
    </section>
  `;
}
