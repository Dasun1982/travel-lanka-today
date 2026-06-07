import { useState } from 'react';
import SectionHeader from '../shared/SectionHeader.jsx';
import { mapStops } from '../../data/premiumSections.js';

function SriLankaMap() {
  const [activeStop, setActiveStop] = useState(mapStops[0]);

  return (
    <section className="section map-section reveal" id="map">
      <div className="container">
        <SectionHeader
          eyebrow="Interactive map"
          title="A private route shaped around the island"
          text="Explore the kind of places Kithsiri connects into a calm multi-day journey: ancient kingdoms, tea country, wildlife parks, and the southern coast."
          align="center"
        />

        <div className="map-experience">
          <div className="map-board reveal">
            <div className="island-map" aria-label="Interactive Sri Lanka route map">
              <svg viewBox="0 0 320 560" role="img" aria-label="Stylised map of Sri Lanka">
                <path
                  d="M171 16C205 42 207 98 192 132C222 161 231 206 213 245C246 294 241 358 213 409C195 441 190 493 157 529C126 494 98 453 86 407C72 354 83 310 103 268C78 228 77 183 101 147C91 99 113 45 171 16Z"
                />
              </svg>

              {mapStops.map((stop) => (
                <button
                  className={`map-pin ${activeStop.name === stop.name ? 'is-active' : ''}`}
                  style={{ top: stop.position.top, left: stop.position.left }}
                  type="button"
                  key={stop.name}
                  aria-label={`Show ${stop.name} route details`}
                  onClick={() => setActiveStop(stop)}
                  onFocus={() => setActiveStop(stop)}
                >
                  <span>{stop.name}</span>
                </button>
              ))}
            </div>
          </div>

          <article className="map-story reveal" style={{ '--reveal-delay': '120ms' }}>
            <img src={activeStop.image} alt={`${activeStop.name} in Sri Lanka`} loading="lazy" />
            <div>
              <span>{activeStop.region}</span>
              <h3>{activeStop.name}</h3>
              <p>{activeStop.text}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SriLankaMap;
