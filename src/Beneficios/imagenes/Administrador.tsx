// src/views/Administrador.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Administrador: React.FC = () => {
  return (
    <div className="p-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Configuración del Administrador</h1>
      <div className="flex flex-col gap-4">
        <NavLink to="/roles" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Roles
        </NavLink>
        <NavLink to="/entrenadores" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Entrenadores
        </NavLink>
        <NavLink to="/KidsArea" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Kids Area
        </NavLink>
        <NavLink to="/Spa" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Spa
        </NavLink>
        {/* Agrega más enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default Administrador;
