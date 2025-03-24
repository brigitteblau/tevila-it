import React, { useState, useEffect } from "react";
import "../styles/about.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const values = [
    {
      title: "Accesibilidad",
      desc: "Queremos que cualquier persona pueda kasherizar su vajilla sin complicaciones, no importa dónde esté.",
      emoji: "🌐"
    },
    {
      title: "Tradición",
      desc: "Estamos comprometidos con nuestra herencia, y cada servicio que brindamos está lleno de respeto por las costumbres.",
      emoji: "🕍"
    },
    {
      title: "Cercanía",
      desc: "Nos importa ofrecer un trato cercano y personalizado, porque creemos que cada miembro de la comunidad merece atención y respeto.",
      emoji: "🤝"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className="about-us-container">
      {/* <div className="about-tit">
        <h1>Sobre Nosotros</h1>
      </div>
      <section className="section mission">
        <h2>Misión</h2>
        <p>
          Nuestro objetivo respecto a Tevila It es que más y más personas se animen a realizarle tevila a su vajilla.
          Hoy en día, esta actividad no es de lo más visto pero es esencial en nuestra religión.
          Deseamos hacer que este acto de pureza sea algo común y accesible para todos.
        </p>
      </section>

      <section className="section origin">
        <h2>Cómo Nació el Proyecto</h2>
        <p>
          El proyecto de Tevila It nació de una necesidad que encontramos al conversar entre nosotros.
          Siempre nos preguntábamos cómo podríamos contribuir a la comunidad de una manera significativa.
        </p>
      </section>
       */}
      <div className="container desktop-grid">
        {values.map((value, index) => (
          <div key={index} className="card">
            <div className="image">{value.emoji}</div>
            <div className="content">
              <h3 className="title">{value.title}</h3>
              <p className="desc">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mobile-carousel">
        <div className="carousel-inner">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`card ${index === currentSlide ? 'active' : ''}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <div className="image">{value.emoji}</div>
              <div className="content">
                <h3 className="title">{value.title}</h3>
                <p className="desc">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
