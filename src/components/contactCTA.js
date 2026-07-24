export function renderContactCTA() {
  return `
    <section class="contact-cta">
      <div class="contact-cta__form-side">
        <div class="contact-cta__form-card reveal">
          <div class="contact-cta__form-header">
            <span class="contact-cta__form-header-name">Dharmik Gohil<sup>®</sup></span>
          </div>
          <form onsubmit="event.preventDefault()">
            <div class="contact-cta__field">
              <label>Name</label>
              <input type="text" placeholder="Jane Smith" />
            </div>
            <div class="contact-cta__field">
              <label>Email</label>
              <input type="email" placeholder="jane@email.com" />
            </div>
            <div class="contact-cta__field">
              <label>Message</label>
              <textarea rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="contact-cta__submit" data-hover>SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <div class="contact-cta__visual-side">
        <div class="contact-cta__visual-content reveal">
          <div class="eyebrow contact-cta__visual-eyebrow">LET'S CONNECT</div>
          <h2 class="contact-cta__visual-heading">LET'S<br>CREATE<br>TOGETHER</h2>
          <span class="contact-cta__visual-sparkle">✳</span>
          <div class="contact-cta__visual-label">RESULTS-DRIVEN SOLUTIONS</div>
          <p class="contact-cta__visual-desc">Bringing your game and XR visions to life with precision engineering, creative design, and a deep focus on user experience.</p>
        </div>
      </div>
    </section>
  `;
}
