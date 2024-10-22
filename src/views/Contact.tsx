import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      {/* Sección del Encabezado - fondo con imagen y degradado difuminado */}
      <header
        className="w-full h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('src/images/2.jpg')`, // Cambia esta ruta por la de tu imagen
        }}
      >
        {/* Superposición del degradado negro */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Texto del encabezado */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl font-extrabold text-yellow-500 tracking-wide z-10">
            CONTÁCTANOS
          </h1>
        </div>
      </header>

      {/* Sección del Formulario - layout centrado */}
      <div className="w-full flex justify-center py-16 bg-white">
        <div className="w-full max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-10 mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black flex flex-col justify-center items-center py-12">
        <h2 className="text-xl mb-4 text-white font-semibold">Síguenos</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
        </div>
        <div className="border-t border-gray-600 mt-4 pt-4 w-full text-center">
          <p className="text-sm text-gray-500">© 2024 AtlasGym. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
