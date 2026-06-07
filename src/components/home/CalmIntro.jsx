import SectionHeader from '../shared/SectionHeader.jsx';
import { introFeatures } from '../../data/siteData.js';

const iconPaths = {
  guide: ['M8 28c2-6 14-6 16 0', 'M16 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M24 14l5 4-5 4'],
  wildlife: ['M5 22c5-13 17-13 22 0', 'M10 22c1 4 11 4 12 0', 'M11 13l-3-4', 'M21 13l3-4'],
  tea: ['M8 11h18v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-3Z', 'M26 13h2a3 3 0 0 1 0 6h-3', 'M10 26h14'],
  heritage: ['M7 27h22', 'M9 12h18', 'M11 12V8l7-4 7 4v4', 'M12 12v15', 'M24 12v15'],
  coast: ['M4 22c4-4 8-4 12 0s8 4 12 0', 'M4 27c4-4 8-4 12 0s8 4 12 0', 'M22 8a4 4 0 1 0-8 0']
};

function CalmIntro() {
  return (
    <section className="section intro-section reveal">
      <div className="container">
        <SectionHeader
          eyebrow="Travel Lanka Today"
          title="Private travel shaped by nature, culture, and quiet expertise"
          text="A refined way to experience Sri Lanka: spacious days, considered routes, and locally guided journeys through forest, coast, tea country, wildlife, and heritage."
          align="center"
        />

        <div className="intro-features">
          {introFeatures.map((feature, index) => (
            <article className="intro-feature reveal" style={{ '--reveal-delay': `${index * 70}ms` }} key={feature.title}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                {iconPaths[feature.icon].map((path) => (
                  <path d={path} key={path} />
                ))}
              </svg>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalmIntro;
