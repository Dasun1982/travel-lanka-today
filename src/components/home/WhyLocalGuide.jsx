import SectionHeader from '../shared/SectionHeader.jsx';
import { assets } from '../../data/siteData.js';
import { localGuideReasons } from '../../data/premiumSections.js';

function WhyLocalGuide() {
  return (
    <section className="section why-local-section reveal" id="why-guide">
      <div className="container editorial-split">
        <div className="editorial-copy reveal">
          <SectionHeader
            eyebrow="Why a local guide"
            title="Sri Lanka feels different with someone who knows the road"
            text="A private journey with Kithsiri is not built around a script. It is shaped by timing, weather, road sense, local trust, and the quiet judgment that comes from 20+ years of guiding."
          />

          <div className="editorial-lines">
            {localGuideReasons.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="editorial-image reveal" style={{ '--reveal-delay': '120ms' }}>
          <img src={assets.boat} alt="Private local experience in Sri Lanka" loading="lazy" />
          <span>Private pace, local knowledge, quieter roads</span>
        </div>
      </div>
    </section>
  );
}

export default WhyLocalGuide;
