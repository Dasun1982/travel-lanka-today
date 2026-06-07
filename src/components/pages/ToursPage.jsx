import { useEffect, useMemo, useState } from 'react';
import { tours } from '../../data/siteData.js';

const whatsappBase = 'https://wa.me/94771234567';

function getTourMessage(tourTitle) {
  return `${whatsappBase}?text=${encodeURIComponent(
    `Hello Kithsiri, I would like to ask about the ${tourTitle}.`
  )}`;
}

const pageMessage = `${whatsappBase}?text=${encodeURIComponent(
  'Hello Kithsiri, I would like help choosing a private Sri Lanka tour.'
)}`;

const tourDetails = {
  '5 Day Highlights Tour': {
    intro:
      'A compact private route for travelers who want a calm introduction to Sri Lanka with culture, tea country, mountain scenery, and the southern coast.',
    days: [
      {
        day: 'Day 1',
        title: 'Sigiriya and the Cultural Triangle',
        text: 'Travel toward Sigiriya with easy local stops, then settle into the Cultural Triangle for ancient landscapes and quiet evening views.'
      },
      {
        day: 'Day 2',
        title: 'Sigiriya to Kandy',
        text: 'Visit Sigiriya or nearby heritage sites before continuing to Kandy through village roads, spice gardens, and temple country.'
      },
      {
        day: 'Day 3',
        title: 'Kandy to Ella',
        text: 'Move into the hill country with tea estate views, waterfalls, mountain roads, and time for the scenic rail experience when available.'
      },
      {
        day: 'Day 4',
        title: 'Ella to Galle',
        text: 'Leave the highlands at an unhurried pace and travel south toward the coast, with flexible stops for viewpoints, local food, and beaches.'
      },
      {
        day: 'Day 5',
        title: 'Galle and departure',
        text: 'Enjoy Galle Fort, coastal roads, and a relaxed final transfer shaped around your departure time or next stay.'
      }
    ],
    includes: [
      'Private English-speaking driver and guide with Kithsiri',
      'Private air-conditioned vehicle for the route',
      'Flexible daily timing and local stop suggestions',
      'Pickup and drop-off coordination',
      'Fuel, parking, and highway support for the guided route'
    ],
    notIncluded: [
      'Hotels and accommodation',
      'Entrance tickets and activity fees',
      'Meals, drinks, and personal expenses',
      'Train tickets or safari jeeps if added',
      'Travel insurance'
    ],
    price:
      'Private tour price is shared on WhatsApp after your dates, group size, pickup point, and hotel style.'
  },
  '7 Day Nature & Culture Tour': {
    intro:
      'A balanced private journey through ancient places, Kandy, tea country, Ella, and Yala, designed for travelers who want nature and culture without rushing.',
    days: [
      {
        day: 'Day 1',
        title: 'Arrival and Sigiriya',
        text: 'Begin the private route toward Sigiriya with relaxed stops and time to settle into the Cultural Triangle.'
      },
      {
        day: 'Day 2',
        title: 'Ancient kingdoms and village roads',
        text: 'Explore Sigiriya, Dambulla, or nearby heritage places, with optional local village experiences depending on your pace.'
      },
      {
        day: 'Day 3',
        title: 'Sigiriya to Kandy',
        text: 'Travel to Kandy with cultural stops, temple visits, craft routes, and local food recommendations along the way.'
      },
      {
        day: 'Day 4',
        title: 'Kandy to Nuwara Eliya',
        text: 'Enter tea country through green mountain roads, tea estates, waterfalls, and cool highland scenery.'
      },
      {
        day: 'Day 5',
        title: 'Nuwara Eliya to Ella',
        text: 'Continue through the highlands with scenic rail options, viewpoints, and gentle time in Ella.'
      },
      {
        day: 'Day 6',
        title: 'Ella to Yala',
        text: 'Descend from tea country toward wildlife landscapes, with time to prepare for a safari experience.'
      },
      {
        day: 'Day 7',
        title: 'Yala safari and onward travel',
        text: 'Take a private safari jeep experience if desired, then continue to the coast, airport route, or your next destination.'
      }
    ],
    includes: [
      'Private English-speaking driver and guide with Kithsiri',
      'Private air-conditioned vehicle throughout the route',
      'Flexible heritage, tea country, and wildlife timing',
      'Route advice for safari timing and local experiences',
      'Pickup and drop-off coordination'
    ],
    notIncluded: [
      'Hotels and accommodation',
      'National park entrance fees and safari jeep costs',
      'Temple, heritage, and activity tickets',
      'Meals, drinks, and personal expenses',
      'Travel insurance'
    ],
    price:
      'Private tour price is prepared after confirming your dates, group size, pickup and drop-off points, and safari preferences.'
  },
  '10 Day Classic Round Tour': {
    intro:
      'A complete private round tour connecting ancient cities, Sigiriya, Kandy, Ella, Yala, Mirissa, and Galle with space for culture, wildlife, coast, and rest.',
    days: [
      {
        day: 'Day 1',
        title: 'Arrival and Anuradhapura',
        text: 'Start with a calm transfer toward Anuradhapura or the Cultural Triangle, with stops based on arrival time.'
      },
      {
        day: 'Day 2',
        title: 'Anuradhapura heritage',
        text: 'Explore sacred ancient sites, old reservoirs, Buddhist heritage, and quiet local roads with Kithsiri.'
      },
      {
        day: 'Day 3',
        title: 'Anuradhapura to Sigiriya',
        text: 'Travel toward Sigiriya with time for rock fortress views, cave temples, or village experiences.'
      },
      {
        day: 'Day 4',
        title: 'Sigiriya to Kandy',
        text: 'Continue to Kandy through cultural roads, spice country, temple stops, and scenic hill approaches.'
      },
      {
        day: 'Day 5',
        title: 'Kandy and tea country',
        text: 'Spend time around Kandy before moving into tea country, with estates, waterfalls, and mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Ella highlands',
        text: 'Enjoy Ella at a relaxed pace with viewpoints, rail scenery, forest walks, or quiet cafe time.'
      },
      {
        day: 'Day 7',
        title: 'Ella to Yala',
        text: 'Travel down from the mountains to the dry-zone wildlife landscapes near Yala.'
      },
      {
        day: 'Day 8',
        title: 'Yala to Mirissa',
        text: 'Choose a morning safari if desired, then continue to the southern coast for Mirissa and ocean roads.'
      },
      {
        day: 'Day 9',
        title: 'Mirissa to Galle',
        text: 'Enjoy coastal towns, beaches, optional whale watching, and the heritage streets of Galle Fort.'
      },
      {
        day: 'Day 10',
        title: 'Galle and departure route',
        text: 'Finish with a flexible coastal transfer toward Colombo, the airport, or your next Sri Lanka stay.'
      }
    ],
    includes: [
      'Private English-speaking driver and guide with Kithsiri',
      'Private air-conditioned vehicle for the full round route',
      'Flexible timing for heritage sites, tea country, safari, and coast',
      'Daily route guidance and local recommendations',
      'Pickup and drop-off coordination'
    ],
    notIncluded: [
      'Hotels and accommodation',
      'Entrance tickets, activity fees, and safari jeep costs',
      'Train tickets or whale watching boat fees if selected',
      'Meals, drinks, and personal expenses',
      'Travel insurance'
    ],
    price:
      'Private tour price is quoted individually after your travel dates, group size, route pace, and accommodation style are confirmed.'
  }
};

function getFallbackDetails(tour) {
  return {
    intro:
      'This private tour is shaped directly with Kithsiri around your travel dates, interests, pace, and preferred comfort level.',
    days: [
      {
        day: 'Custom route',
        title: tour.destinations,
        text: 'Kithsiri will prepare a day-by-day route after learning your dates, arrival point, interests, and preferred travel rhythm.'
      }
    ],
    includes: [
      'Private English-speaking driver and guide with Kithsiri',
      'Private vehicle and route planning support',
      'Flexible timing and local recommendations'
    ],
    notIncluded: [
      'Hotels and accommodation',
      'Entrance tickets and activity fees',
      'Meals, drinks, and personal expenses'
    ],
    price:
      'Private tour price is shared on WhatsApp after your route, dates, and group size are confirmed.'
  };
}

function ToursPage() {
  const [selectedTour, setSelectedTour] = useState(null);
  const selectedDetails = useMemo(() => {
    if (!selectedTour) {
      return null;
    }

    return tourDetails[selectedTour.title] || getFallbackDetails(selectedTour);
  }, [selectedTour]);

  useEffect(() => {
    if (!selectedTour) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedTour(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTour]);

  return (
    <main className="tours-page">
      <section className="tours-hero section">
        <div className="container tours-hero-inner reveal">
          <span className="eyebrow">Our Tours</span>
          <h1>Choose Your Sri Lanka Journey</h1>
          <p className="tours-page-subtitle">
            Private multi-day journeys through wildlife, culture, tea country, ancient cities, and the southern coast
            with Kithsiri.
          </p>
          <p>Every route can be customized around your travel dates, interests, pace, and comfort.</p>
          <div className="tours-hero-actions">
            <a className="button button-primary" href={pageMessage} target="_blank" rel="noreferrer">
              WhatsApp Kithsiri
            </a>
            <a className="button button-secondary" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className="tours-list-section section" aria-label="Private Sri Lanka tours">
        <div className="container tours-list">
          {tours.map((tour, index) => (
            <article
              className="tour-card reveal"
              key={tour.title}
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <figure className="tour-card-media">
                <img src={tour.image} alt={`${tour.title} in Sri Lanka`} loading="lazy" />
              </figure>
              <div className="tour-card-body">
                <span className="tour-duration">{tour.duration}</span>
                <h2>{tour.title}</h2>
                <dl>
                  <div>
                    <dt>Destinations</dt>
                    <dd>{tour.destinations}</dd>
                  </div>
                  <div>
                    <dt>Best for</dt>
                    <dd>{tour.bestFor}</dd>
                  </div>
                </dl>
                <div className="tour-card-actions">
                  <button className="tour-about-button" type="button" onClick={() => setSelectedTour(tour)}>
                    About this tour
                  </button>
                  <a className="tour-inquiry" href={getTourMessage(tour.title)} target="_blank" rel="noreferrer">
                    WhatsApp inquiry
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tours-help-section section">
        <div className="container tours-help-panel reveal">
          <h2>Need help choosing the right route?</h2>
          <p>Send your dates and interests to Kithsiri and he will suggest the best journey.</p>
          <a className="button button-primary" href={pageMessage} target="_blank" rel="noreferrer">
            Ask on WhatsApp
          </a>
        </div>
      </section>

      {selectedTour && selectedDetails ? (
        <div
          className="tour-modal-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTour(null);
            }
          }}
        >
          <article className="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-modal-title">
            <button className="tour-modal-close" type="button" aria-label="Close tour details" onClick={() => setSelectedTour(null)}>
              x
            </button>
            <div className="tour-modal-scroll">
              <span className="tour-modal-kicker">{selectedTour.duration}</span>
              <h2 id="tour-modal-title">{selectedTour.title}</h2>
              <p className="tour-modal-intro">{selectedDetails.intro}</p>

              <section className="tour-modal-section">
                <h3>Day-by-day itinerary</h3>
                <div className="tour-itinerary">
                  {selectedDetails.days.map((item) => (
                    <div className="tour-itinerary-day" key={`${item.day}-${item.title}`}>
                      <span>{item.day}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="tour-modal-columns">
                <section className="tour-modal-section">
                  <h3>Tour Includes</h3>
                  <ul>
                    {selectedDetails.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="tour-modal-section">
                  <h3>Not Included</h3>
                  <ul>
                    {selectedDetails.notIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="tour-modal-price">
                <h3>Private Tour Price</h3>
                <p>{selectedDetails.price}</p>
              </section>

              <a className="tour-modal-whatsapp" href={getTourMessage(selectedTour.title)} target="_blank" rel="noreferrer">
                WhatsApp inquiry
              </a>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
}

export default ToursPage;
