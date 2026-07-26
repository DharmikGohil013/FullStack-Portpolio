import { renderFooter } from '../components/footer.js';

export function renderServices() {
  return `
    <section class="services-hero">
      <div class="container">
        <span class="services-hero__scroll">©2026 Scroll to Explore</span>
        <h1 class="services-hero__heading reveal">SERVICES</h1>
      </div>
    </section>

    <section class="services-detail section">
      <div class="container">
        <div class="services-detail__list">
          
          <!-- Service 1 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">001 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>FULL STACK</span> WEB DEVELOPMENT</h3>
              <p class="services-detail__item-desc">
                End-to-end web application development using React, Next.js, TypeScript, Node.js, and modern CSS systems. From intuitive user interfaces to resilient backend APIs, building products optimized for scale, performance, and SEO.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">React / Next.js</span>
                <span class="pill-tag">TypeScript</span>
                <span class="pill-tag">Node.js</span>
                <span class="pill-tag">Tailwind CSS</span>
                <span class="pill-tag">Web Vitals</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" alt="Full Stack Web Development Services by Dharmik Gohil - React, Next.js, Node.js" title="Full Stack Web Development - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

          <!-- Service 2 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">002 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>CLOUD & SYSTEM</span> ARCHITECTURE</h3>
              <p class="services-detail__item-desc">
                Architecting fault-tolerant microservices, serverless backends, and event-driven distributed cloud systems. Designing resilient infrastructure on AWS and Vercel capable of handling high traffic with high availability.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Microservices</span>
                <span class="pill-tag">Docker & K8s</span>
                <span class="pill-tag">AWS Cloud</span>
                <span class="pill-tag">Serverless</span>
                <span class="pill-tag">System Design</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" alt="Cloud and Distributed System Architecture Services by Dharmik Gohil" title="Cloud & System Architecture - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

          <!-- Service 3 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">003 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>REST & GRAPHQL</span> API ENGINEERING</h3>
              <p class="services-detail__item-desc">
                Designing and building high-throughput backend APIs, secure authentication gateways, rate limiters, and microservice integration layers with comprehensive OpenAPI/Swagger documentation.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">GraphQL</span>
                <span class="pill-tag">RESTful APIs</span>
                <span class="pill-tag">Express / FastAPI</span>
                <span class="pill-tag">JWT & OAuth</span>
                <span class="pill-tag">OpenAPI</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop" alt="REST and GraphQL API Engineering Services by Dharmik Gohil" title="REST & GraphQL API Engineering - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

          <!-- Service 4 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">004 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>DATABASE</span> DESIGN & CACHING</h3>
              <p class="services-detail__item-desc">
                Relational and NoSQL database modeling, high-performance query optimization, Redis caching layers, connection pooling, and automated schema migrations.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">PostgreSQL</span>
                <span class="pill-tag">MongoDB</span>
                <span class="pill-tag">Redis</span>
                <span class="pill-tag">Prisma ORM</span>
                <span class="pill-tag">Query Optimization</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1542744094-3a31727223ec?q=80&w=600&auto=format&fit=crop" alt="High Performance Database Design and Caching Services by Dharmik Gohil" title="Database Design & Caching - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

          <!-- Service 5 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">005 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>DEVOPS & CI/CD</span> PIPELINES</h3>
              <p class="services-detail__item-desc">
                Building automated continuous integration and continuous deployment pipelines, containerizing environments with Docker, and setting up real-time application monitoring and logging.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">GitHub Actions</span>
                <span class="pill-tag">Docker</span>
                <span class="pill-tag">Vercel / AWS</span>
                <span class="pill-tag">Terraform</span>
                <span class="pill-tag">Monitoring</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop" alt="DevOps and CI/CD Automation Pipeline Services by Dharmik Gohil" title="DevOps & CI/CD Pipelines - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

          <!-- Service 6 -->
          <div class="services-detail__item reveal">
            <div class="services-detail__item-content">
              <span class="services-detail__item-index">006 ✳</span>
              <h3 class="services-detail__item-title"><span class='accent'>TECHNICAL</span> CONSULTING</h3>
              <p class="services-detail__item-desc">
                Comprehensive codebase reviews, architectural audits, security assessments, performance bottleneck profiling, and guidance on modernizing legacy software stacks.
              </p>
              <div class="services-detail__item-tags">
                <span class="pill-tag">Code Audit</span>
                <span class="pill-tag">System Refactoring</span>
                <span class="pill-tag">Performance Tuning</span>
                <span class="pill-tag">Security Audit</span>
                <span class="pill-tag">Tech Architecture</span>
              </div>
            </div>
            <img class="services-detail__item-image" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop" alt="Software Architecture Technical Consulting Services by Dharmik Gohil" title="Technical Consulting - Dharmik Gohil" loading="lazy" decoding="async" width="600" height="400" />
          </div>

        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

export function initServices() {}
