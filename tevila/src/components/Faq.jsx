import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import data from "../data/questions";
import "../styles/faqs.css";

function Faq() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(prevOpen => prevOpen === index ? null : index);
  };

  return (
    <div className="faq-container">
      {data.map((category, index) => (
        <div key={index} className="faq-category">
          <div 
            className="faq-header" 
            onClick={() => toggleCategory(index)}
            role="button"
            aria-expanded={openCategory === index}
            aria-controls={`faq-list-${index}`}
          >
            <div className="faq-image-container">
              <img 
                src={category.imagen} 
                alt={category.categoria} 
                className="faq-image" 
                loading="lazy"
              />
              <div className="faq-overlay">
                <h2 className="faq-category-title">{category.categoria}</h2>
              </div>
              <div className="arrow-over">
                <ChevronDown 
                  className={`faq-arrow ${openCategory === index ? "open" : ""}`}
                  size={30}
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
          
          {openCategory === index && (
            <div 
              id={`faq-list-${index}`} 
              className="faq-list"
              aria-labelledby={`category-${index}`}
            >
              {category.preguntas.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h3 className="faq-question">{faq.pregunta}</h3>
                  <p className="faq-answer">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;