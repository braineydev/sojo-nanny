"use client";

import Image from "next/image";
import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" onKeyDown={(event) => event.key === "Escape" && closeMenu()}>
      <div className="header-main">
        <a className="brand-mark" href="#top" aria-label="Sojo Nanny home" onClick={closeMenu}>
          <Image src="/logo1.png" width={100} height={100} alt="Sojo Nanny Care" className="header-logo" priority />
        </a>
        <nav id="primary-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Our care</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#book" onClick={closeMenu}>Enquire</a>
        </nav>
        <a className="header-contact" href="#book" onClick={closeMenu}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <button
          className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
