import React from 'react';
import spa1 from '@/Beneficios/imagenes/spa1.jpg';
import spa2 from '@/Beneficios/imagenes/spa2.jpg';
import spa3 from '@/Beneficios/imagenes/spa3.jpeg';

import { QRCodeCanvas } from 'qrcode.react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [spa1, spa2, spa3];

const SpaArea = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 min-h-screen flex flex-col justify-center items-center py-10">
            <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-6">
                    Bienvenidos al Área de Spa
                </h1>
                <p className="text-gray-700 text-center text-lg md:text-xl mb-8">
                    Relájate y rejuvenece en nuestro exclusivo Spa, diseñado para ofrecerte la máxima comodidad y tranquilidad.
                </p>

                {/* Carrusel de imágenes */}
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="mb-8">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="w-full h-64 object-cover"
                                src={image}
                                alt={`Área de Spa ${index + 1}`}
                            />
                        </div>
                    ))}
                </Carousel>

                <div className="text-center">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Nuestro Spa ofrece una variedad de tratamientos y servicios diseñados para ayudarte a relajarte y rejuvenecer. Desde masajes terapéuticos hasta tratamientos faciales, nuestro equipo de profesionales está aquí para brindarte una experiencia de lujo.
                    </p>
                    <p className="text-purple-600 font-semibold text-lg mb-8">
                        ¡Este es un beneficio exclusivo para nuestros clientes premium!
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-700 hover:from-purple-600 hover:to-pink-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
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

export default SpaArea;
