import { useState } from "react";
import Logo from "../assets/LogoGym.png";  // Ajusta el path si es necesario
import Link from "./Link"; // Asegúrate de que este componente exista
import { NavLink } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = true;  // Para evitar errores en la visualización
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-gradient-to-r from-black to-yellow-500 drop-shadow";  // Degradado de negro a amarillo

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}> {/* Cambiado de py-6 a py-4 */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-4`}> {/* Reducido gap a 4 */}
            {/* LEFT SIDE */}
            <div className="flex items-center" style={{ height: '50px', width: '100px', overflow: 'hidden', borderRadius: '50%' }}> {/* Contenedor para ajustar el tamaño */}
              <img src={Logo} alt="logo" style={{ height: '200%', width: '150', objectFit: 'cover' }} /> {/* Ajusta la altura y el ancho del logo */}
            </div>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm text-yellow-500 font-bold`}>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                  <Link
                    page="¡INSCRIBETE!"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                  <Link
                    page="Nuestras Sedes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                  <Link
                    page="Contactanos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                  <Link
                    page="Tienda"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                   <Link
                    page="Servicios"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled} // Pasar esta función
                  />
                  <NavLink
                    to="/roles"
                    className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500"
                  >
                    Roles
                  </NavLink>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Inicio</p>
                  <button className="bg-black text-white px-4 py-2 rounded">Nuestros Planes Aqui</button> {/* Botón temporal */}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {/* Aquí debes definir o importar Bars3Icon */}
                <span className="h-6 w-6 text-white">☰</span> {/* Icono temporal */}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${isMenuToggled ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            {/* Aquí debes definir o importar XMarkIcon */}
            <span className="h-6 w-6 text-gray-400">✖</span> {/* Icono temporal */}
          </button>
        </div>
        {/* MENU ITEMS */}
        <div className='ml-[20%] flex flex-col gap-10 text-2xl'>
          <Link
            page="HomePage"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled} // Pasar esta función
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled} // Pasar esta función
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled} // Pasar esta función
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled} // Pasar esta función
          />
          <NavLink
                    to="/roles"
                    className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500"
                  >
                    Roles
                  </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;
