import { useState } from "react";
import data from "../data/questions";
import "../styles/faqs.css";

function Faq() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="faq-container">
      {data.map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-category">
          <div className="faq-header" onClick={() => toggleCategory(categoryIndex)}>
            <div className="faq-image-container">
              <img src={category.imagen} alt={category.categoria} className="faq-image" />
              <div className="faq-overlay">
                <h2 className="faq-category-title">{category.categoria}</h2>
              </div>
              <div className="arrow-over">
                <img
                  src="/img/down.svg"
                  alt="arrow"
                  className={`faq-arrow ${openCategory === categoryIndex ? "open" : ""}`}
                />
              </div>
            </div>
          </div>
          
          {openCategory === categoryIndex && (
            <div className="faq-list">
              {category.preguntas.map((faq, questionIndex) => (
                <div key={questionIndex} className="faq-item">
                  <p className="faq-question">{faq.pregunta}</p>
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