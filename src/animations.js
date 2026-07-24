import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveal() {
  // Kill existing ScrollTrigger instances to prevent duplicates
  ScrollTrigger.getAll().forEach(t => t.kill());
  
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el, i) => {
    gsap.fromTo(el, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
  
  // Stagger children reveals
  const staggerGroups = document.querySelectorAll('.reveal-stagger');
  staggerGroups.forEach(group => {
    const children = group.children;
    gsap.fromTo(children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
}

export function heroAnimation() {
  const tl = gsap.timeline({ delay: 0.3 });
  
  // Step 1: Grid overlay is already visible
  
  // Step 2: Ghost text glitch in
  tl.fromTo('.hero__ghost-text', 
    { opacity: 0, scale: 1.1 },
    { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
  );
  
  // Step 3: Portrait image fades and scales in
  tl.fromTo('.hero__portrait',
    { opacity: 0, scale: 0.9, y: 30 },
    { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' },
    '-=0.6'
  );
  
  // Step 4: Tagline types/fades in
  tl.fromTo('.hero__tagline',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.4'
  );
  
  // Step 5: Featured project card fades in
  tl.fromTo('.hero__featured-card',
    { opacity: 0, y: 20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' },
    '-=0.3'
  );
  
  // Step 6: Big name bottom-left
  tl.fromTo('.hero__big-name',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.4'
  );
  
  // Step 7: Contact card bottom-right
  tl.fromTo('.hero__contact-card',
    { opacity: 0, x: 20, scale: 0.95 },
    { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
    '-=0.3'
  );
  
  // Step 8: Crosshair marks
  tl.fromTo('.hero .crosshair',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' },
    '-=0.3'
  );
  
  // Step 9: Trusted-by strip
  tl.fromTo('.hero__trusted',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
    '-=0.2'
  );
  
  tl.fromTo('.hero__trusted-logo',
    { opacity: 0, x: 20 },
    { opacity: 0.4, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
    '-=0.3'
  );
  
  return tl;
}

export function initAccordion(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach(item => {
    const header = item.querySelector('[data-accordion-header]');
    if (!header) return;
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all items in same parent
      const siblings = item.parentElement.querySelectorAll(selector.split(' ').pop());
      siblings.forEach(s => s.classList.remove('active'));
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

export function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing__toggle-btn');
  const monthlyPrices = document.querySelectorAll('[data-price-monthly]');
  const projectPrices = document.querySelectorAll('[data-price-project]');
  const suffixes = document.querySelectorAll('.pricing__card-price-suffix');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      
      monthlyPrices.forEach(el => {
        el.style.display = mode === 'monthly' ? 'inline' : 'none';
      });
      projectPrices.forEach(el => {
        el.style.display = mode === 'project' ? 'inline' : 'none';
      });
      suffixes.forEach(el => {
        el.textContent = mode === 'monthly' ? '/Month' : '/Project';
      });
    });
  });
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
