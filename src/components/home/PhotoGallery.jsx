import SectionHeader from '../shared/SectionHeader.jsx';
import { editorialGallery } from '../../data/premiumSections.js';

function PhotoGallery() {
  return (
    <section className="section photo-section reveal" id="gallery">
      <div className="container">
        <SectionHeader
          eyebrow="Photo gallery"
          title="A visual route through forest, coast, culture, and wildlife"
          text="Large, quiet glimpses of the landscapes Kithsiri connects into private Sri Lanka journeys."
          align="center"
        />

        <div className="photo-editorial-grid">
          {editorialGallery.map((item, index) => (
            <figure className="photo-editorial-item reveal" style={{ '--reveal-delay': `${index * 65}ms` }} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
