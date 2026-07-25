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

// Page wrapper that handles scroll reveal + navbar + meta SEO for each page
function createPageHandler(renderFn, initFn, pageName, meta) {
  return {
    render: renderFn,
    meta: meta,
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

// Register all routes with dedicated SEO metadata
registerRoute('/', createPageHandler(renderHome, initHome, 'home', {
  title: 'Dharmik Gohil — Full Stack Software Engineer & System Architect',
  description: 'Dharmik Gohil — Full Stack Software Engineer & System Architect specializing in scalable web applications, microservices, React, Next.js, Node.js, and cloud platforms.'
}));

registerRoute('/about', createPageHandler(renderAbout, initAbout, 'about', {
  title: 'About Dharmik Gohil | Full Stack Software Engineer & System Architect',
  description: 'Dharmik Gohil portfolio — IIT Bombay Techfest winner, Code Raider Clash 1st Rank Champion, NPTEL Data Structures & Algorithms Certified Engineer from CHARUSAT University.'
}));

registerRoute('/services', createPageHandler(renderServices, initServices, 'services', {
  title: 'Software Engineering & System Architecture Services | Dharmik Gohil',
  description: 'Explore Full Stack Web Engineering, Microservices Architecture, REST & GraphQL APIs, Database Tuning, DevOps CI/CD, and Technical Consulting services.'
}));

registerRoute('/blogs', createPageHandler(renderBlogs, initBlogs, 'blogs', {
  title: 'Engineering Articles & System Insights | Dharmik Gohil',
  description: 'Technical insights on microservices with Go & Docker, PostgreSQL query optimization, Next.js 15 server components, Redis & Kafka, and CI/CD pipelines.'
}));

registerRoute('/contact', createPageHandler(renderContact, initContact, 'contact', {
  title: 'Contact Dharmik Gohil | Full Stack Software Engineer & System Architect',
  description: 'Get in touch with Dharmik Gohil for software engineering projects, system architecture consulting, full stack web development, and cloud platform services.'
}));

registerRoute('/404', createPageHandler(renderNotFound, initNotFound, '404', {
  title: '404 Page Not Found | Dharmik Gohil',
  description: 'The requested page could not be found.'
}));

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
