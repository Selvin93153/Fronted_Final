import React from 'react';
import { Helmet } from 'react-helmet';
import SlideColorBox from './SlideColorBox'; // Ajusta la ruta según corresponda
import Header from '../Header'; // Ajusta la ruta según corresponda
import Footer from '../Footer'; // Ajusta la ruta según corresponda

const Servicios = () => {
  const title = "Servicios";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Various pricing options available with being a Member of Atlas Gym. Whether you're new to the gym or an experienced lifter we have a plan that fits your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main className="bg-black">
        <div className="h-[400px] w-full bg-black relative flex justify-center items-center  bg-cover bg-center">
          <img
            src="./assets/services.webp"
            alt="Servicios"
            className="object-cover w-full h-full absolute opacity-50"
            loading="lazy"
          />
          <div className="relative z-10 text-center text-2xl tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold text-white">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            {title}
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-wrap justify-center gap-2 py-10 max-w-[1800px]">
            <SlideColorBox idNum={1} title="Entrenos Personalizados" sub="Work with experienced trainers to achieve your goals" icon="dumbbell" img="./assets/trainer.webp" />
            <SlideColorBox idNum={2} title="Sauna" sub="Post-workout relaxation" icon="temperature-three-quarters" img="./assets/sauna.webp" />
            <SlideColorBox idNum={3} title="Juice Bar" sub="Come for a refreshing pre-workout drink or protein smoothie" icon="martini-glass" img="./assets/juice-bar.webp" />
            <SlideColorBox idNum={4} title="Clases en grupo" sub="Make some friends and get a killer workout in" icon="people-group" img="./assets/group.jpeg" />
            <SlideColorBox idNum={5} title="Area de niños" sub="Don't let life slow you down from your fitness goals" icon="child" img="./assets/daycare.jpeg" />
            <SlideColorBox idNum={6} title="Spa" sub="Post-workout relaxation" icon="spa" img="./assets/spa.jpeg" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Servicios;
