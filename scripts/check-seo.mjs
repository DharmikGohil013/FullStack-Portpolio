import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { routes, SITE_URL } from '../src/seo.js';
const sitemap = new JSDOM(await readFile('dist/sitemap.xml', 'utf8'), { contentType: 'text/xml' });
const locations = [...sitemap.window.document.querySelectorAll('loc')].map(el => el.textContent);
const titles = new Set();
for (const [route, meta] of Object.entries(routes)) {
  const file = route === '/' ? 'index.html' : route === '/404' ? '404.html' : `${route.slice(1)}/index.html`;
  const doc = new JSDOM(await readFile(`dist/${file}`, 'utf8')).window.document;
  assert.equal(doc.querySelectorAll('h1').length, 1, route);
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, SITE_URL + route);
  assert.equal(doc.title, meta.title);
  assert(!titles.has(doc.title)); titles.add(doc.title);
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    assert.equal(doc.querySelector(selector).content, meta.description);
  }
  assert.equal(doc.querySelector('#app').dataset.route, route);
  assert(doc.querySelector('#app').textContent.trim().length > 100);
  assert.equal(locations.includes(SITE_URL + route), !meta.noindex);
  assert.equal(doc.querySelector('meta[name="robots"]').content.includes('noindex'), !!meta.noindex);
  const graphs = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(el => JSON.parse(el.textContent)['@graph']);
  if (meta.noindex) assert.equal(graphs.length, 0);
  else assert(graphs.some(item => item['@id'] === SITE_URL + route + '#webpage'));
  for (const faq of graphs.filter(item => item['@type'] === 'FAQPage')) {
    assert.equal(route, '/contact');
    for (const question of faq.mainEntity) {
      assert(doc.querySelector('#app').textContent.includes(question.name));
      assert(doc.querySelector('#app').textContent.includes(question.acceptedAnswer.text));
    }
  }
  console.log(`Validated ${route}: content, metadata, canonical, schema, sitemap`);
}
// Exercise actual client routing from an empty development shell.
const dom = new JSDOM(await readFile('index.html', 'utf8'), { url: SITE_URL + '/' });
global.window = dom.window; global.document = dom.window.document;
global.CustomEvent = dom.window.CustomEvent;
global.requestAnimationFrame = cb => cb(); window.scrollTo = () => {};
const { registerRoute, initRouter, navigate } = await import('../src/router.js');
for (const route of Object.keys(routes)) registerRoute(route, { render: () => '<h1>Route content</h1>' });
initRouter();
await new Promise(resolve => setTimeout(resolve, 350));
assert.equal(document.querySelector('#app h1').textContent, 'Route content');
for (const route of ['/contact', '/missing', '/services', '/']) {
  navigate(route);
  await new Promise(resolve => setTimeout(resolve, 350));
  assert.equal(document.title, (routes[route] || routes['/404']).title);
  assert.equal(document.querySelector('meta[name="robots"]').content.includes('noindex'), route === '/missing');
  assert.equal(document.querySelectorAll('#page-schema').length, route === '/missing' ? 0 : 1);
}
console.log('Validated client initial rendering, navigation, 404, and metadata recovery');
