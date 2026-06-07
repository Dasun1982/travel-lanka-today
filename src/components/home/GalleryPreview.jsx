import SectionHeader from '../shared/SectionHeader.jsx';
import { gallery } from '../../data/siteData.js';

function GalleryPreview() {
  return (
    <section className="section gallery-section reveal" id="gallery">
      <div className="container">
        <SectionHeader
          eyebrow="Gallery preview"
          title="A glimpse beneath the canopy"
          text="Cinematic moments from the landscapes, coastlines, temples, and wildlife that shape a private Sri Lankan journey."
          align="center"
        />

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className="gallery-item reveal" style={{ '--reveal-delay': `${index * 70}ms` }} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
