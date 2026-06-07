import SectionHeader from '../shared/SectionHeader.jsx';
import { bookingSteps } from '../../data/siteData.js';

function BookingProcess() {
  return (
    <section className="section booking-section reveal">
      <div className="container">
        <SectionHeader
          eyebrow="Plan your journey"
          title="A simple private planning process"
          text="Share what matters most, and we will shape a Sri Lanka journey that feels natural, personal, and beautifully paced."
          align="center"
        />

        <div className="booking-steps">
          {bookingSteps.map((step, index) => (
            <article className="booking-card reveal" style={{ '--reveal-delay': `${index * 90}ms` }} key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookingProcess;
