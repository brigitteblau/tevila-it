import { useState } from "react";
import data from "../data/questions";
import "../styles/faq.css"
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {data.map((category, catIndex) => (
        <div key={catIndex} className="faq-category">
          <h2>{category.categoria}</h2>
          <div className="faq-list">
            {category.preguntas.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === `${catIndex}-${index}` ? "open" : ""}`}
                  onClick={() => toggleFaq(`${catIndex}-${index}`)}
                >
                  {faq.pregunta}
                  <img
                    src="/img/down.svg"
                    alt="arrow"
                  />
                </button>
                <p
                  className={`faq-answer ${openIndex === `${catIndex}-${index}` ? "open" : ""}`}
                >
                  {faq.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
