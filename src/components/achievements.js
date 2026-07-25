export function renderAchievements() {
  const achievementsList = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
      title: "BEST CLOUD ARCHITECTURE EXCELLENCE AWARD WINNER",
      desc: "Recognized for building fault-tolerant microservices and high-availability cloud backend infrastructure.",
      category: "Cloud Engineering",
      year: "2025",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      title: "TOP FULL STACK DEVELOPER CONTRIBUTOR AWARD",
      desc: "Awarded for exceptional full stack engineering, clean architecture, and modern web application development.",
      category: "Software Engineering",
      year: "2024",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
      title: "EXCELLENCE IN DISTRIBUTED SYSTEM DESIGN ACHIEVEMENT",
      desc: "Honored for designing resilient distributed API gateways, message queues, and high-throughput data layers.",
      category: "System Design",
      year: "2024",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      title: "ENTERPRISE SAAS SOLUTION OF THE YEAR AWARD",
      desc: "Recognized for architecting scalable multi-tenant SaaS web platforms with optimized database performance.",
      category: "Web Systems",
      year: "2023",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
      title: "1st Rank Champion — Code Raider Clash",
      desc: "Secured 1st Rank in DEPSTAR annual algorithm & competitive coding competition.",
      category: "Coding Competition",
      year: "2024",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
      title: "IIT Bombay Techfest Winner & Participant",
      desc: "Recognized at Asia's largest science and technology festival organized by IIT Bombay.",
      category: "National Tech Festival",
      year: "2024-2025",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      title: "NPTEL Data Structures & Algorithms Certification",
      desc: "Elite certification by IITs & IISc covering core DSA, graph algorithms, and DP in Java.",
      category: "NPTEL / IIT Certification",
      year: "2024",
      url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS107S33260060320407043"
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
      title: "HackerRank C# & Problem Solving Elite Badges",
      desc: "Validated proficiency in object-oriented programming, data structures, and algorithms.",
      category: "Algorithmic Excellence",
      year: "2024",
      url: "https://www.hackerrank.com/certificates/iframe/f0ec81cd0589"
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      title: "Hackron Hackathon '25 (Amazon & Blinkit)",
      desc: "Built SafaiNova — automated waste management solution for Blinkit dark stores at DY Patil University.",
      category: "24-Hour Hackathon",
      year: "2025",
      url: null
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      title: "HACKHAZARDS '25 Global Hackathon",
      desc: "Competed among 17,000+ developers across 25+ countries in building software infrastructure.",
      category: "International Hackathon",
      year: "2025",
      url: null
    }
  ];

  return `
    <section class="achievements section section--dark">
      <div class="container">
        <div class="eyebrow reveal" style="color: rgba(255,255,255,0.5);">HONORS & CERTIFICATIONS</div>
        <h2 class="heading-two-tone reveal" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-top: 1rem; color: white;">DHARMIK GOHIL<sup style="font-size:0.3em">®</sup> <span class="gray">ACHIEVEMENTS</span></h2>
        
        <div class="achievements__grid reveal-stagger">
          ${achievementsList.map(item => `
            <div class="achievements__card">
              <div class="achievements__card-icon">
                ${item.icon}
              </div>
              <h3 class="achievements__card-title">${item.title}</h3>
              <p class="achievements__card-desc" style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 1.25rem;">${item.desc}</p>
              <div class="achievements__card-meta" style="justify-content: space-between; align-items: center;">
                <div>
                  <span style="color: var(--accent); margin-right: 0.5rem;">✳ ${item.category}</span>
                  <span>[${item.year}]</span>
                </div>
                ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener" class="achievements__verify-btn" style="color: var(--accent); font-size: 0.75rem; text-decoration: underline; font-weight: 600;">VERIFY CERTIFICATE →</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
