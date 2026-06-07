import SectionHeader from '../shared/SectionHeader.jsx';
import { assets } from '../../data/siteData.js';
import { journeyStyles } from '../../data/premiumSections.js';

function MultiDayJourneys() {
  return (
    <section className="section journeys-section reveal" id="journeys">
      <div className="container journeys-layout">
        <div className="journeys-visual reveal">
          <img src={assets.ella} alt="Scenic Sri Lanka hill country route" loading="lazy" />
        </div>

        <div className="journeys-copy reveal" style={{ '--reveal-delay': '120ms' }}>
          <SectionHeader
            eyebrow="Custom multi-day journeys"
            title="Routes designed around your pace, not a template"
            text="Choose the feeling of the journey, then let Kithsiri shape the roads, timing, rest days, and hidden stops around you."
          />

          <div className="journey-rows">
            {journeyStyles.map((journey) => (
              <article key={journey.title}>
                <span>{journey.duration}</span>
                <div>
                  <h3>{journey.title}</h3>
                  <strong>{journey.route}</strong>
                  <p>{journey.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultiDayJourneys;
