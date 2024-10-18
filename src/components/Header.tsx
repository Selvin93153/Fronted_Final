import { useState } from "react";
import Logo from "../assets/logo.png";  // Ajusta el path si es necesario
import Link from "./Link"; // Asegúrate de que este componente existe

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = true;  // Para evitar errores en la visualización
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}> {/* Cambiado de py-6 a py-4 */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-4`}> {/* Reducido gap a 4 */}
           
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" className="h-12" /> {/* Ajusta la altura del logo */}

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
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
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <button className="bg-black text-white px-4 py-2 rounded">Become a Member</button> {/* Botón temporal */}
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
        </div>
      </div>
    </nav>
  )
}

export default Header;
