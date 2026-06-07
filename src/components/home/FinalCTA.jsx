const whatsappMessage = encodeURIComponent(
  'Hello Kithsiri, I would like to start planning my Sri Lanka journey beyond the guidebooks.'
);

function FinalCTA() {
  return (
    <section className="final-cta-section section" id="plan">
      <div className="container final-cta-panel reveal">
        <h2>Ready to explore Sri Lanka your way?</h2>
        <div className="final-cta-actions">
          <a
            className="button button-primary"
            href={`https://wa.me/94771234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
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
