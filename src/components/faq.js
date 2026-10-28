import { faqs } from '../seo.js';

export function renderFAQ() {
const faqItems = faqs.map((faq, i) => `
    <div class="faq__item${i < 2 ? ' active' : ''}">
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
