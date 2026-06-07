import { useEffect, useMemo, useRef, useState } from 'react';
import { editorialGallery } from '../../data/siteData.js';

const galleryCategories = ['All', 'Wildlife', 'Culture', 'Tea Country', 'Coast', 'Local Life'];

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
      return editorialGallery;
    }

    return editorialGallery.filter((item) => item.category === activeCategory);
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
    }, 4800);

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
      left: direction * 300,
      behavior: 'smooth'
    });
  }

  return (
    <section className="gallery-diary-section section" id="gallery">
      <div className="container gallery-diary-shell reveal">
        <div className="gallery-diary-heading">
          <span className="eyebrow">REAL MOMENTS</span>
          <h2>Sri Lanka Through Kithsiri’s Journeys</h2>
          <p>A glimpse of wildlife, culture, tea country, beaches, and the quiet roads between them.</p>
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

          <div className="gallery-diary-track" aria-live="polite">
            {visibleGallery.map((item, index) => {
              const offset = getLoopOffset(index, safeActiveIndex, visibleGallery.length);
              const positionClass = getPositionClass(offset);

              return (
                <figure
                  className={`gallery-diary-card ${positionClass}`}
                  aria-hidden={positionClass === 'gallery-diary-card--hidden'}
                  key={item.title}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <figcaption>
                    <span>{item.category}</span>
                    {item.title}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="gallery-mobile-strip" ref={mobileStripRef}>
            {visibleGallery.map((item) => (
              <figure className="gallery-mobile-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
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
          <button type="button" aria-label="Next gallery photo" onClick={() => moveGallery(1)}>
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryMasonry;
