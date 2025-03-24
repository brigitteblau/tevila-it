import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-section-title">Contacto</h3>
            <div className="footer-contact">
              <p>
                <i className="footer-icon email-icon"></i>
                <a href="mailto:tevilait20@gmail.com">tevilait20@gmail.com</a>
              </p>
              <p>
                <i className="footer-icon phone-icon"></i>
                <a href="tel:+591165958082">+549 1165 958 082</a>
              </p>
              <p>
                <i className="footer-icon location-icon"></i>
                Argentina, Buenos Aires
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;