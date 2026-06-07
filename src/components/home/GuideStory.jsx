import { assets, contactDetails, guideTimeline } from '../../data/siteData.js';

function GuideStory() {
  return (
    <section className="guide-story-section section" id="guide-story">
      <div className="container guide-story-grid">
        <div className="guide-story-media reveal">
          <figure className="guide-portrait">
            <img src={assets.safari} alt="A private Sri Lanka wildlife route hosted by Kithsiri" />
            <figcaption>
              <span>Hosted private journeys</span>
              <strong>Wildlife, culture, forest and coast</strong>
            </figcaption>
          </figure>

          <figure className="guide-overlap guide-overlap--one">
            <img src={assets.sigiriya} alt="Sigiriya rock fortress in Sri Lanka" />
            <figcaption>Ancient kingdoms before the crowds</figcaption>
          </figure>

          <figure className="guide-overlap guide-overlap--two">
            <img src={assets.train} alt="Sri Lanka hill country train journey" />
            <figcaption>Misty tea country routes</figcaption>
          </figure>

          <div className="guide-years-badge" aria-label="20 plus years experience">
            <strong>20+</strong>
            <span>Years guiding Sri Lanka</span>
          </div>

          <div className="guide-trust-card" aria-label="Private guide trust details">
            <span>Private guide profile</span>
            <strong>English-speaking driver, local host, route designer</strong>
          </div>
        </div>

        <div className="guide-story-copy reveal" style={{ '--reveal-delay': '140ms' }}>
          <span className="eyebrow">Meet your guide</span>
          <h2>Kithsiri knows the roads that guidebooks miss.</h2>
          <p className="guide-lead">
            English-speaking private driver and guide, shaping nature, wildlife, culture, and custom multi-day tours
            across Sri Lanka for international travelers.
          </p>

          <blockquote>
            <p>
              "The best Sri Lanka journeys are not rushed. They are timed with the morning light, the local rituals, the
              wildlife rhythms, and the quiet roads between famous places."
            </p>
            <cite>Kithsiri, Travel Lanka Today</cite>
          </blockquote>

          <div className="guide-trust-row" aria-label="Kithsiri guide credentials">
            <span>Private driver</span>
            <span>English speaking</span>
            <span>Multi-day expert</span>
          </div>

          <div className="guide-timeline" aria-label="Kithsiri experience timeline">
            {guideTimeline.map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            href={contactDetails.whatsappHref}
            className="button button-primary guide-story-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Kithsiri
          </a>
        </div>
      </div>
    </section>
  );
}

export default GuideStory;
