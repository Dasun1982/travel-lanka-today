function TourCard({ tour, index = 0 }) {
  const highlights = tour.highlights || [tour.bestFor].filter(Boolean);
  const routeText = tour.route || tour.destinations;

  return (
    <article className="tour-card reveal" style={{ '--reveal-delay': `${index * 100}ms` }}>
      <div className="tour-card__media">
        <img src={tour.image} alt={tour.title} loading="lazy" />
        {tour.tag ? <span>{tour.tag}</span> : null}
      </div>
      <div className="tour-card__body">
        <div className="tour-card__meta">
          <span>{tour.duration}</span>
        </div>
        <h3>{tour.title}</h3>
        <p>{routeText}</p>
        {highlights.length ? (
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        <a href="/tours" className="card-link">
          View This Tour
        </a>
      </div>
    </article>
  );
}

export default TourCard;
