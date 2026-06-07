import { landingTourPreview } from '../../data/siteData.js';

function ToursPreview() {
  return (
    <section className="landing-tours-section section" id="tours-preview">
      <div className="container">
        <div className="landing-tours-heading reveal">
          <h2>Private Multi-Day Tours</h2>
          <p>Choose a relaxed Sri Lanka route, then Kithsiri can customize it around your dates and interests.</p>
        </div>

        <div className="landing-tours-grid">
          {landingTourPreview.map((tour, index) => (
            <article
              className="landing-tour-card reveal"
              key={tour.title}
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <a className="landing-tour-card__image" href="/tours" aria-label={`View ${tour.title}`}>
                <img src={tour.image} alt={`${tour.title} in Sri Lanka`} loading="lazy" />
              </a>
              <div className="landing-tour-card__content">
                <span className="landing-tour-card__badge">{tour.badge}</span>
                <h3>{tour.title}</h3>
                <p>{tour.text}</p>
                <a className="landing-tour-card__button" href="/tours">
                  View Tour
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="landing-tours-action reveal" style={{ '--reveal-delay': '220ms' }}>
          <a className="button button-primary" href="/tours">
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
}

export default ToursPreview;
