import { assets, cultureMoments } from '../../data/siteData.js';

function CultureStory() {
  return (
    <section className="culture-story-section section" id="culture">
      <div className="container culture-story-grid">
        <div className="culture-story-copy reveal">
          <span className="eyebrow">Culture and heritage</span>
          <h2>Ancient kingdoms, sacred rituals, and local life beyond the obvious stops.</h2>
          <p>
            This is not a checklist of monuments. It is a hosted cultural journey through temple mornings, old royal
            capitals, handmade traditions, local kitchens, and the small stories between famous places.
          </p>
          <div className="culture-story-lines">
            {cultureMoments.map((moment, index) => (
              <article key={moment}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{moment}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="culture-story-media reveal" style={{ '--reveal-delay': '140ms' }}>
          <figure className="culture-image culture-image--large">
            <img src={assets.temple} alt="Sri Lankan Buddhist temple heritage" loading="lazy" />
          </figure>
          <figure className="culture-image culture-image--small">
            <img src={assets.mihintale} alt="Mihintale Buddha statue in Sri Lanka" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CultureStory;
