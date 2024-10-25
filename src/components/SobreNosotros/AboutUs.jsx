import React from 'react';
import missionImage from '../../images/2.jpg'; // Asegúrate de tener estas imágenes en tu carpeta de imágenes
import visionImage from '../../images/3.jpg';
import historyImage from '../../images/5.jpg';

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-16 px-4" id="about">
      {/* Título principal */}
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-12">Acerca de Nosotros</h1>

      {/* Sección de Misión */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg mb-12 overflow-hidden max-w-5xl w-full">
        <img src={missionImage} alt="Misión" className="w-full md:w-1/2 h-64 object-cover" />
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600">
            Nuestra misión es fomentar el bienestar físico y mental de nuestros miembros a través de un
            entrenamiento de calidad, un ambiente motivador y servicios personalizados que promuevan un
            estilo de vida saludable para todos.
          </p>
        </div>
      </div>

      {/* Sección de Visión */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg mb-12 overflow-hidden max-w-5xl w-full">
        <img src={visionImage} alt="Visión" className="w-full md:w-1/2 h-64 object-cover md:order-2" />
        <div className="p-8 w-full md:w-1/2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
          <p className="text-gray-600">
            Ser el gimnasio líder en el país, reconocido por la calidad de nuestras instalaciones,
            la profesionalidad de nuestro equipo y el impacto positivo en la vida de nuestros
            miembros, inspirando a más personas a adoptar un estilo de vida activo.
          </p>
        </div>
      </div>

      {/* Sección de Historia */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        <img src={historyImage} alt="Historia del Gimnasio" className="w-full h-64 object-cover" />
        <div className="p-8 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-gray-600">
            Fundado en 2010, AtlasGym comenzó como un pequeño centro de entrenamiento en la ciudad de
            Quetzaltenango. Desde entonces, hemos crecido para convertirnos en un gimnasio de referencia
            en la región, ofreciendo una amplia gama de servicios de fitness y entrenamiento personalizado
            para satisfacer las necesidades de todos nuestros miembros. Nuestro compromiso con la
            excelencia y la comunidad ha sido el motor que impulsa nuestro crecimiento constante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
