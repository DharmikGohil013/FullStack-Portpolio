export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__nav">
            <h4 class="footer__nav-title">Navigation</h4>
            <ul class="footer__nav-links">
              <li><a href="#/" data-hover>Home</a></li>
              <li><a href="#/about" data-hover>About Me</a></li>
              <li><a href="#/blogs" data-hover>Blogs</a></li>
              <li><a href="#/contact" data-hover>Contact</a></li>
            </ul>
          </div>
          <div class="footer__nav">
            <h4 class="footer__nav-title">Socials</h4>
            <ul class="footer__nav-links">
              <li><a href="https://github.com/DharmikGohil013" target="_blank" data-hover>GitHub <span class="external-arrow">↗</span></a></li>
              <li><a href="https://linkedin.com" target="_blank" data-hover>LinkedIn <span class="external-arrow">↗</span></a></li>
              <li><a href="https://dharmikgohil.itch.io" target="_blank" data-hover>itch.io <span class="external-arrow">↗</span></a></li>
              <li><a href="https://dribbble.com" target="_blank" data-hover>Dribbble <span class="external-arrow">↗</span></a></li>
            </ul>
          </div>
          <div class="footer__wordmark">
            <div class="footer__wordmark-text">DHARMIK<br>GOHIL<sup>®</sup></div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>Copyright & Design by @dharmikgohil — 2026</p>
        </div>
      </div>
    </footer>
  `;
}
