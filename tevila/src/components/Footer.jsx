import React from "react";
import {Link} from "react-router-dom";
import "../styles/footer.css";

const Footer = () =>{

    return (
        <footer className="footer">
 <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados.
        </p>
      </div>
        </footer>
    )
}
export default Footer