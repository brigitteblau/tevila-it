import { React } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import Review from "../components/review/Review";
import Form from "./Form"
import About from "./About"
import "../styles/home.css";
export default function Home() {
    return(<>
 
 <div className="hero-content">    
  <div className="sta">
  <p className="hero-description">
    Hacemos que la tevila sea más satisfactoria para vos con la máxima higiene y cuidado.
  </p>
  <p className="desp">Nos encargamos de recoger, llevar y entregar tu vajilla</p>
  <div className="div-button">
    <button
      className="button"
      onClick={() => document.getElementById("faq-section").scrollIntoView({ behavior: "smooth" })}
    >
      Preguntas Frecuentes
    </button>
    <button
      className="button"
      onClick={() => document.getElementById("do-section").scrollIntoView({ behavior: "smooth" })}
    >
      Pedí tu servicio
    </button>

  </div>
    </div>    


</div>
<div className="scroll-arrow">
  <img src="img/down.svg" alt="flecha" className="flecha" />
  </div>
<section>
<Review/>
</section>
<section id="faq-section">
  <Faq />
</section>
<section id="do-section">
<Form />
</section>
<About/>
    </>
    )
  

  
  }
  