import { trustStories } from '../../data/siteData.js';

function TrustSection() {
  const featuredStory = trustStories[0];
  const rollingStories = [...trustStories.slice(1), ...trustStories.slice(1)];

  return (
    <section className="trust-section section" id="traveler-stories">
      <div className="container">
        <div className="trust-heading reveal">
          <span className="eyebrow">Traveler stories</span>
          <h2>Trusted by travelers who want Sri Lanka to feel personal.</h2>
        </div>

        <div className="trust-stage reveal" style={{ '--reveal-delay': '140ms' }}>
          <article className="trust-feature">
            <div className="trust-quote-mark" aria-hidden="true">
              "
            </div>
            <p>{featuredStory.quote}</p>
            <div className="trust-author">
              <span className="trust-avatar">
                <img src={featuredStory.photo} alt="" loading="lazy" />
              </span>
              <div>
                <strong>{featuredStory.name}</strong>
                <span>
                  {featuredStory.country} / {featuredStory.trip}
                </span>
              </div>
            </div>
          </article>

          <div className="trust-country-strip" aria-label="Traveler countries">
            {trustStories.map((story) => (
              <span key={story.country}>{story.country}</span>
            ))}
          </div>

          <div className="trust-carousel" aria-label="More traveler testimonials">
            <div className="trust-track">
              {rollingStories.map((story, index) => (
                <article className="trust-mini-story" key={`${story.name}-${index}`}>
                  <div className="trust-mini-head">
                    <span className="trust-avatar">
                      <img src={story.photo} alt="" loading="lazy" />
                    </span>
                    <span>{story.country}</span>
                  </div>
                  <p>{story.quote}</p>
                  <strong>{story.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
