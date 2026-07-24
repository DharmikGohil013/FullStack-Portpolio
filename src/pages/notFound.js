import { renderFooter } from '../components/footer.js';

export function renderNotFound() {
  return `
    <section class="section section--dark" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center;">
      <div class="container">
        <div style="font-family: var(--font-display); font-size: clamp(6rem, 15vw, 12rem); font-weight: 700; opacity: 0.1; line-height: 1;">404</div>
        <h1 style="font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; text-transform: uppercase; margin-top: -2rem; margin-bottom: 1rem;">Page Not Found</h1>
        <p style="color: var(--gray); margin-bottom: 2rem; max-width: 400px; margin-left: auto; margin-right: auto;">The page you're looking for doesn't exist or has been moved.</p>
        <a href="#/" class="btn btn--accent" data-hover>GO HOME <span class="btn__arrow">→</span></a>
      </div>
    </section>
    ${renderFooter()}
  `;
}

export function initNotFound() {}
