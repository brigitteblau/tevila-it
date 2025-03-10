import { useState } from "react";
import data from "../data/questions";

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
                  className="faq-question"
                  onClick={() => toggleFaq(`${catIndex}-${index}`)}
                >
                  {faq.pregunta}
                </button>
                {openIndex === `${catIndex}-${index}` && (
                  <p className="faq-answer">{faq.respuesta}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
