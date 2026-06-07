import SectionHeader from '../shared/SectionHeader.jsx';
import { handpickedExperiences } from '../../data/premiumSections.js';

function HandpickedExperiences() {
  return (
    <section className="section handpicked-section reveal" id="experiences">
      <div className="container">
        <div className="section-split">
          <SectionHeader
            eyebrow="Handpicked experiences"
            title="Fewer stops, deeper memories"
            text="Rather than filling every day with checklists, Kithsiri builds journeys around carefully chosen experiences that reveal Sri Lanka with depth and calm."
          />
          <a className="section-action" href="#planner">
            Design My Route
          </a>
        </div>

        <div className="experience-editorial-grid">
          {handpickedExperiences.map((experience, index) => (
            <article
              className="experience-editorial reveal"
              style={{ '--reveal-delay': `${index * 90}ms` }}
              key={experience.title}
            >
              <img src={experience.image} alt={experience.title} loading="lazy" />
              <div>
                <span>{experience.label}</span>
                <h3>{experience.title}</h3>
                <p>{experience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HandpickedExperiences;
