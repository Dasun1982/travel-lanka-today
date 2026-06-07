import SectionHeader from '../shared/SectionHeader.jsx';

function ContactPlan() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section contact-section reveal" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeader
            eyebrow="Plan your trip"
            title="Begin your private Sri Lanka nature journey"
            text="Tell us how you want Sri Lanka to feel, and we will shape a thoughtful private itinerary around your pace, comfort, and curiosity."
          />
          <div className="contact-highlights">
            <span>Private guide matching</span>
            <span>Eco-lodge and boutique stay planning</span>
            <span>Wildlife, heritage, coast, and tea country routing</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Journey idea</span>
            <textarea rows="5" placeholder="Tell us about your dates, group, and dream Sri Lanka experience." />
          </label>
          <button type="submit">Plan My Journey</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPlan;
