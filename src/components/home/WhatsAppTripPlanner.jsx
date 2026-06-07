const whatsappMessage = encodeURIComponent(
  'Hello Kithsiri, I would like help planning a private multi-day Sri Lanka journey.'
);

function WhatsAppTripPlanner() {
  return (
    <section className="section planner-section reveal" id="planner">
      <div className="container planner-panel">
        <div className="planner-copy reveal">
          <span className="eyebrow">WhatsApp trip planner</span>
          <div className="section-ornament" aria-hidden="true">
            <span />
            <span />
          </div>
          <h2>Tell Kithsiri what Sri Lanka should feel like</h2>
          <p>
            Send your dates, travel style, group size, and dream places. Kithsiri will help shape a private route through
            wildlife parks, ancient kingdoms, tea country, forest roads, and coast.
          </p>
          <a
            className="button button-primary"
            href={`https://wa.me/94771234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Kithsiri
          </a>
        </div>

        <div className="planner-notes reveal" style={{ '--reveal-delay': '120ms' }}>
          <div>
            <span>01</span>
            <p>Share your dates, hotel level, interests, and must-see places.</p>
          </div>
          <div>
            <span>02</span>
            <p>Kithsiri suggests a realistic private route with calm timing.</p>
          </div>
          <div>
            <span>03</span>
            <p>Travel with one trusted English speaking driver and guide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppTripPlanner;
