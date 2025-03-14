import React from "react";
import {Link} from "react-router-dom";
import "../styles/about.css";



const About = () => {
  return (
    <div className="about-us-container">
        <div className="about-tit">
            <h1>Sobre Nosotros</h1>
        </div>
      <section className="section mission">
        <h2>Misión</h2>
        <p>
          Nuestro objetivo respecto a Tevila It es que más y más personas se animen a realizarle tevila a su vajilla.
          Hoy en día, esta actividad no es de lo más visto pero es esencial en nuestra religión.
          Deseamos hacer que este acto de pureza sea algo común y accesible para todos. Nuestro servicio está pensado para
          que cualquier persona, sin complicaciones, pueda cumplir con esta tradición de manera fácil y rápida.
        </p>
      </section>

      <section className="section origin">
        <h2>Cómo Nació el Proyecto</h2>
        <p>
          El proyecto de Tevila It nació de una necesidad que encontramos al conversar entre nosotros. Siempre nos
          preguntábamos cómo podríamos contribuir a la comunidad de una manera significativa. Un día, hablando sobre el
          diezmo, nos dimos cuenta de que, aunque queríamos darlo, no sabíamos bien cómo. Entonces, nos pareció una
          excelente idea usar nuestra pasión por la tradición y la espiritualidad para hacer algo que realmente marcara la
          diferencia. Así que, de una conversación sobre cómo contribuir, nació Tevila It: un proyecto dedicado a ayudar a
          la comunidad a kasherizar su vajilla de una forma sencilla, accesible y significativa. Queremos que este acto tan
          importante se convierta en algo común y que todos puedan hacerlo, sin complicaciones.
        </p>
      </section>

      <section className="section values">
        <h2>Valores</h2>
        <ul>
          <li>
            <strong>Accesibilidad:</strong> Queremos que cualquier persona pueda kasherizar su vajilla sin complicaciones,
            no importa dónde esté.
          </li>
          <li>
            <strong>Tradición:</strong> Estamos comprometidos con nuestra herencia, y cada servicio que brindamos está
            lleno de respeto por las costumbres.
          </li>
          <li>
            <strong>Cercanía:</strong> Nos importa ofrecer un trato cercano y personalizado, porque creemos que cada miembro
            de la comunidad merece atención y respeto.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
