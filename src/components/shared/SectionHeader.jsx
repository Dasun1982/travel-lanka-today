function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <div className="section-ornament" aria-hidden="true">
        <span />
        <span />
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionHeader;
