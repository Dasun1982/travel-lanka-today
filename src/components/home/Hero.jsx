import { assets } from '../../data/siteData.js';

const whatsappMessage = encodeURIComponent(
  'Hello Kithsiri, I would like to plan a private Sri Lanka journey with Travel Lanka Today.'
);

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-image" style={{ '--hero-image': `url("${assets.jungleBeach}")` }} aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Private Sri Lanka journeys</span>
          <h1>Discover Sri Lanka Beyond the Guidebooks</h1>
          <p>
            Private journeys through wildlife, culture, tea country, and hidden local experiences with Kithsiri.
          </p>
          <div className="hero-actions">
            <a href="#plan" className="button button-primary">
              Plan My Journey
            </a>
            <a
              href={`https://wa.me/94771234567?text=${whatsappMessage}`}
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Kithsiri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
