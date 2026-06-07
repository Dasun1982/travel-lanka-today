import { useEffect, useMemo, useRef, useState } from 'react';
import { contactDetails } from '../../data/siteData.js';

const imageModules = import.meta.glob([
  '../../../images/*.{jpg,jpeg,webp,avif}',
  '!../../../images/background 1.jpg',
  '!../../../images/background 2.avif',
  '!../../../images/honda shutle.jpeg',
  '!../../../images/toyota kdh.jpeg',
  '!../../../images/toyota prius.jpeg'
], {
  eager: true,
  import: 'default'
});

const galleryCategories = [
  'All',
  'Wildlife',
  'Culture',
  'Temples',
  'Beaches',
  'Nature',
  'Local Life',
  'Guide & Guests'
];

const categoryOrder = new Map(galleryCategories.map((category, index) => [category, index]));

const skipTerms = ['background', 'logo', 'honda', 'toyota'];

const preferredOrder = [
  'safari.jpg',
  'sigiriya.jpeg',
  'train ride.webp',
  'blue beach.jpg',
  'jungle beach.webp',
  'boat tour.jpg',
  'kandy temple.jpg',
  'galle-fort.jpg',
  'whale watching.jpg',
  'elephant.webp',
  'culture 1.jpg',
  'culture 2.webp',
  'culture 3.jpg',
  'culture 4.jpg',
  'coast 1.jpg',
  'coast 2.jpg',
  'coast 3.jpg',
  'coast 4.jpg',
  'coast 5.jpg',
  'coast 6.jpg',
  'coast 7.jpg',
  'local life 1.jpg',
  'local life 2.jpg',
  'local life 3.jpg',
  'local life 4.jpg',
  'local life 5.webp'
];

const preferredIndex = new Map(preferredOrder.map((fileName, index) => [fileName, index]));

const titleOverrides = {
  'Kithsiri.jpeg': 'Kithsiri, Your Private Guide',
  'Colombo-Culture.jpg': 'Colombo Culture',
  'Buddhist-Temple.jpg': 'Buddhist Temple',
  'Dambulla.jpg': 'Dambulla Cave Temple',
  'Mihintale-Buddha-statue.jpg': 'Mihintale Buddha Statue',
  'Nine_Arch_Bridge.jpg': 'Nine Arch Bridge',
  'Pidurangala.jpg': 'Pidurangala Rock',
  'Hiriketiya-Beach.jpg': 'Hiriketiya Beach',
  'galle-fort.jpg': 'Galle Fort',
  'train ride.webp': 'Tea Country Train Ride',
  'boat tour.jpg': 'Village Boat Tour',
  'cooking class.jpg': 'Cooking Class'
};

function normalizeFileName(path) {
  return path.split('/').pop();
}

function readableTitle(fileName) {
  if (titleOverrides[fileName]) {
    return titleOverrides[fileName];
  }

  return fileName
    .replace(/\.(jpg|jpeg|webp|avif)$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCategories(fileName) {
  const name = fileName.toLowerCase();

  if (
    /(bear|bird|butterfly|cow|deer|elephant|leopard|loris|monkey|safari|whale)/.test(name)
  ) {
    return ['Wildlife'];
  }

  if (/(culture|cooking|colombo)/.test(name)) {
    return name.includes('cooking') ? ['Culture', 'Local Life'] : ['Culture'];
  }

  if (/(buddhist|dambulla|kandy temple|mihintale|ancient kingdom|temple|sigiriya|pidurangala)/.test(name)) {
    return ['Temples'];
  }

  if (/(blue beach|coast|hiriketiya|jungle beach)/.test(name)) {
    return ['Beaches'];
  }

  if (name.includes('kithsiri')) {
    return ['Guide & Guests'];
  }

  if (name.includes('local life')) {
    return ['Local Life', 'Guide & Guests'];
  }

  if (name.includes('boat tour')) {
    return ['Nature', 'Local Life'];
  }

  return ['Nature'];
}

const galleryItems = Object.entries(imageModules)
  .map(([path, image]) => {
    const fileName = normalizeFileName(path);
    const searchName = fileName.toLowerCase();

    if (skipTerms.some((term) => searchName.includes(term))) {
      return null;
    }

    const categories = getCategories(fileName);
    const category = categories[0];

    return {
      image,
      fileName,
      title: readableTitle(fileName),
      category,
      categories
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const aPreferredIndex = preferredIndex.has(a.fileName) ? preferredIndex.get(a.fileName) : 999;
    const bPreferredIndex = preferredIndex.has(b.fileName) ? preferredIndex.get(b.fileName) : 999;

    if (aPreferredIndex !== bPreferredIndex) {
      return aPreferredIndex - bPreferredIndex;
    }

    const categoryDifference = categoryOrder.get(a.category) - categoryOrder.get(b.category);

    if (categoryDifference !== 0) {
      return categoryDifference;
    }

    return a.title.localeCompare(b.title);
  });

function getLoopOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getPositionClass(offset) {
  if (offset === 0) return 'gallery-diary-card--active';
  if (offset === -1) return 'gallery-diary-card--left';
  if (offset === 1) return 'gallery-diary-card--right';
  if (offset === -2) return 'gallery-diary-card--far-left';
  if (offset === 2) return 'gallery-diary-card--far-right';
  return 'gallery-diary-card--hidden';
}

function GalleryMasonry() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mobileStripRef = useRef(null);

  const visibleGallery = useMemo(() => {
    if (activeCategory === 'All') {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.categories.includes(activeCategory));
  }, [activeCategory]);
  const safeActiveIndex = visibleGallery.length > 0 ? activeIndex % visibleGallery.length : 0;

  useEffect(() => {
    setActiveIndex(0);
    mobileStripRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeCategory]);

  useEffect(() => {
    if (isPaused || visibleGallery.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % visibleGallery.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isPaused, visibleGallery.length]);

  function moveGallery(direction) {
    if (visibleGallery.length < 2) {
      return;
    }

    setActiveIndex((currentIndex) => (
      (currentIndex + direction + visibleGallery.length) % visibleGallery.length
    ));

    mobileStripRef.current?.scrollBy({
      left: direction * 320,
      behavior: 'smooth'
    });
  }

  return (
    <section className="gallery-diary-section section" id="gallery">
      <div className="container gallery-diary-shell reveal">
        <div className="gallery-diary-heading">
          <span className="eyebrow">GALLERY</span>
          <h2>Real Moments From Sri Lanka</h2>
          <p>
            Wildlife, culture, beaches, tea country, local life, and quiet roads from Kithsiri's journeys.
          </p>
        </div>

        <div className="gallery-diary-pills" aria-label="Gallery categories">
          {galleryCategories.map((category) => (
            <button
              className={activeCategory === category ? 'is-active' : ''}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="gallery-diary-stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gallery-diary-glow" aria-hidden="true" />

          <div className="gallery-diary-track" aria-live="polite" key={activeCategory}>
            {visibleGallery.map((item, index) => {
              const offset = getLoopOffset(index, safeActiveIndex, visibleGallery.length);
              const positionClass = getPositionClass(offset);

              return (
                <figure
                  className={`gallery-diary-card ${positionClass}`}
                  aria-hidden={positionClass === 'gallery-diary-card--hidden'}
                  key={item.fileName}
                >
                  <img src={item.image} alt={item.title} loading={index < 5 ? 'eager' : 'lazy'} />
                  <figcaption>
                    <span>{item.category}</span>
                    {item.title}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="gallery-mobile-strip" ref={mobileStripRef}>
            {visibleGallery.map((item, index) => (
              <figure className="gallery-mobile-card" key={item.fileName}>
                <img src={item.image} alt={item.title} loading={index < 3 ? 'eager' : 'lazy'} />
                <figcaption>
                  <span>{item.category}</span>
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="gallery-diary-controls">
          <button type="button" aria-label="Previous gallery photo" onClick={() => moveGallery(-1)}>
            <span aria-hidden="true">&lsaquo;</span>
          </button>
          <div className="gallery-diary-dots" aria-label="Gallery position">
            {visibleGallery.slice(0, Math.min(visibleGallery.length, 8)).map((item, index) => (
              <button
                className={safeActiveIndex % Math.min(visibleGallery.length, 8) === index ? 'is-active' : ''}
                key={item.fileName}
                type="button"
                aria-label={`Show gallery image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Next gallery photo" onClick={() => moveGallery(1)}>
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </div>

        <div className="gallery-showcase-cta">
          <div>
            <h3>Ready to explore Sri Lanka with Kithsiri?</h3>
            <p>
              <span>Private Tours</span>
              <span>Local Knowledge</span>
              <span>Authentic Experiences</span>
            </p>
          </div>

          <div className="gallery-showcase-actions">
            <a className="button gallery-whatsapp-button" href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp Kithsiri
            </a>
            <a className="button gallery-instagram-button" href={contactDetails.instagramUrl} target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryMasonry;
