const call = process.env.NEXT_PUBLIC_CALL_NUMBER ?? "+254113781473";

export function Hero() {
  return (
    <section className="hero-wrap" aria-labelledby="hero-title">
      <div className="hero-panel">
        <div className="hero-content">
          <p className="hero-kicker"><span /> SOJO NANNY · PROFESSIONAL CHILDCARE</p>
          <h1 id="hero-title">Care you can trust.<br /><em>Room to breathe.</em></h1>
          <p className="hero-description">Thoughtful day, overnight and travel care for families who want dependable support and more peace of mind.</p>
          <div className="hero-actions">
            <a href="#book" className="hero-primary">Find the care you need <span aria-hidden="true">↗</span></a>
            <a href={`tel:${call}`} className="hero-secondary">Call Sojo Nanny <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-proof"><span aria-hidden="true">✳</span> More than seven years caring for families</p>
        </div>
        <div className="hero-photo-credit">Gentle care, close to home <span>01 / 01</span></div>
      </div>
      <div className="hero-under"><span>CARE FOR YOUR FAMILY, WHEREVER LIFE TAKES YOU</span><a href="#services">Explore our services <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
