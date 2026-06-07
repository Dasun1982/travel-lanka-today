import { mosaicExperiences } from '../../data/siteData.js';

function ExperienceMosaic() {
  return (
    <section className="experience-mosaic-section section" id="experiences">
      <div className="container experience-editorial">
        <div className="mosaic-heading reveal">
          <h2>Signature Experiences</h2>
          <p>Choose the kind of Sri Lanka journey you want Kithsiri to shape around you.</p>
        </div>

        <div className="experience-mosaic reveal" style={{ '--reveal-delay': '140ms' }}>
          {mosaicExperiences.map((experience) => (
            <article
              className={`mosaic-tile ${experience.highlighted ? 'mosaic-tile--featured' : ''}`}
              key={experience.title}
              style={{ '--experience-order': experience.order }}
            >
              <a className="mosaic-tile__image" href="#plan" aria-label={`Explore ${experience.title}`}>
                <img src={experience.image} alt={`${experience.title} experience in Sri Lanka`} loading="lazy" />
              </a>
              <div className="mosaic-tile__body">
                <span>{experience.category}</span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <a href="#plan">Explore Experience</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceMosaic;
