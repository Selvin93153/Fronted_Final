import React from 'react';
import ContactForm from './ContactForm';
import backgroundImage from '../../images/3.jpg';

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      {/* Sección del Encabezado */}
      <header
        className="w-full h-[400px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Superposición del degradado */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Texto del encabezado */}
        <h1 className="text-6xl font-extrabold text-yellow-500 tracking-wide relative z-10">
          CONTÁCTANOS
        </h1>
      </header>

      {/* Sección del Formulario */}
      <div className="w-full flex justify-center py-16 px-4">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          {/* Título principal del formulario */}
          <h2 className="text-3xl font-bold text-center mb-6">Envíanos un Mensaje</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
