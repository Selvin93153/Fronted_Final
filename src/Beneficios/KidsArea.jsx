import React from 'react';
import nino1 from '@/Beneficios/imagenes/nino1.jpg';
import nino22 from '@/Beneficios/imagenes/nino22.jpg';
import ninos3 from '@/Beneficios/imagenes/ninos3.jpg';

import { QRCodeCanvas } from 'qrcode.react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [nino1, nino22, ninos3];

const KidsArea = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex flex-col justify-center items-center py-10">
            <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-6">
                    Bienvenidos al Área Infantil
                </h1>
                <p className="text-gray-700 text-center text-lg md:text-xl mb-8">
                    Un espacio seguro y divertido para tus niños mientras disfrutas de tu entrenamiento.
                </p>

                {/* Carrusel de imágenes */}
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="mb-8">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="w-full h-64 object-cover"
                                src={image}
                                alt={`Área Infantil ${index + 1}`}
                            />
                        </div>
                    ))}
                </Carousel>

                <div className="text-center">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Nuestro gimnasio ofrece un área dedicada para los niños donde pueden jugar, aprender e interactuar con otros niños bajo la supervisión de profesionales capacitados. Equipado con juegos, libros y actividades educativas, el área infantil garantiza que tus hijos se diviertan mientras tú te concentras en tu rutina de ejercicios.
                    </p>
                    <p className="text-blue-600 font-semibold text-lg mb-8">
                        ¡Este es un beneficio exclusivo para nuestros clientes premium!
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        Más Información
                    </button>
                </div>

                <div className="mt-8 flex justify-center">
                    <QRCodeCanvas value="https://www.tugimnasio.com/beneficios" size={128} />
                </div>
            </div>
        </div>
    );
};

export default KidsArea;
