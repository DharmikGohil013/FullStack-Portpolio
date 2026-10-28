// Centralized per-route SEO/GEO metadata — shared by the client router (main.js/router.js)
// and the build-time static prerender script (scripts/prerender.mjs).
const SITE_URL = 'https://www.dharmikgohil.me';
const SHARE_IMAGE = `${SITE_URL}/og-share-preview.jpg`;

export const faqs = [
  { q: 'Who is Dharmik Gohil and where is he based?', a: 'Dharmik Gohil is a full stack software engineer and system architect based in Surat, Gujarat, India. He builds web applications, ERPNext and Frappe customizations, and custom CRM platforms.' },
  { q: 'Can you customize ERPNext and build a custom CRM?', a: 'Yes. ERPNext and Frappe services include custom DocTypes, workflow automation, and HRMS and inventory integrations. Custom CRM development includes lead pipelines, deal tracking, and analytics dashboards.' },
  {
    q: 'What software engineering services do you offer?',
    a: 'Full stack web application development (React/Next.js & Node.js/TypeScript), distributed system architecture, REST/GraphQL API design, database modeling & query optimization (PostgreSQL, MongoDB, Redis), ERPNext & Frappe customization, and DevOps CI/CD automation.'
  },
  {
    q: 'What is your software development process from start to finish?',
    a: 'Four core phases: Architecture & Specification (system modeling, DB schemas, API specs), Full Stack Implementation (clean modular code, modern frameworks), Testing & Integration (unit testing, security audits), and Deployment & Optimization (CI/CD pipelines, cloud infrastructure, real-time monitoring).'
  },
  {
    q: 'Will I have full access to the codebase during development?',
    a: 'Yes. All projects use Git version control (GitHub/GitLab), with complete access to code repositories, staging deployments, and regular architecture updates at every milestone.'
  },
  {
    q: 'What deliverables will I receive upon project completion?',
    a: 'Clean, fully documented source code, production build artifacts, Docker container setups, environment configuration specs, API documentation (OpenAPI/Swagger), and full deployment rights.'
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Yes. Packages include post-launch support (1 to 6 months) covering system monitoring, bug fixes, performance tuning, and scaling adjustments.'
  },
  {
    q: 'Can you work with an existing legacy codebase or cloud setup?',
    a: 'Yes — auditing, refactoring, and modernizing existing codebases, including migrating monoliths to microservices, optimizing slow database queries, and upgrading frontend/backend stacks.'
  }
];

const services = [
  { name: 'Full Stack Web Development', description: 'End-to-end web application development using React, Next.js, TypeScript, Node.js, and modern CSS systems optimized for scale, performance, and SEO.' },
  { name: 'ERPNext & Frappe Customization', description: 'Tailor-made ERPNext modules, custom DocTypes, client/server scripts, automated workflow chains, HRMS & inventory integrations, and custom Frappe web applications.' },
  { name: 'Custom CRM & Sales Platforms', description: 'Scalable multi-tenant CRM suites, lead management pipelines, deal stage tracking, automated WhatsApp & email triggers, and custom analytics dashboards.' },
  { name: 'Cloud & System Architecture', description: 'Fault-tolerant microservices, serverless backends, and event-driven distributed cloud systems on AWS and Vercel.' },
  { name: 'REST & GraphQL API Engineering', description: 'High-throughput backend APIs, secure authentication gateways, rate limiters, and microservice integration layers with OpenAPI/Swagger documentation.' },
  { name: 'Database Design & Caching', description: 'Relational and NoSQL database modeling, high-performance query optimization, Redis caching layers, connection pooling, and automated schema migrations.' }
];

function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

function faqSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

function servicesSchema() {
  return {
    '@type': 'ItemList',
    name: 'Software Engineering Services offered by Dharmik Gohil',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@id': `${SITE_URL}/#person` }
      }
    }))
  };
}

export const routes = {
  '/': {
    title: "Dharmik Gohil | Full Stack Developer in Surat",
    description: "Dharmik Gohil is a full stack developer in Surat, India, building React and Node.js web apps, ERPNext customizations, and custom CRM platforms.",
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }]),
    extraSchema: []
  },
  '/about': {
    title: "About Dharmik Gohil | Software Engineer in Surat",
    description: "Meet Dharmik Gohil, a full stack software engineer in Surat, Gujarat. Explore his skills, projects, engineering background, and certifications.",
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
    extraSchema: []
  },
  '/services': {
    title: "ERPNext, CRM & Web Development Services | Dharmik Gohil",
    description: "Explore ERPNext and Frappe customization, custom CRM development, React and Next.js web apps, API engineering, and database optimization services.",
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
    extraSchema: [servicesSchema()]
  },
  '/blogs': {
    title: "Software Engineering Topics | Dharmik Gohil",
    description: "Explore engineering topics from Dharmik Gohil: ERPNext, Frappe, CRM architecture, microservices, PostgreSQL performance, and Next.js.",
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs' }]),
    extraSchema: []
  },
  '/contact': {
    title: "Contact Dharmik Gohil | Web & ERPNext Development",
    description: "Contact Dharmik Gohil in Surat, Gujarat, to discuss full stack web development, ERPNext and Frappe customization, custom CRM, or API projects.",
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
    extraSchema: [faqSchema()]
  },
  '/404': {
    title: '404 Page Not Found | Dharmik Gohil',
    description: 'The requested page could not be found.',
    noindex: true,
    breadcrumb: null,
    extraSchema: []
  }
};

export function buildPageSchema(path) {
  const meta = routes[path];
  if (!meta) return null;
  if (meta.noindex) return null;
  const url = SITE_URL + path;
  const graph = [
  {
    "@type": "Person",
    "@id": "https://www.dharmikgohil.me/#person",
    "name": "Dharmik Gohil",
    "givenName": "Dharmik",
    "familyName": "Gohil",
    "alternateName": "dharmikgohil",
    "description": "Full Stack Software Engineer & System Architect specializing in ERPNext & Frappe customization, CRM platform engineering, modern web applications, microservices, cloud infrastructure, and distributed systems.",
    "url": "https://www.dharmikgohil.me",
    "image": "https://www.dharmikgohil.me/og-share-preview.jpg",
    "jobTitle": "Full Stack Software Engineer & System Architect",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "ERPNext Enterprise ERP",
      "Frappe Framework & Custom DocTypes",
      "Custom CRM Platform Development",
      "Full Stack Web Development",
      "React.js & Next.js 15",
      "Node.js & Express.js",
      "TypeScript & Python",
      "Microservices Architecture",
      "Cloud Infrastructure (AWS, Docker, K8s)",
      "PostgreSQL, MariaDB & MongoDB",
      "Redis Caching & Async Queues",
      "REST & GraphQL APIs",
      "Data Structures & Algorithms"
    ],
    "sameAs": [
      "https://github.com/DharmikGohil013",
      "https://www.linkedin.com/in/dharmikgohil086/",
      "https://twitter.com/dharmikgohil"
    ]
  },
  {
    "@type": "WebSite",
    "@id": "https://www.dharmikgohil.me/#website",
    "url": "https://www.dharmikgohil.me",
    "name": "Dharmik Gohil — Full Stack Software Engineer & System Architect",
    "publisher": {
      "@id": "https://www.dharmikgohil.me/#person"
    }
  }
];
  graph.push({
    '@type': path === '/about' ? 'ProfilePage' : path === '/contact' ? 'ContactPage' : path === '/blogs' ? 'CollectionPage' : 'WebPage',
    '@id': url + '#webpage', url, name: meta.title, description: meta.description,
    inLanguage: 'en', isPartOf: { '@id': SITE_URL + '/#website' },
    about: { '@id': SITE_URL + '/#person' },
    ...(path === '/about' ? { mainEntity: { '@id': SITE_URL + '/#person' } } : {})
  });
  if (meta.breadcrumb) graph.push(meta.breadcrumb);
  if (meta.extraSchema && meta.extraSchema.length) graph.push(...meta.extraSchema);
  if (!graph.length) return null;
  return { '@context': 'https://schema.org', '@graph': graph };
}

export { SITE_URL, SHARE_IMAGE };
