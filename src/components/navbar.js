import gsap from 'gsap';

export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <a href="#/" class="navbar__logo" data-hover>Dharmik Gohil<sup>®</sup></a>
    <ul class="navbar__links">
      <li><a href="#/" data-hover>Home</a></li>
      <li><a href="#/about" data-hover>About</a></li>
      <li><a href="#/services" data-hover>Services</a></li>
      <li><a href="#/contact" data-hover>Contact</a></li>
    </ul>
    <div class="navbar__hamburger" id="hamburgerBtn" data-hover>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  
  const overlay = document.getElementById('menuOverlay');
  overlay.innerHTML = `
    <div class="menu-overlay__content">
      <div class="menu-overlay__nav">
        <div class="menu-overlay__nav-item">
          <a href="#/" class="menu-overlay__nav-link" data-hover>HOME</a>
          <span class="menu-overlay__nav-icon">+</span>
        </div>
        <div class="menu-overlay__nav-item">
          <a href="#/about" class="menu-overlay__nav-link" data-hover>ABOUT</a>
          <span class="menu-overlay__nav-icon">+</span>
        </div>
        <div class="menu-overlay__nav-item">
          <a href="#/services" class="menu-overlay__nav-link" data-hover>SERVICES</a>
          <span class="menu-overlay__nav-icon">+</span>
        </div>
        <div class="menu-overlay__nav-item">
          <a href="#/blogs" class="menu-overlay__nav-link" data-hover>BLOGS</a>
          <span class="menu-overlay__nav-icon">+</span>
        </div>
        <div class="menu-overlay__nav-item">
          <a href="#/contact" class="menu-overlay__nav-link" data-hover>CONTACT</a>
          <span class="menu-overlay__nav-icon">+</span>
        </div>
      </div>
      <div class="menu-overlay__info">
        <div class="menu-overlay__info-label">Contact Phone</div>
        <div class="menu-overlay__info-value">+91 98765 43210</div>
        <div class="menu-overlay__info-label">Contact Mail</div>
        <div class="menu-overlay__info-value"><a href="mailto:dharmikgohil.work@gmail.com" style="color: inherit; text-decoration: none;">dharmikgohil.work@gmail.com</a></div>
        <div class="menu-overlay__hours">Our Office hours are<br>10 AM – 6 PM, Monday – Friday</div>
        <div class="menu-overlay__socials">
          <a href="https://github.com/DharmikGohil013" class="menu-overlay__social" data-hover target="_blank">GH</a>
          <a href="https://linkedin.com" class="menu-overlay__social" data-hover target="_blank">LI</a>
          <a href="https://dharmikgohil.itch.io" class="menu-overlay__social" data-hover target="_blank">IO</a>
          <a href="https://instagram.com" class="menu-overlay__social" data-hover target="_blank">IG</a>
        </div>
      </div>
    </div>
  `;
  
  initHamburger();
  initNavScroll();
}

function initHamburger() {
  const btn = document.getElementById('hamburgerBtn');
  const overlay = document.getElementById('menuOverlay');
  let isOpen = false;
  
  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    btn.classList.toggle('active', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    if (isOpen) {
      // Staggered link reveal
      const links = overlay.querySelectorAll('.menu-overlay__nav-item');
      gsap.fromTo(links,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
    }
  });
  
  // Close menu on link click
  overlay.querySelectorAll('.menu-overlay__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      btn.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initNavScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  function updateNavbar() {
    const scroll = window.scrollY;
    const heroSection = document.querySelector('.hero');
    const darkSections = document.querySelectorAll('.section--dark, .achievements, .contact-form-section');
    
    // Scrolled state
    navbar.classList.toggle('navbar--scrolled', scroll > 50);
    
    // Check if over hero
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (scroll < heroBottom - 80) {
        navbar.className = 'navbar navbar--transparent' + (scroll > 50 ? ' navbar--scrolled' : '');
        return;
      }
    }
    
    // Check if over dark section
    let overDark = false;
    darkSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        overDark = true;
      }
    });
    
    if (overDark) {
      navbar.className = 'navbar navbar--dark navbar--scrolled';
    } else {
      navbar.className = 'navbar navbar--solid navbar--scrolled';
    }
    
    lastScroll = scroll;
  }
  
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}

export function updateNavbarForPage(page) {
  const navbar = document.getElementById('navbar');
  // Reset
  navbar.className = 'navbar';
  
  if (page === 'home') {
    navbar.classList.add('navbar--transparent');
  } else if (page === 'services' || page === 'contact') {
    navbar.classList.add('navbar--solid');
  } else {
    navbar.classList.add('navbar--transparent');
  }
}
