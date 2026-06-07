import SectionHeader from '../shared/SectionHeader.jsx';
import DestinationCard from '../shared/DestinationCard.jsx';
import { destinations } from '../../data/siteData.js';

function PopularDestinations() {
  return (
    <section className="section destinations-section reveal" id="destinations">
      <div className="container">
        <SectionHeader
          eyebrow="Popular destinations"
          title="Sri Lanka journeys with color, history, and coast"
          text="Choose from heritage cities, hill country rail routes, national parks, and relaxed beach towns."
          align="center"
        />
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <DestinationCard destination={destination} index={index} key={destination.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
