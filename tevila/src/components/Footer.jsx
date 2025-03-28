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
                <a href="https://wa.me/5491165958082" target="_blank" rel="noopener noreferrer">
                  +54 9 11 65 95 80 82
                </a>
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
