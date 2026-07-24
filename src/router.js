// SPA Hash Router
const routes = {};
let currentPage = null;

export function registerRoute(path, { render, init }) {
  routes[path] = { render, init };
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

async function handleRoute() {
  const hash = window.location.hash || '#/';
  const path = hash.replace('#', '') || '/';
  
  const route = routes[path] || routes['/404'];
  if (!route) return;
  
  const app = document.getElementById('app');
  
  // Fade out
  app.style.opacity = '0';
  app.style.transition = 'opacity 0.3s ease';
  
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Render new content
  app.innerHTML = route.render();
  currentPage = path;
  
  // Fade in
  requestAnimationFrame(() => {
    app.style.opacity = '1';
    
    // Initialize page interactions after DOM is ready
    requestAnimationFrame(() => {
      if (route.init) route.init();
      
      // Dispatch event for cursor re-init
      document.dispatchEvent(new CustomEvent('pageTransitioned'));
    });
  });
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function getCurrentPage() {
  return currentPage;
}
