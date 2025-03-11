import { React } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import All from "./All"
import "../styles/home.css";
export default function Home() {
    return(<>
 
 <div className="hero-container">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Tevila It</h1>
        
      
        <p className="hero-description">
       Ayudamos a que hacer tevila sea mas satifactorio para vos! Recogemos, llevamos y entregamos 
          tu vajilla con la máxima higiene y cuidado.
        </p>
        
        <div className="hero-button-container">
          <Link to="form" className="hero-primary-button"> Solicitar Servicio
       </Link>
         
          <Link to="mas" className="hero-secondary-button">
            Más Información
          </Link>
        </div>
      </div>
    </div>
    <section>
     <Faq/>
    </section>
<All/>
    </>
    )
  

  
  }
  