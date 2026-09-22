// SPA Router — real paths (History API) for crawlable, shareable URLs
import { routes as seoRoutes, buildPageSchema, SITE_URL, SHARE_IMAGE } from './seo.js';

const routes = {};
let currentPage = null;

export function registerRoute(path, { render, init, meta }) {
  routes[path] = { render, init, meta };
}

export function initRouter() {
  window.addEventListener('popstate', handleRoute);

  // Intercept clicks on internal links so navigation stays client-side (SPA)
  // while every link still works as a real, crawlable URL on its own.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    let url;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;

    e.preventDefault();
    if (url.pathname !== window.location.pathname) {
      navigate(url.pathname);
    }
  });

  handleRoute();
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return pathname || '/';
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function updateHead(path) {
  const seoMeta = seoRoutes[path] || seoRoutes['/404'];
  if (!seoMeta) return;

  const canonicalPath = path === '/' ? '' : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  document.title = seoMeta.title;
  setAttr('meta[name="description"]', 'content', seoMeta.description);
  setAttr('link[rel="canonical"]', 'href', canonicalUrl);
  setAttr('meta[property="og:url"]', 'content', canonicalUrl);
  setAttr('meta[property="og:title"]', 'content', seoMeta.title);
  setAttr('meta[property="og:description"]', 'content', seoMeta.description);
  setAttr('meta[name="twitter:url"]', 'content', canonicalUrl);
  setAttr('meta[name="twitter:title"]', 'content', seoMeta.title);
  setAttr('meta[name="twitter:description"]', 'content', seoMeta.description);

  const robotsContent = seoMeta.noindex
    ? 'noindex, follow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  setAttr('meta[name="robots"]', 'content', robotsContent);

  // Per-page structured data (FAQPage / Service / BreadcrumbList) — additive to the
  // global Person/WebSite graph that lives statically in index.html.
  let schemaScript = document.getElementById('page-schema');
  const schema = buildPageSchema(path);
  if (schema) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'page-schema';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  } else if (schemaScript) {
    schemaScript.remove();
  }
}

function handleRoute() {
  const path = normalizePath(window.location.pathname);
  const route = routes[path] || routes['/404'];
  if (!route) return;

  updateHead(routes[path] ? path : '/404');

  // Track pageview in Google Analytics for SPA route changes
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-DH28J1NVWV', {
      page_path: path,
      page_title: document.title
    });
  }

  const app = document.getElementById('app');
  const isFirstRender = currentPage === null;

  const render = () => {
    window.scrollTo(0, 0);
    app.innerHTML = route.render();
    currentPage = path;

    requestAnimationFrame(() => {
      app.style.opacity = '1';
      requestAnimationFrame(() => {
        if (route.init) route.init();
        document.dispatchEvent(new CustomEvent('pageTransitioned'));
      });
    });
  };

  // Skip the fade-out + re-render on the very first load: the server/prerendered
  // HTML already contains this page's markup, so we just hydrate interactions.
  if (isFirstRender) {
    currentPage = path;
    requestAnimationFrame(() => {
      if (route.init) route.init();
      document.dispatchEvent(new CustomEvent('pageTransitioned'));
    });
    return;
  }

  app.style.opacity = '0';
  app.style.transition = 'opacity 0.3s ease';
  setTimeout(render, 300);
}

export function navigate(path) {
  window.history.pushState(null, '', path);
  handleRoute();
}

export function getCurrentPage() {
  return currentPage;
}
