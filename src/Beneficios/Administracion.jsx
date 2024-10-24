import React from 'react';
import { useNavigate } from 'react-router-dom';

const Administracion = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
            <div className="max-w-2xl bg-white shadow-2xl rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Administración
                </h1>

                <div className="space-y-6">
                    {/* Botón para redirigir a Clientes */}
                    <button
                        onClick={() => navigate('/roles')}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Roles
                    </button>
                    <button
                        onClick={() => navigate('/membresias')}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Membresias
                    </button>
                    <button
                        onClick={() => navigate('/entrenadores')}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Entrenadores
                    </button>
                    <button
                        onClick={() => navigate('/usuarios')}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Listado de Usuarios
                    </button>

                    <button
                        onClick={() => navigate('/asignaciones')}
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        ASIGNACIONES DE CLIENTES Y ENTRENADORES
                    </button>

                    {/* Botón para redirigir a KidsArea */}
                    <button
                        onClick={() => navigate('/KidsArea')}
                        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        KidsArea
                    </button>

                    {/* Botón para redirigir a Spa */}
                    <button
                        onClick={() => navigate('/SpaArea')}
                        className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Spa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Administracion;
