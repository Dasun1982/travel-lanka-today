const guideImage = new URL('../../../images/Kithsiri.jpeg', import.meta.url).href;

const whatsappMessage = encodeURIComponent(
  'Hello Kithsiri, I would like to plan a private Sri Lanka journey with you.'
);
const whatsappHref = `https://wa.me/94771234567?text=${whatsappMessage}`;

const guideFeatures = [
  '20+ Years Experience',
  'English Speaking Guide',
  'Private Driver & Guide',
  'Wildlife Expert',
  'Cultural & Historical Knowledge',
  'Flexible Custom Tours'
];

const whyCards = [
  {
    icon: '01',
    title: 'Local Knowledge',
    text: 'Hidden beaches, village life, local restaurants, and authentic experiences.'
  },
  {
    icon: '02',
    title: 'Wildlife Experience',
    text: 'Yala, Udawalawe, bird watching, whale watching, and quiet nature moments.'
  },
  {
    icon: '03',
    title: 'Culture & History',
    text: 'Ancient cities, temples, UNESCO heritage sites, and local traditions.'
  },
  {
    icon: '04',
    title: 'Flexible Travel',
    text: 'Custom itinerary, private vehicle, personal attention, and relaxed pace.'
  }
];

const highlights = [
  { value: '20+', label: 'Years Experience' },
  { value: '1000+', label: 'Happy Travelers' },
  { value: 'All Island', label: 'Coverage' },
  { value: 'Private', label: 'Tours Only' }
];

function GuidePage() {
  return (
    <main className="guide-page">
      <section className="guide-hero-section section">
        <div className="container guide-hero-card reveal">
          <figure className="guide-hero-photo">
            <img src={guideImage} alt="Kithsiri, private Sri Lanka guide" />
          </figure>

          <div className="guide-hero-copy">
            <span className="eyebrow">MEET YOUR GUIDE</span>
            <h1>Travel Sri Lanka with Kithsiri</h1>
            <p className="guide-subtitle">Travel with a local who knows the island beyond the guidebooks.</p>
            <p>
              For more than 20 years, Kithsiri has guided travelers across Sri Lanka, sharing the island's wildlife,
              culture, history, and natural beauty with a calm and personal approach.
            </p>

            <div className="guide-feature-list" aria-label="Kithsiri guide features">
              {guideFeatures.map((feature) => (
                <span key={feature}>
                  <span aria-hidden="true">&#10003;</span>
                  {feature}
                </span>
              ))}
            </div>

            <a className="button button-primary guide-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Kithsiri
            </a>
          </div>
        </div>
      </section>

      <section className="guide-why-section section">
        <div className="container">
          <div className="guide-section-heading reveal">
            <span className="eyebrow">WHY TRAVEL WITH KITHSIRI</span>
            <h2>A calmer way to discover Sri Lanka</h2>
          </div>

          <div className="guide-why-grid">
            {whyCards.map((card, index) => (
              <article className="guide-why-card reveal" style={{ '--reveal-delay': `${index * 80}ms` }} key={card.title}>
                <span>{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-story-section section">
        <div className="container guide-story-panel reveal">
          <div>
            <span className="eyebrow">ABOUT KITHSIRI</span>
            <h2>Personal journeys shaped by local experience</h2>
          </div>

          <div className="guide-story-copy">
            <p>
              For more than 20 years, Kithsiri has been guiding travelers across Sri Lanka, sharing the island's
              wildlife, culture, history, and natural beauty.
            </p>
            <p>
              From ancient temples and tea plantations to national parks and hidden coastal gems, every journey is
              designed around your interests and travel style.
            </p>
            <p>
              Whether you are visiting Sri Lanka for the first time or returning to explore deeper, Kithsiri provides a
              calm, friendly, and authentic local experience with the comfort of a private vehicle and personal guide.
            </p>
          </div>
        </div>
      </section>

      <section className="guide-highlights-section section">
        <div className="container guide-highlights-grid reveal">
          {highlights.map((item) => (
            <div className="guide-highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="guide-final-cta section">
        <div className="container guide-final-panel reveal">
          <h2>Ready to explore Sri Lanka with Kithsiri?</h2>
          <p>Private tours, flexible itineraries, and local expertise for a journey shaped around you.</p>
          <a className="button button-primary" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp Kithsiri
          </a>
        </div>
      </section>
    </main>
  );
}

export default GuidePage;
