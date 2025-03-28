import React, { useState, useEffect } from "react";
import "../styles/about.css";
import { IconAccesibilidad, IconTradicion, IconCercania } from  "../data/icons"


const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const values = [
    {
      title: "Accesibilidad",
      desc: "Queremos que cualquier persona pueda kasherizar su vajilla sin complicaciones, no importa dónde esté.",
      emoji: <IconAccesibilidad />,  
    },
    {
      title: "Tradición",
      desc: "Estamos comprometidos con nuestra herencia, y cada servicio que brindamos está lleno de respeto por las costumbres.",
      emoji: <IconTradicion />,  
    },
    {
      title: "Cercanía",
      desc: "Nos importa ofrecer un trato cercano y personalizado, porque creemos que cada miembro de la comunidad merece atención y respeto.",
       emoji: <IconCercania/>,  
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
      <div className="container desktop-grid">
        {values.map((value, index) => (
          <div key={index} className="card">
            <div className="image">
              {typeof value.emoji === 'string' ? (
                <img src={value.emoji} alt={value.title} />
              ) : (
                value.emoji
              )}
            </div>
            <div className="content">
              <div className="div-ti">
              <h3 className="title">{value.title}</h3>
              </div>
             
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
              <div className="image">
              
                {typeof value.emoji === 'string' ? (
                  <img src={value.emoji} alt={value.title} className="image-svg"/>
                ) : (
                  value.emoji
                )}
              </div>
              <div className="content">
                <div className="div-ti">
                <h3 className="title">{value.title}</h3>
                </div>
         
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