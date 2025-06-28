import React, { useState, useEffect } from "react";

function Experiencias() {
  const titulos = ["Mis experiencias", "Historias de vida", "Momentos clave"];
  const experiencias = [
    "Desde que descubrí la tecnología, supe que era mi camino. Cada proyecto que hago me ayuda a aprender más.",
    "He pasado por retos, pero con esfuerzo sigo adelante. Amo la programación y quiero seguir creciendo.",
  ];

  const [tituloIndex, setTituloIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTituloIndex((prev) => (prev + 1) % titulos.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="experiencias-container">
      {experiencias.map((texto, index) => (
        <div key={index} className="experiencia-card">
          <h3 className="experiencia-titulo">{titulos[tituloIndex]}</h3>
          <p className="experiencia-texto">"{texto}"</p>
        </div>
      ))}
    </div>
  );
}

export default Experiencias;


