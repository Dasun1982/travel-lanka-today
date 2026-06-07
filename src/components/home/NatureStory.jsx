import { assets, natureMoments } from '../../data/siteData.js';

function NatureStory() {
  return (
    <section className="nature-story-section cinematic-story section" id="nature">
      <div className="cinematic-story__image reveal">
        <img src={assets.safari} alt="Elephants and wildlife in Sri Lanka" loading="lazy" />
      </div>
      <div className="container cinematic-story__content">
        <div className="cinematic-story__copy reveal" style={{ '--reveal-delay': '120ms' }}>
          <span className="eyebrow">Nature and wildlife</span>
          <h2>Move with the rhythm of forests, elephants, birds, and morning light.</h2>
          <p>
            Kithsiri designs nature days with patience: slower starts when the forest needs quiet, earlier starts when
            wildlife is moving, and routes that leave space for the unexpected.
          </p>
          <ul>
            {natureMoments.map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NatureStory;
