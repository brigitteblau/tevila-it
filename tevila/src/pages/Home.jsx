import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";
export default function Home() {
    return(<>
 
 <div className="hero-container">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Tevila It</h1>
        
        {/* <div className="hero-tagline-container">
          <span className="hero-tagline">
            Pasamos a buscar tu vajilla
          </span>
          <span className="hero-tagline">
            Puestos para ayudar
          </span>
        </div> */}
        
        <p className="hero-description">
       Ayudamos a que hacer tevila sea mas satifactorio para vos!. Recogemos, llevamos y entregamos 
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
      <h2>THIS IS HOW I CAN HELP YOU</h2>
      <div>Image</div>
      <input type="text" placeholder="Input field" />
      <input type="text" placeholder="Input field" />
      <button>CTA</button>
    </section>
    <section>
      <h2>THESE ARE MY SERVICES</h2>
      <div className="services">
        <div>
          <div>Image</div>
          <p>Mini explanation on service</p>
          <button>CTA</button>
        </div>
        <div>
          <div>Image</div>
          <p>Mini explanation on service</p>
          <button>CTA</button>
        </div>
        <div>
          <div>Image</div>
          <p>Mini explanation on service</p>
          <button>CTA</button>
        </div>
      </div>
    </section>
    </>
    )
  

  
  }
  