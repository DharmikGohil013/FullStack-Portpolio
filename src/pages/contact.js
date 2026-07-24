import { renderAchievements } from '../components/achievements.js';
import { renderFAQ } from '../components/faq.js';
import { renderNewsletter } from '../components/newsletter.js';
import { renderFooter } from '../components/footer.js';
import { initAccordion } from '../animations.js';
import { initCounters } from '../counter.js';

export function renderContact() {
  return `
    <section class="contact-hero">
      <div class="container">
        <span class="contact-hero__scroll">©2026 Scroll to Explore</span>
        <h1 class="contact-hero__heading reveal">CONTACT ME</h1>
      </div>
    </section>

    <section class="contact-info section">
      <div class="container">
        <div class="contact-info__header reveal">
          <div class="eyebrow">READY TO START?</div>
          <h2 class="heading-two-tone" style="color: var(--black);">GET IN TOUCH</h2>
          <a href="#" class="btn btn--accent" data-hover>BOOK A CALL <span class="btn__arrow">→</span></a>
        </div>
        <div class="contact-info__grid reveal-stagger">
          <div class="contact-info__card">
            <span class="contact-info__label">ADDRESS</span>
            <div class="contact-info__value">Surat, Gujarat, India</div>
          </div>
          <div class="contact-info__card">
            <span class="contact-info__label">OPEN HOURS</span>
            <div class="contact-info__value">Daily: 10 AM – 6 PM</div>
          </div>
          <div class="contact-info__card">
            <span class="contact-info__label">PHONE</span>
            <div class="contact-info__value">+91 98765 43210</div>
          </div>
          <div class="contact-info__card">
            <span class="contact-info__label">EMAIL</span>
            <div class="contact-info__value"><a href="mailto:dharmikgohil.work@gmail.com" style="color: inherit; text-decoration: none;">dharmikgohil.work@gmail.com</a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section section section--dark">
      <div class="container">
        <form onsubmit="event.preventDefault()">
          <div class="contact-form-section__grid">
            <div class="contact-form-section__field">
              <input type="text" class="input" placeholder="First Name *" required>
            </div>
            <div class="contact-form-section__field">
              <input type="text" class="input" placeholder="Last Name *" required>
            </div>
            <div class="contact-form-section__field contact-form-section__field--full">
              <input type="email" class="input" placeholder="Email Address *" required>
            </div>
            <div class="contact-form-section__field contact-form-section__field--full">
              <textarea class="input" placeholder="Your Message" rows="5"></textarea>
            </div>
            <div class="contact-form-section__field contact-form-section__field--full">
              <button type="submit" class="btn btn--accent" style="width: 100%;">SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    ${renderAchievements()}
    ${renderFAQ()}
    ${renderNewsletter()}
    ${renderFooter()}
  `;
}

export function initContact() {
  initAccordion('.faq__item');
  initCounters();
}
