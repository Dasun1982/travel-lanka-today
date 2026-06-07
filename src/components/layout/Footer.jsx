import { assets, navLinks } from '../../data/siteData.js';

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.pathname.replace(/\/$/, '');
}

function isPagePath(path) {
  return path === '/tours' || path === '/guide';
}

function getFooterHref(href) {
  if (isPagePath(getCurrentPath()) && href.startsWith('#')) {
    return `/${href}`;
  }

  return href;
}

function Footer() {
  return (
    <footer className="site-footer reveal">
      <div className="footer-panel">
        <div className="footer-brand">
          <a href={isPagePath(getCurrentPath()) ? '/' : '#home'} className="footer-logo">
            <img src={assets.logo} alt="" />
            <span>Travel Lanka Today</span>
          </a>
          <p>Private Sri Lanka journeys with Kithsiri through wildlife, culture, tea country, and coast.</p>
        </div>

        <div className="footer-links">
          <h3>Quick links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={getFooterHref(link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-plan">
          <h3>Plan Your Journey</h3>
          <a
            className="footer-whatsapp"
            href="https://wa.me/94771234567?text=Hello%20Kithsiri%2C%20I%20would%20like%20to%20plan%20my%20Sri%20Lanka%20journey."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Kithsiri →
          </a>
          <ul>
            <li>
              <a href="tel:+94771234567">+94 77 123 4567</a>
            </li>
            <li>
              <a href="mailto:hello@travellankatoday.com">hello@travellankatoday.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Travel Lanka Today</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
