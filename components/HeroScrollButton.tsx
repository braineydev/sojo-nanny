"use client";

import { useEffect, useState } from "react";

export function HeroScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const update = () => setIsAtTop(window.scrollY <= 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      className={`hero-scroll${isAtTop ? "" : " is-hidden"}`}
      href="#services"
      aria-label="Explore our three care services"
      tabIndex={isAtTop ? 0 : -1}
      aria-hidden={!isAtTop}
    >
      <span aria-hidden="true">{"\u2193"}</span>
    </a>
  );
}
