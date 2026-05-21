import React from "react";
import { NAV_LINKS, NAV_LABELS, scrollTo } from "../data/developerData";

export default function Navbar({ scrolled, active }) {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button onClick={() => scrollTo("inicio")} className="nav-logo">WB</button>

      <div className="nav-links-desktop">
        {NAV_LINKS.map(id => (
          <button 
            key={id} 
            onClick={() => scrollTo(id)} 
            className={`nav-link-btn ${active === id ? "active" : ""}`}
          >
            {NAV_LABELS[id]}
          </button>
        ))}
      </div>

      <button onClick={() => scrollTo("contato")} className="nav-btn-hire">Contratar</button>
    </nav>
  );
}