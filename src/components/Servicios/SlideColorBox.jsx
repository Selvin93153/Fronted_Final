import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faTemperatureThreeQuarters, faMartiniGlass, faPeopleGroup, faChild, faSpa } from '@fortawesome/free-solid-svg-icons';

const SlideColorBox = ({ idNum, title, sub, icon, img }) => {
  const handleMouseEnter = () => {
    document
      .getElementById(`service-${idNum}-box`)
      .classList.remove("top-[170px]", "lg:top-[340px]", "bg-zinc-800");
    document
      .getElementById(`service-${idNum}-title`)
      .classList.remove("-top-10");
    document
      .getElementById(`service-${idNum}-icon`)
      .classList.remove("-top-8", "text-white", "child:bg-zinc-800");

    document
      .getElementById(`service-${idNum}-box`)
      .classList.add("top-[0px]", "bg-red-600/90");
    document
      .getElementById(`service-${idNum}-title`)
      .classList.add("top-10");
    document
      .getElementById(`service-${idNum}-icon`)
      .classList.add("top-6", "text-red-600", "child:bg-white");
  };

  const handleMouseLeave = () => {
    document
      .getElementById(`service-${idNum}-box`)
      .classList.remove("top-[0px]", "bg-red-600/90");
    document
      .getElementById(`service-${idNum}-title`)
      .classList.remove("top-10");
    document
      .getElementById(`service-${idNum}-icon`)
      .classList.remove("top-6", "text-red-600", "child:bg-white");

    document
      .getElementById(`service-${idNum}-box`)
      .classList.add("top-[170px]", "lg:top-[340px]", "bg-zinc-800");
    document
      .getElementById(`service-${idNum}-title`)
      .classList.add("-top-10");
    document
      .getElementById(`service-${idNum}-icon`)
      .classList.add("-top-8", "text-white", "child:bg-zinc-800");
  };

  const icons = {
    dumbbell: faDumbbell,
    'temperature-three-quarters': faTemperatureThreeQuarters,
    'martini-glass': faMartiniGlass,
    'people-group': faPeopleGroup,
    child: faChild,
    spa: faSpa,
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[300px] lg:w-[450px] bg-cover bg-no-repeat bg-center overflow-hidden h-[200px] lg:h-[400px] transition-all duration-300"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div
        id={`service-${idNum}-box`}
        className="bg-zinc-800 z-30 transition-all duration-300 top-[170px] lg:top-[340px] h-[400px] relative flex flex-col items-center px-10"
      >
        <div
          id={`service-${idNum}-icon`}
          className="w-full flex justify-center relative -top-8 text-white transition-all duration-300 child:bg-zinc-800"
        >
          <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] relative rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={icons[icon]} className="text-xl lg:text-3xl" />
          </div>
        </div>
        <div
          id={`service-${idNum}-title`}
          className="text-white -top-10 relative uppercase font-medium transition-all duration-300"
        >
          <div className="text-center uppercase text-sm top-1 lg:top-0 relative lg:text-lg">
            {title}
          </div>
          <div className="relative top-4 lg:top-28 text-white text-sm lg:text-md font-medium text-center">
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideColorBox;
