import { useState } from "react";
import Logo from "../assets/LogoGym.png"; // Ajusta el path si es necesario
import { NavLink } from "react-router-dom";

const Header = ({ isTopOfPage }) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const navbarBackground = isTopOfPage ? "" : "bg-gradient-to-r from-black to-yellow-500 drop-shadow";

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-4`}>
                        {/* LEFT SIDE */}
                        <div className="flex items-center" style={{ height: '50px', width: '100px', overflow: 'hidden', borderRadius: '50%' }}>
                            <img src={Logo} alt="Logo del gimnasio" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </div>
                        {/* RIGHT SIDE */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm text-yellow-500 font-bold`}>
                                <NavLink to="/" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Inicio</NavLink>
                                <NavLink to="/clientes" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Clientes</NavLink>
                                <NavLink to="/clientes/new" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">¡INSCRIBETE!</NavLink>
                                <NavLink to="/nuestras-sedes" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Nuestras Sedes</NavLink>
                                <NavLink to="/contactanos" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Contáctanos</NavLink>
                                <NavLink to="/tienda" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Tienda</NavLink>
                                <NavLink to="/servicios" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Servicios</NavLink>
                                <NavLink to="/administracion" className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500">Administración</NavLink> {/* Nueva opción */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
