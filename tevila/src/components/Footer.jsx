import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <hr /> 
         {/* <{div className="footer-communities">
         
              <Link to="https://www.jabad.org" target="_blank" rel="noopener noreferrer">
                <img src="logo-jabad.png" alt="Jabad" className="community-logo" />
              </Link>
              <Link to="https://www.jabad.org" target="_blank" rel="noopener noreferrer">
                <img src="logo-aieka.png" alt="Aieka" className="community-logo" />
              </Link>
              <Link to="https://www.menora.org" target="_blank" rel="noopener noreferrer">
                <img src="logo-menora.png" alt="Menora" className="community-logo" />
              </Link> 
          </div>  */}
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-contact">
              <p>
                <i className="footer-icon email-icon"></i>
                <a href="mailto:tevilait20@gmail.com">tevilait20@gmail.com</a>
              </p>
              <p>
                <i className="footer-icon phone-icon"></i>
                <a href="tel:+54xxxxx">+54xxxxxxxx</a>
              </p>
            </div>
          </div>
          
  
        </div>
  
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados. 
          </p>
          {/* <p className="footer-text">
                <i className="footer-icon location-icon"></i>
                Argentina, Buenos Aires
              </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;