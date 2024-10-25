import React from 'react';
import R from '../../images/R.png';
import BackgroundImage from '../../images/BackgroundImage.jpg';
import imag1 from '../../images/imag1.jpg';
import imag2 from '../../images/imag2.jpg';
import imag3 from '../../images/imag3.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="gap-16 bg-black text-white py-40 md:h-full md:mb-0"
    >
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.2)",
            filter: "blur(8px)",
            height: "100%",
            width: "100%"
          }}
        ></div>

        <div className="z-10 mt-20 md:basis-3/5">
          <div className="relative md:-mt-20">
            <h1 className="text-5xl font-bold">ATLAS GYM</h1>
            <p className="mt-2 text-sm">
              La revolución de Fitness, donde entrenan los Dioses
            </p>
          </div>

          <div className="mt-8 flex items-center gap-8">
          <Link to="/Planes">
          <button className="bg-primary-500 text-black px-4 py-2 rounded">Inicia Ahora</button> 
          </Link>
          <Link to="/about" className="text-sm font-bold text-primary-500 underline hover:text-secondary-400">
        Más Sobre Nosotros
      </Link>
          </div>
        </div>

        <div className="flex basis-3/5 justify-center md:z-10 md:ml-48 md:mt-10">
          <img src={R} alt="HomePage Graphic" className="w-64 h-64" />
        </div>
      </div>

      <div className="h-[150px] flex w-full bg-primary-100 py-10 my-10">
        <div className="mx-auto w-full h-full">
          <div className="flex w-full h-full items-center justify-between gap-4">
            <img
              src={imag1}
              alt="Logo Patrocinador 1"
              className="w-[100%] h-[210%] object-cover opacity-50 filter blur-sm"
            />
            <img
              src={imag2}
              alt="Logo Patrocinador 2"
              className="w-full h-[210%] object-cover opacity-50 filter blur-sm"
            />
            <img
              src={imag3}
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
