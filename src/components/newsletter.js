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
              <span>📞 <a href="tel:+919876543210" data-hover>+91 98765 43210</a></span>
              <span>✉ <a href="mailto:hello@dharmikgohil.fun" data-hover>hello@dharmikgohil.fun</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
