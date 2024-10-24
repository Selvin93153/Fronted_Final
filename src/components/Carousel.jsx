import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/assets/carousel/imagen1.jpg" alt="Promoción 1" />
        <p className="legend">¡INSCRÍBETE EN PREVENTA!</p>
      </div>
      <div>
        <img src="/assets/carousel/imagen2.jpg" alt="Promoción 2" />
        <p className="legend">UTZ ULEW MALL</p>
      </div>
      <div>
        <img src="/assets/carousel/imagen3.jpg" alt="Promoción 3" />
        <p className="legend">DESDE Q150/MES</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
