import React, { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const slowScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    let currentScroll = window.scrollY;
    const targetScroll = target.getBoundingClientRect().top + currentScroll;
    const step = (targetScroll - currentScroll) / 50;
    const scrollInterval = setInterval(() => {
      if (Math.abs(window.scrollY - targetScroll) < Math.abs(step)) {
        window.scrollTo(0, targetScroll);
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, step);
      }
    }, 10);
  };

  return (
    <>
    <header className="header">
      <div className="header-container">
        <div className="ti">
          <img src="img/logo.svg" alt="Tevila It Logo" className="logo" />
        </div>

<div className="menu-div">
<button className="menu-button" onClick={toggleMenu}>⋮</button>

</div>

        {/* Botón de los tres puntos alineado a la derecha */}
      

        {/* Menú desplegable */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <button className="link" onClick={() => slowScroll("home-section")}>
            Inicio
          </button>
          <button className="link" onClick={() => slowScroll("about-section")}>
            Sobre Nosotros
          </button>
          <button className="link" onClick={() => slowScroll("contact-section")}>
            Contacto
          </button>
          <button className="link" onClick={() => slowScroll("services-section")}>
            Servicios
          </button>
        </nav>
      </div>
    </header>

<div className="header-curve"></div>
</>
  );
}
