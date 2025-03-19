import React, { useState, useEffect } from "react";
import people from "./people";
import "./review.css";
import ReviewCard from "./Card";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // 1 card visible por defecto

  // Ajustar la cantidad de cards visibles según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // 1 card visible en pantallas pequeñas
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // 2 cards visibles en pantallas medianas
      } else {
        setVisibleCards(1); // 1 card visible en pantallas grandes (el cambio que pediste)
      }
    };

    handleResize(); // Revisión inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajustar el índice máximo cuando cambia visibleCards
  useEffect(() => {
    const maxIndex = Math.max(0, people.length - visibleCards);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  // Mover al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // Mover al siguiente slide
  const nextSlide = () => {
    const maxIndex = Math.max(0, people.length - visibleCards);
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  // Cambiar automáticamente cada 3 segundos (ajustado a 3 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Mover al siguiente slide cada 3 segundos
    }, 3000); // 3000ms = 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [currentIndex]); // Cada vez que cambie el índice, reinicia el intervalo

  return (
    <div className="carousel-container">
      {currentIndex > 0 && (
        <button
          className="carousel-button prev-button"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &lt;
        </button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / people.length * visibleCards}%)`,
            transition: "transform 0.5s ease", // Hacer que la transición sea suave
          }}
        >
          {people.map((person, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ width: `${100 / visibleCards}%` }} // Cambia el ancho del item según visibleCards
            >
              <ReviewCard {...person} />
            </div>
          ))}
        </div>
      </div>

      {currentIndex < people.length - visibleCards && (
        <button
          className="carousel-button next-button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
