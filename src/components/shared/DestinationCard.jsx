function DestinationCard({ destination, index = 0 }) {
  return (
    <article className="destination-card reveal" style={{ '--reveal-delay': `${index * 80}ms` }}>
      <img src={destination.image} alt={`${destination.name} in Sri Lanka`} loading="lazy" />
      <div className="destination-card__content">
        <span>{destination.region}</span>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
      </div>
    </article>
  );
}

export default DestinationCard;
