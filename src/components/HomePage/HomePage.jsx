import React from 'react'; // Importa la librería React.
import R from '../../assets/R.png'; // Importa la imagen localizada en la carpeta assets.
import BackgroundImage from '../../assets/BackgroundImage.jpg'; // Importa la imagen de fondo.
import imag1 from '../../assets/imag1.jpg'; // Importa la primera imagen.
import imag2 from '../../assets/imag2.jpg'; // Importa la segunda imagen.
import imag3 from '../../assets/imag3.jpg'; // Importa la tercera imagen.

const Home = () => {
  return (
    // Componente principal de la sección "home" con un fondo negro y texto blanco.
    <section id="home" className="gap-16 bg-black text-white py-40 md:h-full md:mb-0"> 
      {/* Contenedor principal: define la estructura de la sección, con centramiento de elementos */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 relative"> 
        {/* Imagen de fondo difuminada */}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)',  filter: 'blur(8px)', height: '100%', width: '100%' }}></div>

        {/* Encabezado principal de la página */}
        <div className="z-10 mt-20 md:basis-3/5"> 
          {/* Ajustes de márgenes en pantallas medianas o mayores */}
          <div className="relative md:-mt-20"> 
            {/* Contenedor del título principal */}
            <div className="relative"> 
              {/* Texto del título principal. Puedes cambiar el contenido dentro del <h1> */}
              <h1 className="text-5xl font-bold">ATLAS GYM</h1> 
              {/* Puedes ajustar el tamaño del texto cambiando "text-5xl", y "font-bold" define el peso de la fuente */}
            </div>

            {/* Descripción debajo del título */}
            <p className="mt-2 text-sm"> 
              La revolución de Fitness, donde entrenan los Dioses
            </p> 
            {/* Cambia el texto dentro de <p>. "mt-8" añade margen superior, "text-sm" ajusta el tamaño del texto. */}
          </div>

          {/* Sección de acciones: botón y enlace */}
          <div className="mt-8 flex items-center gap-8"> 
            {/* Botón principal */}
            <button className="bg-primary-500 text-black px-4 py-2 rounded"> 
              Inicia Ahora
            </button> 
            {/* Cambia el texto del botón dentro de <button>. "bg-primary-500" es el color de fondo (definido en tu Tailwind config), "text-white" para texto blanco, "px-4 py-2" son los márgenes, "rounded" para bordes redondeados. */}

            {/* Enlace "Learn More" */}
            <a className="text-sm font-bold text-primary-500 underline hover:text-secondary-400" href="#contact"> 
              Más de nosotros
            </a> 
            {/* Cambia el texto dentro de <a>. "text-sm" es el tamaño del texto, "font-bold" define el grosor de la fuente, "text-primary-500" define el color. El hover cambia el color a "secondary-400". */}
          </div>
        </div>

        {/* Imagen del gráfico de la página de inicio */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-48 md:mt-10"> 
          <img src={R} alt="HomePage Graphic" className="w-64 h-64" /> 
          {/* La imagen se encuentra en "R". Puedes cambiar la ruta o el archivo. "w-64 h-64" define el ancho y alto de la imagen. */}
        </div>
      </div>

      {/* Sección de patrocinadores */}
      <div className="h-[150px] flex w-full bg-primary-100 py-10 my-10">
        <div className="mx-auto w-full h-full"> 
          <div className="flex w-full h-full items-center justify-between gap-4"> 
            {/* Patrocinador 1 */}
            <img
              src={imag1}  // Ruta de la primera imagen
              alt="Logo Patrocinador 1"
              className="w-[100%] h-[210%] object-cover opacity-50 filter blur-sm"
            />
            
            {/* Patrocinador 2 */}
            <img
              src={imag2}  // Ruta de la segunda imagen
              alt="Logo Patrocinador 2"
              className="w-full h-[210%] object-cover opacity-50 filter blur-sm"
            />

            {/* Patrocinador 3 */}
            <img
              src={imag3}  // Ruta de la tercera imagen
              alt="Logo Patrocinador 3"
              className="w-full h-[210%] object-cover opacity-50 filter blur-sm"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;

