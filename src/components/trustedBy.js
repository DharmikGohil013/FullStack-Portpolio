export function renderTrustedBy() {
  const brands = [
    {
      name: "Google Cloud",
      svg: `<svg viewBox="0 0 140 32" fill="none" height="28" style="width: auto;"><path d="M19.3 12.6v3.7h5.8c-.3 1.8-2 3.8-5.8 3.8-3.5 0-6.4-2.9-6.4-6.5s2.9-6.5 6.4-6.5c1.9 0 3.2.8 4 1.5l2.6-2.6C24.3 4.4 22 3.5 19.3 3.5 12.8 3.5 7.5 8.8 7.5 15.3s5.3 11.8 11.8 11.8c6.8 0 11.3-4.8 11.3-11.5 0-.8-.1-1.4-.2-2h-11.1z" fill="currentColor"/><text x="34" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">GOOGLE CLOUD</text></svg>`
    },
    {
      name: "AWS Architecture",
      svg: `<svg viewBox="0 0 130 32" fill="none" height="28" style="width: auto;"><path d="M14 6l-6 16h3.5l1.2-3.5h5.6l1.2 3.5H23L17 6h-3zm.4 4.5l2 5.5h-4l2-5.5z" fill="currentColor"/><text x="30" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">AWS CLOUD</text></svg>`
    },
    {
      name: "Docker Systems",
      svg: `<svg viewBox="0 0 120 32" fill="none" height="28" style="width: auto;"><rect x="4" y="14" width="4" height="4" rx="1" fill="currentColor"/><rect x="9" y="14" width="4" height="4" rx="1" fill="currentColor"/><rect x="14" y="14" width="4" height="4" rx="1" fill="currentColor"/><rect x="9" y="9" width="4" height="4" rx="1" fill="currentColor"/><rect x="14" y="9" width="4" height="4" rx="1" fill="currentColor"/><text x="24" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">DOCKER</text></svg>`
    },
    {
      name: "GitHub Ecosystem",
      svg: `<svg viewBox="0 0 120 32" fill="none" height="28" style="width: auto;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="currentColor"/><text x="28" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">GITHUB</text></svg>`
    },
    {
      name: "Vercel Platform",
      svg: `<svg viewBox="0 0 110 32" fill="none" height="28" style="width: auto;"><path d="M12 4L22 22H2L12 4Z" fill="currentColor"/><text x="28" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">VERCEL</text></svg>`
    },
    {
      name: "DEPSTAR / IIT Bombay",
      svg: `<svg viewBox="0 0 140 32" fill="none" height="28" style="width: auto;"><polygon points="12,4 15,12 23,12 16,17 19,25 12,20 5,25 8,17 1,12 9,12" fill="currentColor"/><text x="28" y="20" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="12" fill="currentColor" letter-spacing="0.06em">DEPSTAR TECH</text></svg>`
    }
  ];

  return `
    <div class="hero__trusted">
      <span class="hero__trusted-label">TECHNOLOGY & PLATFORM STACK</span>
      <div class="hero__trusted-logos">
        ${brands.map(b => `<div class="hero__trusted-logo-wrapper">${b.svg}</div>`).join('')}
      </div>
    </div>
  `;
}
