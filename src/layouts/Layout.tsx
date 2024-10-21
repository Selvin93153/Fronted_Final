// src/layouts/Layout.tsx
import { Link, Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <>
            <header className='bg-slate-800'>
                <div className='mx-auto max-w-6xl py-10'>
                  
                    <h1 className="text-4xl text-white">
                        Roles Manager
                    </h1>
                    <nav className="mt-5">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="text-white hover:underline">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white hover:underline">
                                    Roles
                                </Link>
                            </li>
                            <li>
                                <Link to="/roles/new" className="text-white hover:underline">
                                    Nuevo Rol
                                </Link>
                            </li>
                                <li> <Link to="/entrenadores" className="text-white hover:underline">
                                    ENTRENADORES
                                </Link></li>
                               
                               
                           

                            {/* Aquí puedes agregar más enlaces según sea necesario */}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow'>
                <Outlet />
            </main>
        </>
    );
};
