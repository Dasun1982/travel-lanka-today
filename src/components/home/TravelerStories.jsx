import SectionHeader from '../shared/SectionHeader.jsx';
import { travelerStories } from '../../data/premiumSections.js';

function TravelerStories() {
  const sliderStories = [...travelerStories, ...travelerStories];

  return (
    <section className="section traveler-section reveal" id="stories">
      <div className="container">
        <SectionHeader
          eyebrow="Traveler stories"
          title="Private journeys remembered for the quiet details"
          text="Guests often come for Sigiriya, safari, tea country, and coast. They remember the timing, warmth, safety, and small local moments in between."
          align="center"
        />

        <div className="story-slider reveal" aria-label="Traveler story slider">
          <div className="story-track">
            {sliderStories.map((story, index) => (
              <article className="story-quote" aria-hidden={index >= travelerStories.length} key={`${story.name}-${index}`}>
                <p>{story.quote}</p>
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.trip}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelerStories;
