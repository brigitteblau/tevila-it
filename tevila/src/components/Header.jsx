import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container">
      <Link to="/" className="logo">  <h1 className="logo">Tevila It</h1></Link>
      

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/" className="link">Inicio</Link>
          <Link to="/about" className="link">Sobre Nosotros</Link>
          <Link to="/contact" className="link">Contacto</Link>
          <Link to="/services" className="link">Servicios</Link>
        </nav>

        <Link className="cta">Solicitar Servicio</Link>

        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? "x" : "☰"}
        </button>
      </div>
    </header>
  );
}
