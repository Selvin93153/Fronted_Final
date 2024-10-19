import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header className='bg-slate-800'>
                <div className='mx-auto max-w-6xl py-10 flex justify-between items-center'>
                    <h1 className="text-4xl text-white">
                       CONFIGURACION DE GYMNASIO 
                    </h1>
                    <nav className='space-x-4'>
                        <Link 
                            to="/roles" 
                            className='text-white hover:underline'
                        >
                            Roles
                        </Link>
                        <Link 
                            to="/Asignaciones" 
                            className='text-white hover:underline'
                        >
                            Asignaciones
                        </Link>
                        <Link 
                            to="/Entrenadores" 
                            className='text-white hover:underline'
                        >
                            Entrenadores
                        </Link>
                        <Link 
                            to="/KidsArea" 
                            className='text-white hover:underline'
                        >
                            KidsArea
                        </Link>
                        <Link 
                            to="/Spa" 
                            className='text-white hover:underline'
                        >
                            Spa
                        </Link>
                    </nav>
                </div>
            </header>

            <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow'>
                <Outlet />
            </main>
        </>
    );
}
