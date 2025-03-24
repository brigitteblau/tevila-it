//pages/home
import { React } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import Review from "../components/review/Review";
import Form from "./Form"
import About from "./About"
import "../styles/home.css";
export default function Home() {
  const slowScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    let currentScroll = window.scrollY;
    const targetScroll = target.getBoundingClientRect().top + currentScroll;
    const step = (targetScroll - currentScroll) / 50; // Ajusta el número de pasos para mayor suavidad

    const scrollInterval = setInterval(() => {
      if (Math.abs(window.scrollY - targetScroll) < Math.abs(step)) {
        window.scrollTo(0, targetScroll);
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, step);
      }
    }, 10); // Ajusta el tiempo entre pasos para hacerlo más lento o rápido
  };

  return (
<>
<section id="home-section">
  <div className="hero-content">
    <div className="sta">
      <p className="hero-description">
      Nos encargamos de hacerle tevila a tu vajilla!
      </p>
      <div className="desp">
        <p>Tu vajilla vuelve purificada</p>
      <p>Solo traenos tu vajilla y nosotros nos encargamos.</p>
      </div>
     
      <div className="div-button">
        <button className="button b" onClick={() => slowScroll("do-section")}>
          Hagamos Tevila
        </button>
      </div>
    </div>
  </div>
</section>

<section id="faq-section">
  <Faq />
</section>

<section id="about-section">
  <About />
</section>

{/* <section id="services-section">
  <Review />
</section> */}

<section id="do-section">
  <Form />
</section>
</>
    )
  

  
  }
  