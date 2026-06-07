const guideImage = new URL('../../../images/Kithsiri.jpeg', import.meta.url).href;
const guideHref = '/guide';

const featurePills = [
  '20+ Years Experience',
  'Private Multi-Day Tours',
  'Wildlife & Nature Expert',
  'Culture & Heritage',
  'English Speaking',
  'Flexible Custom Routes'
];

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Travel Days Guided' },
  { value: '100%', label: 'Private Tours' },
  { value: '5★', label: 'Guest Experience' }
];

const infoCards = [
  { title: '20+ Years', detail: 'Guiding Sri Lanka' },
  { title: 'Private Driver & Guide', detail: 'One trusted host' },
  { title: 'UK / Germany / France / Australia / USA', detail: 'Travelers welcomed' }
];

function MeetKithsiri() {
  return (
    <section className="section meet-section reveal" id="meet">
      <div className="container">
        <div className="meet-panel">
          <div className="meet-copy">
            <span className="eyebrow">MEET YOUR GUIDE</span>
            <h2>Travel Sri Lanka with Kithsiri</h2>
            <p>
              With more than 20 years of experience, Kithsiri helps travelers discover Sri Lanka beyond the guidebooks
              - from wildlife parks and ancient kingdoms to tea country roads and hidden local places.
            </p>

            <div className="meet-feature-pills" aria-label="Kithsiri guide strengths">
              {featurePills.map((feature) => (
                <span key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </span>
              ))}
            </div>

            <div className="meet-actions">
              <a
                className="button meet-profile-button"
                href={guideHref}
              >
                View Full Guide Profile
              </a>
              <a
                className="button meet-primary"
                href="#plan"
              >
                Plan My Journey
              </a>
            </div>

            <a className="meet-profile-link" href={guideHref}>
              Learn more about Kithsiri <span aria-hidden="true">&rarr;</span>
            </a>

            <div className="meet-stats" aria-label="Kithsiri guide highlights">
              {stats.map((stat) => (
                <span key={stat.label}>
                  <strong>{stat.value}</strong>
                  {stat.label}
                </span>
              ))}
            </div>
          </div>

          <div className="meet-visual">
            <div className="meet-photo-glow" aria-hidden="true" />
            <a className="meet-media-link" href={guideHref} aria-label="View Kithsiri's full guide profile">
              <figure className="meet-media">
                <img src={guideImage} alt="Kithsiri, private Sri Lanka driver and guide" loading="lazy" />
              </figure>
            </a>
            {infoCards.map((card, index) => (
              <span className={`meet-info-card meet-info-card--${index + 1}`} key={card.title}>
                <strong>{card.title}</strong>
                <small>{card.detail}</small>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetKithsiri;
