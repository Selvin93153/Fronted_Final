import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/LogoGym.png'; // Asegúrate de que esta ruta sea correcta
import { useState } from 'react';

export const Layout = () => {
    const [selectedPage, setSelectedPage] = useState("Inicio"); // Puedes ajustar el valor inicial según sea necesario
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = "bg-gradient-to-r from-black to-yellow-500 drop-shadow";

    return (
        <>
            {/* HEADER */}
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
                                    {["Inicio", "¡INSCRIBETE!", "Nuestras Sedes", "Contactanos", "Tienda", "Servicios", "Clientes"].map(page => (
                                        <Link
                                            key={page}
                                            to={`/${page.replace(/\s+/g, '').toLowerCase()}`} // Genera la ruta basada en el nombre de la página
                                            className={`text-yellow-500 font-bold hover:text-yellow-300 transition duration-500 ${selectedPage === page ? 'text-yellow-300' : ''}`}
                                            onClick={() => setSelectedPage(page)} // Cambia la página seleccionada al hacer clic
                                        >
                                            {page}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/roles"
                                        className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500"
                                        onClick={() => setSelectedPage("Roles")}
                                    >
                                        Roles
                                    </Link>
                                    {/* ADMINISTRACION BUTTON */}
                                    <Link
                                        to="/administracion"
                                        className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500"
                                        onClick={() => setSelectedPage("Administracion")}
                                    >
                                        Administración
                                    </Link>
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Inicio</p>
                                    <button className="bg-black text-white px-4 py-2 rounded">Nuestros Planes Aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE MENU MODAL */}
                <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${isMenuToggled ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <span className="h-6 w-6 text-gray-400">✖</span> {/* Icono temporal */}
                        </button>
                    </div>
                    {/* MENU ITEMS */}
                    <div className='ml-[20%] flex flex-col gap-10 text-2xl'>
                        {["HomePage", "Benefits", "Our Classes", "Contact Us", "Clientes"].map(page => (
                            <Link
                                key={page}
                                to={`/${page.replace(/\s+/g, '').toLowerCase()}`} // Genera la ruta basada en el nombre de la página
                                className={`text-yellow-500 font-bold hover:text-yellow-300 transition duration-500 ${selectedPage === page ? 'text-yellow-300' : ''}`}
                                onClick={() => {
                                    setSelectedPage(page);
                                    setIsMenuToggled(false); // Cierra el menú al hacer clic
                                }}
                            >
                                {page}
                            </Link>
                        ))}
                        <Link
                            to="clientes/new"
                            className="text-yellow-500 font-bold hover:text-yellow-300 transition duration-500"
                            onClick={() => {
                                setSelectedPage("Clientes");
                                setIsMenuToggled(false); // Cierra el menú al hacer clic
                            }}
                        >
                            Clientes
                        </Link>
                    </div>
                </div>
            </nav>

            <main className='mt-20 mx-auto max-w-6xl p-10'> {/* Ajusta el margin-top para evitar solapamiento con el Header */}
                <Outlet />
            </main>
        </>
    );
};
