// Centralized per-route SEO/GEO metadata — shared by the client router (main.js/router.js)
// and the build-time static prerender script (scripts/prerender.mjs).
const SITE_URL = 'https://www.dharmikgohil.me';
const SHARE_IMAGE = `${SITE_URL}/og-share-preview.jpg`;

const faqs = [
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
    title: 'Dharmik Gohil — Full Stack Software Engineer & System Architect',
    description: 'Dharmik Gohil — Full Stack Software Engineer & System Architect specializing in scalable web applications, ERPNext customization, CRM platforms, microservices, React, Next.js, Node.js, and cloud infrastructure.',
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }]),
    extraSchema: []
  },
  '/about': {
    title: 'About Dharmik Gohil | Full Stack Software Engineer & System Architect',
    description: 'Dharmik Gohil — IIT Bombay Techfest winner, Code Raider Clash 1st Rank Champion, NPTEL Data Structures & Algorithms Certified Engineer from CHARUSAT University.',
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
    extraSchema: [faqSchema()]
  },
  '/services': {
    title: 'Software Engineering & System Architecture Services | Dharmik Gohil',
    description: 'Full Stack Web Engineering, ERPNext & Frappe customization, Custom CRM platforms, Microservices Architecture, REST & GraphQL APIs, Database Design & Caching services.',
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
    extraSchema: [servicesSchema()]
  },
  '/blogs': {
    title: 'Engineering Articles & System Insights | Dharmik Gohil',
    description: 'Technical insights on ERPNext & Frappe, CRM architecture, microservices with Go & Docker, PostgreSQL query optimization, Next.js 15 server components, and Redis & Kafka.',
    breadcrumb: breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs' }]),
    extraSchema: []
  },
  '/contact': {
    title: 'Contact Dharmik Gohil | Full Stack Software Engineer & System Architect',
    description: 'Get in touch with Dharmik Gohil for software engineering projects, system architecture consulting, full stack web development, and cloud platform services.',
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
  const graph = [];
  if (meta.breadcrumb) graph.push(meta.breadcrumb);
  if (meta.extraSchema && meta.extraSchema.length) graph.push(...meta.extraSchema);
  if (!graph.length) return null;
  return { '@context': 'https://schema.org', '@graph': graph };
}

export { SITE_URL, SHARE_IMAGE };
