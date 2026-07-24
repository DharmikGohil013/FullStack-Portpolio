export function renderTrustedBy() {
  // Generate simple SVG placeholder logos
  const logos = [
    { name: 'TechCorp', width: 100 },
    { name: 'GameHub', width: 90 },
    { name: 'VRWorld', width: 85 },
    { name: 'IndieDev', width: 95 },
    { name: 'XRLabs', width: 80 }
  ];
  
  const logoHTML = logos.map((logo, i) => `
    <svg class="hero__trusted-logo" width="${logo.width}" height="28" viewBox="0 0 ${logo.width} 28">
      <rect x="0" y="4" width="20" height="20" rx="4" fill="currentColor" opacity="0.6"/>
      <text x="26" y="20" font-family="Inter, sans-serif" font-weight="600" font-size="12" fill="currentColor">${logo.name}</text>
    </svg>
  `).join('');
  
  return `
    <div class="hero__trusted">
      <span class="hero__trusted-label">TRUSTED BY LEADING BRANDS</span>
      <div class="hero__trusted-logos">
        ${logoHTML}
      </div>
    </div>
  `;
}
