import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearRoles = () => {
  const [nombreRol, setNombreRol] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newRol = { nombre_rol: nombreRol };

    await fetch(`${import.meta.env.VITE_API_URL}/api/roles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRol),
    });

    navigate('/roles'); // Redirigir a la lista de roles después de crear
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Rol</h2>
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombreRol">Nombre del Rol</label>
          <input
            type="text"
            id="nombreRol"
            value={nombreRol}
            onChange={(e) => setNombreRol(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Rol
        </button>
      </form>
    </div>
  );
};

export default CrearRoles;
