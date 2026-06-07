import SectionHeader from '../shared/SectionHeader.jsx';
import { assets } from '../../data/siteData.js';

function About() {
  return (
    <section className="section about-section reveal" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img className="about-main-image" src={assets.safari} alt="Sri Lankan elephant safari at golden hour" loading="lazy" />
          <div className="observation-label">
            <span>Field note</span>
            <strong>Southern wildlife route</strong>
          </div>
        </div>

        <div className="about-copy reveal" style={{ '--reveal-delay': '120ms' }}>
          <SectionHeader
            eyebrow="Observation story"
            title="A quieter way to meet the island"
            text="Inspired by the calm structure of a field journal, every Travel Lanka Today route is built around real places, local knowledge, and the natural rhythm of Sri Lanka."
          />
          <p>
            One morning may begin beside a reservoir where elephants move through tall grass. By evening, the road can
            rise into tea country, passing temple bells, forest edges, and village kitchens along the way. We design
            private journeys with that same sense of attention: spacious, grounded, and quietly memorable.
          </p>
          <div className="story-details" aria-label="Travel story details">
            <div>
              <span>Observed route</span>
              <strong>Sigiriya, Kandy, Yala, Galle</strong>
            </div>
            <div>
              <span>Best for</span>
              <strong>Wildlife, culture, tea country, coast</strong>
            </div>
            <div>
              <span>Travel style</span>
              <strong>Private, flexible, locally guided</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
