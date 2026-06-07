import SectionHeader from '../shared/SectionHeader.jsx';
import TourCard from '../shared/TourCard.jsx';
import { tours } from '../../data/siteData.js';

function FeaturedTours() {
  return (
    <section className="section tours-section reveal" id="tours">
      <div className="container">
        <div className="section-split">
          <SectionHeader
            eyebrow="Featured tours"
            title="Ready-made routes, tailored around you"
            text="Start with one of our favorite itineraries, then adjust the pace, hotels, transport, and activities."
          />
          <a className="section-action" href="#planner">
            Customise a Tour
          </a>
        </div>

        <div className="tour-grid">
          {tours.map((tour, index) => (
            <TourCard tour={tour} index={index} key={tour.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
