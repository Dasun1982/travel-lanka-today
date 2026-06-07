import { useMemo, useState } from 'react';

const dayOptions = ['5', '7', '10', '14+'];
const interestOptions = ['Wildlife', 'Culture', 'Nature', 'Adventure', 'Beach'];
const styleOptions = ['Comfort', 'Luxury', 'Flexible'];

function JourneyBuilder() {
  const [days, setDays] = useState('10');
  const [interests, setInterests] = useState(['Wildlife', 'Culture', 'Nature']);
  const [style, setStyle] = useState('Luxury');

  const whatsappText = useMemo(() => {
    const message = [
      'Hello Kithsiri, I would like to plan a private Sri Lanka journey.',
      `Days: ${days}`,
      `Interests: ${interests.join(', ') || 'Open to your recommendation'}`,
      `Travel style: ${style}`,
      'Please help me design a custom route.'
    ].join('\n');

    return encodeURIComponent(message);
  }, [days, interests, style]);

  const toggleInterest = (interest) => {
    setInterests((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]
    );
  };

  return (
    <section className="journey-builder-section section" id="journey-builder">
      <div className="container journey-builder-shell">
        <div className="builder-copy reveal">
          <span className="eyebrow">Custom journey builder</span>
          <h2>Shape the first outline, then plan directly with Kithsiri.</h2>
          <p>
            Choose the pace, interests, and travel style. Your WhatsApp message is prepared instantly, so the journey
            begins as a direct conversation with the person guiding you.
          </p>

          <div className="builder-route-note" aria-label="Suggested route mood">
            <span>Suggested flow</span>
            <strong>Ancient kingdoms to tea country to wildlife to coast</strong>
          </div>
        </div>

        <div className="builder-panel reveal" style={{ '--reveal-delay': '140ms' }}>
          <div className="builder-field">
            <span>Days</span>
            <div className="builder-options" role="group" aria-label="Select number of travel days">
              {dayOptions.map((option) => (
                <button
                  type="button"
                  className={days === option ? 'is-active' : ''}
                  key={option}
                  onClick={() => setDays(option)}
                  aria-pressed={days === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="builder-field">
            <span>Interests</span>
            <div className="builder-options builder-options--wrap" role="group" aria-label="Select interests">
              {interestOptions.map((option) => (
                <button
                  type="button"
                  className={interests.includes(option) ? 'is-active' : ''}
                  key={option}
                  onClick={() => toggleInterest(option)}
                  aria-pressed={interests.includes(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="builder-field">
            <span>Travel style</span>
            <div className="builder-options" role="group" aria-label="Select travel style">
              {styleOptions.map((option) => (
                <button
                  type="button"
                  className={style === option ? 'is-active' : ''}
                  key={option}
                  onClick={() => setStyle(option)}
                  aria-pressed={style === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="builder-summary">
            <span>Your inquiry</span>
            <p>
              {days} days, {interests.length ? interests.join(', ') : 'Kithsiri recommended'}, {style.toLowerCase()}{' '}
              pace.
            </p>
          </div>

          <a
            className="button button-primary builder-whatsapp"
            href={`https://wa.me/94771234567?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp This Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default JourneyBuilder;
