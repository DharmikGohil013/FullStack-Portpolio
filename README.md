# Dharmik Gohil — Full Stack Developer Portfolio

A fast, modern, and interactive portfolio built using Vite, Vanilla JavaScript, CSS, and GSAP animations.

---

## 🚀 Features

- **Dynamic Client-Side Routing**: Fast navigation between pages (`Home`, `About`, `Services`, `Blogs`, `Contact`).
- **Interactive GSAP Animations**: Smooth reveal effects, magnetic elements, and custom page transitions.
- **Custom Interactive Cursor**: Smooth visual feedback for hover states and user interactions.
- **Responsive Layout**: Designed for optimal viewing across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animation**: [GSAP](https://greensock.com/gsap/)

---

## 📁 Project Structure

```text
FullStack-Portpolio/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components (Navbar, Footer, FAQ, etc.)
│   ├── pages/       # Page views (Home, About, Services, Blogs, Contact)
│   ├── styles/      # Global & component stylesheets
│   ├── animations.js# GSAP animation handlers
│   ├── cursor.js    # Interactive cursor behavior
│   ├── router.js    # SPA router logic
│   └── main.js      # Application entry point
├── index.html       # HTML entry point
├── package.json     # Project dependencies & scripts
└── vite.config.js   # Vite configuration
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DharmikGohil013/FullStack-Portpolio.git
   cd FullStack-Portpolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 👤 Author

**Dharmik Gohil**
- Full Stack Software Engineer & System Architect

## Search optimization

Run `npm run build` then `npm run check:seo` before publishing. Deploy the generated `dist` directory; running Vite alone does not produce crawlable static route documents.

Keyword intent (selected from the portfolio's actual services, not search-volume research):

| Page | Primary focus | Supporting terms |
| --- | --- | --- |
| / | Dharmik Gohil, full stack developer in Surat | React, Node.js, ERPNext, custom CRM |
| /about | Dharmik Gohil software engineer | Surat Gujarat, engineering skills, certifications |
| /services | ERPNext and Frappe customization | custom CRM development, Next.js web development, API engineering, database optimization |
| /contact | contact Dharmik Gohil | web development projects, ERPNext developer in Surat |
| /blogs | software engineering topics | ERPNext, PostgreSQL, microservices, Next.js |

Titles, descriptions, and route-specific JSON-LD are maintained in `src/seo.js`. FAQ text is shared with the visible component; only /contact marks up the repeated FAQ. Google ignores meta keywords, so keywords belong in useful visible copy and descriptive titles. The optional llms.txt is a summary, not a Google requirement or ranking mechanism. No AI visibility or rich-result appearance is guaranteed.

After deployment, verify real HTTP 200 responses for the five canonical pages and HTTP 404 for an unknown path. Inspect URLs with Google Search Console, submit `/sitemap.xml`, and check structured data with Rich Results Test. Search Console verification requires access to the site's property; no verification token is fabricated here. Track real queries, indexing, and Core Web Vitals before refining keyword targets.

Content work remaining: the blog has topic cards without article bodies or detail URLs. Publish original articles before adding Article schema or article sitemap entries. Confirm the existing contact phone number, opening hours, awards, and project metrics before publishing; those were not independently verified in this SEO pass. The existing contact form also needs a submission integration.

References:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
