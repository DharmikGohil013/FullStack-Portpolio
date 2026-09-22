// Build-time static prerender: generates real, crawlable HTML for every route
// (dist/about/index.html, dist/services/index.html, ...) so search engines and
// AI/GEO crawlers that do not execute JavaScript still see full page content,
// not an empty <main id="app"></main>.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

// --- Minimal browser shims so importing gsap/ScrollTrigger and the page
// modules (which assume a browser) doesn't throw during a plain Node import. ---
const shimDom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = shimDom.window;
global.document = shimDom.window.document;
Object.defineProperty(global, 'navigator', { value: shimDom.window.navigator, configurable: true });
global.HTMLElement = shimDom.window.HTMLElement;
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.IntersectionObserver = class { observe() {} disconnect() {} unobserve() {} };
const matchMediaStub = () => ({
  matches: false,
  media: '',
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() { return false; }
});
global.window.matchMedia = matchMediaStub;
global.matchMedia = matchMediaStub;

const { renderHome } = await import('../src/pages/home.js');
const { renderAbout } = await import('../src/pages/about.js');
const { renderServices } = await import('../src/pages/services.js');
const { renderBlogs } = await import('../src/pages/blogs.js');
const { renderContact } = await import('../src/pages/contact.js');
const { renderNotFound } = await import('../src/pages/notFound.js');
const { getNavbarHTML, getMenuOverlayHTML } = await import('../src/components/navbar.js');
const { routes: seoRoutes, buildPageSchema, SITE_URL } = await import('../src/seo.js');

const pages = {
  '/': renderHome,
  '/about': renderAbout,
  '/services': renderServices,
  '/blogs': renderBlogs,
  '/contact': renderContact,
  '/404': renderNotFound
};

function setAttr(doc, selector, attr, value) {
  const el = doc.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

async function main() {
  const shellHtml = await readFile(path.join(distDir, 'index.html'), 'utf-8');

  for (const [routePath, renderFn] of Object.entries(pages)) {
    const dom = new JSDOM(shellHtml);
    const doc = dom.window.document;
    const seoMeta = seoRoutes[routePath];
    const canonicalPath = routePath === '/' ? '' : routePath;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    doc.title = seoMeta.title;
    setAttr(doc, 'meta[name="description"]', 'content', seoMeta.description);
    setAttr(doc, 'link[rel="canonical"]', 'href', canonicalUrl);
    setAttr(doc, 'meta[property="og:url"]', 'content', canonicalUrl);
    setAttr(doc, 'meta[property="og:title"]', 'content', seoMeta.title);
    setAttr(doc, 'meta[property="og:description"]', 'content', seoMeta.description);
    setAttr(doc, 'meta[name="twitter:url"]', 'content', canonicalUrl);
    setAttr(doc, 'meta[name="twitter:title"]', 'content', seoMeta.title);
    setAttr(doc, 'meta[name="twitter:description"]', 'content', seoMeta.description);
    setAttr(
      doc,
      'meta[name="robots"]',
      'content',
      seoMeta.noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    const schema = buildPageSchema(routePath);
    if (schema) {
      const script = doc.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      script.textContent = JSON.stringify(schema);
      doc.head.appendChild(script);
    }

    const navbar = doc.getElementById('navbar');
    if (navbar) navbar.innerHTML = getNavbarHTML();
    const overlay = doc.getElementById('menuOverlay');
    if (overlay) overlay.innerHTML = getMenuOverlayHTML();
    const app = doc.getElementById('app');
    if (app) app.innerHTML = renderFn();

    const html = '<!doctype html>\n' + doc.documentElement.outerHTML;

    let outPath;
    if (routePath === '/') {
      outPath = path.join(distDir, 'index.html');
    } else if (routePath === '/404') {
      outPath = path.join(distDir, '404.html');
    } else {
      outPath = path.join(distDir, routePath.slice(1), 'index.html');
    }

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`Prerendered ${routePath} -> ${path.relative(root, outPath)}`);
  }
}

main()
  .then(() => process.exit(0)) // gsap's internal rAF ticker keeps a timer alive; force a clean exit
  .catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
  });
