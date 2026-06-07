import { useMemo, useState } from 'react';
import { contactDetails, getWhatsAppHref } from '../../data/siteData.js';

const contactCards = [
  {
    label: 'WhatsApp',
    value: contactDetails.phone,
    button: 'Message on WhatsApp',
    href: contactDetails.whatsappHref,
    external: true
  },
  {
    label: 'Phone',
    value: contactDetails.phone,
    button: 'Call Kithsiri',
    href: contactDetails.phoneHref
  },
  {
    label: 'Email',
    value: contactDetails.email,
    button: 'Send Email',
    href: contactDetails.emailHref
  },
  {
    label: 'Instagram',
    value: contactDetails.instagramHandle,
    button: 'View Instagram',
    href: contactDetails.instagramUrl,
    external: true
  }
];

const initialForm = {
  name: '',
  country: '',
  travelDates: '',
  numberOfDays: '',
  interests: '',
  message: ''
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);

  const inquiryHref = useMemo(() => {
    const message = [
      'Hi Kithsiri, I’m interested in a private Sri Lanka tour.',
      `Name: ${form.name}`,
      `Country: ${form.country}`,
      `Travel dates: ${form.travelDates}`,
      `Number of days: ${form.numberOfDays}`,
      `Interests: ${form.interests}`,
      `Message: ${form.message}`
    ].join('\n');

    return getWhatsAppHref(message);
  }, [form]);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <main className="contact-page">
      <section className="contact-hero-section section">
        <div className="container contact-hero-card reveal">
          <div className="contact-hero-copy">
            <span className="eyebrow">PLAN YOUR JOURNEY</span>
            <h1>Tell Kithsiri where Sri Lanka should take you</h1>
            <p>
              Send your travel dates, interests, and preferred journey length. Kithsiri will help shape a private route
              around wildlife, culture, tea country, beaches, and local experiences.
            </p>
            <div className="contact-hero-actions">
              <a className="button button-primary" href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp Kithsiri
              </a>
              <a className="button button-secondary" href="/tours">
                View Tours
              </a>
            </div>
          </div>

          <div className="contact-hero-note" aria-label="Fast planning note">
            <span>Fastest way to plan</span>
            <strong>Send a WhatsApp message with your dates and trip length.</strong>
            <p>Kithsiri can suggest a calm route for wildlife, temples, tea country, beaches, and local stops.</p>
          </div>
        </div>
      </section>

      <section className="contact-cards-section section" aria-label="Contact options">
        <div className="container contact-card-grid">
          {contactCards.map((card, index) => (
            <article className="contact-card reveal" style={{ '--reveal-delay': `${index * 80}ms` }} key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
              >
                {card.button}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="container contact-form-panel reveal">
          <div className="contact-form-heading">
            <span className="eyebrow">SIMPLE INQUIRY</span>
            <h2>Share the first details</h2>
            <p>No booking engine, no pressure. This prepares a WhatsApp message so you can start directly with Kithsiri.</p>
          </div>

          <form className="contact-inquiry-form">
            <label>
              <span>Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
              />
            </label>

            <label>
              <span>Country</span>
              <input
                type="text"
                value={form.country}
                onChange={(event) => updateField('country', event.target.value)}
                placeholder="Where are you visiting from?"
              />
            </label>

            <label>
              <span>Travel dates</span>
              <input
                type="text"
                value={form.travelDates}
                onChange={(event) => updateField('travelDates', event.target.value)}
                placeholder="Example: 12-20 August"
              />
            </label>

            <label>
              <span>Number of days</span>
              <input
                type="text"
                value={form.numberOfDays}
                onChange={(event) => updateField('numberOfDays', event.target.value)}
                placeholder="Example: 7 days"
              />
            </label>

            <label className="contact-form-wide">
              <span>Interests</span>
              <textarea
                rows="3"
                value={form.interests}
                onChange={(event) => updateField('interests', event.target.value)}
                placeholder="Wildlife, temples, tea country, beaches, local food..."
              />
            </label>

            <label className="contact-form-wide">
              <span>Message</span>
              <textarea
                rows="5"
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Tell Kithsiri what kind of journey you would love."
              />
            </label>

            <a className="button button-primary contact-submit-button" href={inquiryHref} target="_blank" rel="noopener noreferrer">
              Send Inquiry on WhatsApp
            </a>
          </form>
        </div>
      </section>

      <section className="contact-final-section section">
        <div className="container contact-final-panel reveal">
          <h2>Prefer to plan directly?</h2>
          <p>Send Kithsiri a WhatsApp message and start with a simple conversation.</p>
          <a className="button button-primary" href={contactDetails.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp Kithsiri
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
