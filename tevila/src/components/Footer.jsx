import React from "react";
import {Link} from "react-router-dom";
import "../styles/footer.css";

const Footer = () =>{

    return (
        <footer className="footer">
 <div className="footer-container">
        {/* <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/servicios">Servicios</Link>
        </nav> */}

      

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados.
        </p>
      </div>
        </footer>
    )
}
export default Footer