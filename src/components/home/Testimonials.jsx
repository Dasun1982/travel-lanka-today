import SectionHeader from '../shared/SectionHeader.jsx';
import { testimonials } from '../../data/siteData.js';

function Testimonials() {
  return (
    <section className="section testimonials-section reveal" id="reviews">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Travellers who explored Sri Lanka with us"
          text="Guests come for the landmarks, then remember the people, timing, and care behind the journey."
          align="center"
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card reveal"
              style={{ '--reveal-delay': `${index * 100}ms` }}
              key={testimonial.name}
            >
              <p>"{testimonial.quote}"</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.trip}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
