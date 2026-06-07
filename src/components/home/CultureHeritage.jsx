import SectionHeader from '../shared/SectionHeader.jsx';
import { assets } from '../../data/siteData.js';
import { heritageMoments } from '../../data/premiumSections.js';

function CultureHeritage() {
  return (
    <section className="section heritage-section reveal" id="culture">
      <div className="container feature-story feature-story--reverse">
        <div className="feature-story__copy reveal">
          <SectionHeader
            eyebrow="Culture and heritage"
            title="Ancient kingdoms, temple towns, and living traditions"
            text="The cultural journey is strongest when it has context. Kithsiri helps travellers understand sacred places, old capitals, local food, craft, etiquette, and the human stories behind the monuments."
          />
          <ul className="feature-list">
            {heritageMoments.map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </div>

        <div className="feature-story__image reveal" style={{ '--reveal-delay': '120ms' }}>
          <img src={assets.dambulla} alt="Dambulla heritage site in Sri Lanka" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default CultureHeritage;
