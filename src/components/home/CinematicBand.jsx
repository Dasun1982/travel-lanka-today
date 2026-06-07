import { assets } from '../../data/siteData.js';

const bands = {
  highlands: {
    image: assets.train,
    label: 'Highland light',
    title: 'Slow rail, tea estates, and mountain roads timed around the mist.'
  },
  coast: {
    image: assets.jungleBeach,
    label: 'Forest to ocean',
    title: 'A private route that moves from jungle shade to southern coast calm.'
  }
};

function CinematicBand({ variant = 'highlands' }) {
  const band = bands[variant] || bands.highlands;

  return (
    <section className="cinematic-band reveal" aria-label={band.label}>
      <div className="cinematic-band__image">
        <img src={band.image} alt="" loading="lazy" />
      </div>
      <div className="container cinematic-band__copy">
        <span>{band.label}</span>
        <h2>{band.title}</h2>
      </div>
    </section>
  );
}

export default CinematicBand;
