import { useEffect, useMemo, useRef, useState } from 'react';
import { assets, navLinks } from '../../data/siteData.js';

const whatsappMessage = encodeURIComponent(
  'Hello Kithsiri, I would like to plan a private Sri Lanka journey with Travel Lanka Today.'
);

const whatsappHref = `https://wa.me/94771234567?text=${whatsappMessage}`;

const icons = {
  home: (
    <path d="M3.5 10.5 12 3.7l8.5 6.8v8.8a1 1 0 0 1-1 1h-5.1v-6.1H9.6v6.1H4.5a1 1 0 0 1-1-1v-8.8Z" />
  ),
  guide: (
    <>
      <path d="M12 12.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M4.8 20.4a7.3 7.3 0 0 1 14.4 0" />
    </>
  ),
  experiences: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m14.9 8.1-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  tours: (
    <>
      <path d="M4.5 18.8V6.2l5-2 5 2 5-2v12.6l-5 2-5-2-5 2Z" />
      <path d="M9.5 4.2v12.6" />
      <path d="M14.5 6.2v12.6" />
    </>
  ),
  gallery: (
    <>
      <path d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11Z" />
      <path d="m5.2 16.4 4.1-4 3.1 3 2.2-2.1 4.2 4" />
      <path d="M15.8 8.7h.1" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M5 19.5 6.1 16A8.1 8.1 0 1 1 9 18.7L5 19.5Z" />
      <path d="M9.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.7l.5-.6c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.5c0 .4-.2.8-.5 1-3.2.8-7.7-3.2-7.9-6.4 0-.2 0-.5.1-.8Z" />
    </>
  )
};

const mobileLinks = [
  { label: 'Home', href: '#home', key: 'home', icon: 'home' },
  { label: 'Guide', href: '#meet', key: 'guide', icon: 'guide' },
  { label: 'Tours', href: '/tours', key: 'tours', icon: 'tours' },
  { label: 'Experiences', href: '#experiences', key: 'experiences', icon: 'experiences' },
  { label: 'Gallery', href: '#gallery', key: 'gallery', icon: 'gallery' },
  { label: 'WhatsApp', href: whatsappHref, key: 'whatsapp', matchHref: '#plan', icon: 'whatsapp', external: true }
];

function NavIcon({ name }) {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function isToursPath() {
  return typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/tours';
}

function getPageHref(href, isToursPage) {
  if (isToursPage && href.startsWith('#')) {
    return `/${href}`;
  }

  return href;
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToursPage, setIsToursPage] = useState(isToursPath);
  const [activeHref, setActiveHref] = useState(() => (isToursPath() ? '/tours' : '#home'));
  const desktopPillRef = useRef(null);
  const mobilePillRef = useRef(null);
  const desktopItemRefs = useRef({});
  const mobileItemRefs = useRef({});
  const [desktopIndicator, setDesktopIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobileIndicator, setMobileIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const mobileActiveKey = activeHref === '#plan' ? 'whatsapp' : mobileLinks.find((link) => link.href === activeHref)?.key;

  const sectionHrefs = useMemo(() => navLinks.filter((link) => link.href.startsWith('#')).map((link) => link.href), []);

  useEffect(() => {
    const updateActive = () => {
      const onToursPage = isToursPath();
      setIsScrolled(window.scrollY > 24);
      setIsToursPage(onToursPage);

      if (onToursPage) {
        setActiveHref('/tours');
        return;
      }

      const scrollPosition = window.scrollY + 150;
      let currentHref = '#home';

      sectionHrefs.forEach((href) => {
        const section = document.querySelector(href);
        if (section && section.offsetTop <= scrollPosition) {
          currentHref = href;
        }
      });

      setActiveHref(currentHref);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionHrefs]);

  useEffect(() => {
    const measureIndicator = (container, item, setIndicator) => {
      if (!container || !item) {
        setIndicator((current) => ({ ...current, opacity: 0 }));
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setIndicator({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        opacity: 1
      });
    };

    const updateIndicators = () => {
      const activeDesktopItem = desktopItemRefs.current[activeHref];
      const activeMobileItem = mobileActiveKey ? mobileItemRefs.current[mobileActiveKey] : null;

      measureIndicator(desktopPillRef.current, activeDesktopItem, setDesktopIndicator);
      measureIndicator(mobilePillRef.current, activeMobileItem, setMobileIndicator);
    };

    updateIndicators();
    window.addEventListener('resize', updateIndicators);

    return () => window.removeEventListener('resize', updateIndicators);
  }, [activeHref, mobileActiveKey]);

  const setDesktopItemRef = (href) => (node) => {
    desktopItemRefs.current[href] = node;
  };

  const setMobileItemRef = (key) => (node) => {
    mobileItemRefs.current[key] = node;
  };

  const brandHref = isToursPage ? '/' : '#home';

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href={brandHref} aria-label="Travel Lanka Today home" onClick={() => setActiveHref('#home')}>
            <img src={assets.logo} alt="" className="brand-logo" />
            <span className="brand-text">Travel Lanka Today</span>
          </a>

          <div className="desktop-nav-wrap" aria-label="Primary navigation">
            <nav className="main-nav" ref={desktopPillRef}>
              <span
                className="nav-active-indicator"
                style={{
                  opacity: desktopIndicator.opacity,
                  transform: `translateX(${desktopIndicator.left}px)`,
                  width: `${desktopIndicator.width}px`
                }}
                aria-hidden="true"
              />
              {navLinks.map((link) => (
                <a
                  className={`nav-pill-link ${activeHref === link.href ? 'is-active' : ''}`}
                  href={getPageHref(link.href, isToursPage)}
                  key={link.href}
                  ref={setDesktopItemRef(link.href)}
                  onClick={() => setActiveHref(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a className="desktop-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>

          <a className="mobile-top-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation" ref={mobilePillRef}>
        <span
          className="mobile-active-indicator"
          style={{
            opacity: mobileIndicator.opacity,
            transform: `translateX(${mobileIndicator.left}px)`,
            width: `${mobileIndicator.width}px`
          }}
          aria-hidden="true"
        />
        {mobileLinks.map((link) => (
          <a
            className={`mobile-nav-link ${mobileActiveKey === link.key ? 'is-active' : ''}`}
            href={getPageHref(link.href, isToursPage)}
            key={link.key}
            ref={setMobileItemRef(link.key)}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            onClick={() => setActiveHref(link.matchHref || link.href)}
          >
            <NavIcon name={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export default Header;
