// Main entry point — Bootstrap the portfolio application
import './styles/index.css';
import './styles/cursor.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/services.css';
import './styles/projects.css';
import './styles/process.css';
import './styles/results.css';
import './styles/pricing.css';
import './styles/insights.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/components.css';
import './styles/about-page.css';
import './styles/services-page.css';
import './styles/blogs-page.css';
import './styles/contact-page.css';

import { registerRoute, initRouter } from './router.js';
import { initCursor } from './cursor.js';
import { initScrollReveal, refreshScrollTrigger } from './animations.js';
import { renderNavbar, updateNavbarForPage } from './components/navbar.js';

// Import pages
import { renderHome, initHome } from './pages/home.js';
import { renderAbout, initAbout } from './pages/about.js';
import { renderServices, initServices } from './pages/services.js';
import { renderBlogs, initBlogs } from './pages/blogs.js';
import { renderContact, initContact } from './pages/contact.js';
import { renderNotFound, initNotFound } from './pages/notFound.js';

// Page wrapper that handles scroll reveal + navbar for each page
function createPageHandler(renderFn, initFn, pageName) {
  return {
    render: renderFn,
    init: () => {
      // Update navbar style for this page
      updateNavbarForPage(pageName);
      
      // Initialize page-specific interactions
      if (initFn) initFn();
      
      // Initialize scroll reveal for all .reveal elements
      setTimeout(() => {
        initScrollReveal();
        refreshScrollTrigger();
      }, 100);
    }
  };
}

// Register all routes
registerRoute('/', createPageHandler(renderHome, initHome, 'home'));
registerRoute('/about', createPageHandler(renderAbout, initAbout, 'about'));
registerRoute('/services', createPageHandler(renderServices, initServices, 'services'));
registerRoute('/blogs', createPageHandler(renderBlogs, initBlogs, 'blogs'));
registerRoute('/contact', createPageHandler(renderContact, initContact, 'contact'));
registerRoute('/404', createPageHandler(renderNotFound, initNotFound, '404'));

// Initialize the application
function init() {
  // Render navbar (persists across pages)
  renderNavbar();
  
  // Initialize custom cursor
  initCursor();
  
  // Start the router (renders initial page)
  initRouter();
}

// Boot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
