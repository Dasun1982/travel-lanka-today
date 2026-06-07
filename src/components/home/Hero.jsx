import { assets, contactDetails } from '../../data/siteData.js';

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
              href={contactDetails.whatsappHref}
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
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
