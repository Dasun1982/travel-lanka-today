import { contactDetails } from '../../data/siteData.js';

function FinalCTA() {
  return (
    <section className="final-cta-section section" id="plan">
      <div className="container final-cta-panel reveal">
        <h2>Ready to explore Sri Lanka your way?</h2>
        <div className="final-cta-actions">
          <a
            className="button button-primary"
            href={contactDetails.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Kithsiri
          </a>
          <a className="button button-secondary" href="/tours">
            View Our Tours
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
