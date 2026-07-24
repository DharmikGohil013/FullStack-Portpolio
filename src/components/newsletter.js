export function renderNewsletter() {
  return `
    <section class="newsletter section">
      <div class="container">
        <div class="newsletter__content">
          <div class="reveal">
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1.5rem;">Newsletter</h3>
            <div class="newsletter__form">
              <input type="email" class="newsletter__input" placeholder="Enter your email" />
              <button class="btn btn--dark" data-hover>SUBSCRIBE</button>
            </div>
          </div>
          <div class="reveal">
            <p class="newsletter__text">Focused on crafting immersive games and XR experiences that blend creativity, performance, and cutting-edge technology to help studios and brands push the boundaries of interactive entertainment.</p>
            <div class="newsletter__contact-row">
              <span style="display: inline-flex; align-items: center; gap: 6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+919876543210" data-hover>+91 98765 43210</a></span>
              <span style="display: inline-flex; align-items: center; gap: 6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> <a href="mailto:dharmikgohil.work@gmail.com" data-hover>dharmikgohil.work@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
