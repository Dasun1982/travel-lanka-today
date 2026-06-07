import SectionHeader from '../shared/SectionHeader.jsx';
import { assets } from '../../data/siteData.js';
import { wildlifeMoments } from '../../data/premiumSections.js';

function NatureWildlife() {
  return (
    <section className="section nature-section reveal" id="wildlife">
      <div className="container feature-story feature-story--dark">
        <div className="feature-story__image reveal">
          <img src={assets.safari} alt="Elephants and safari jeep in Sri Lanka" loading="lazy" />
        </div>

        <div className="feature-story__copy reveal" style={{ '--reveal-delay': '120ms' }}>
          <SectionHeader
            eyebrow="Nature and wildlife"
            title="Move through Sri Lanka like a field observer"
            text="Wildlife days should feel patient, not rushed. Kithsiri designs nature routes around responsible timing, quieter movement, and space to watch the island breathe."
          />
          <ul className="feature-list">
            {wildlifeMoments.map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NatureWildlife;
