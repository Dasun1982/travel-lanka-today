import SectionHeader from '../shared/SectionHeader.jsx';
import { luxuryStats } from '../../data/siteData.js';

function Numbers() {
  return (
    <section className="section numbers-section reveal">
      <div className="container numbers-grid">
        <SectionHeader
          eyebrow="Numbers"
          title="Designed with experience, restraint, and local care"
          text="Travel Lanka Today plans private Sri Lanka journeys for international travellers who value calm, comfort, and authenticity."
        />

        <div className="numbers-list">
          {luxuryStats.map((stat, index) => (
            <article className="number-card reveal" style={{ '--reveal-delay': `${index * 80}ms` }} key={stat.label}>
              <strong>
                {stat.value.toLocaleString()}
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers;
