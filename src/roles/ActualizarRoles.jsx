import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarRoles = () => {
  const { id } = useParams(); // Obtiene el id del rol a editar
  const [nombreRol, setNombreRol] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar los datos del rol cuando el componente se monta
  useEffect(() => {
    const fetchRol = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/roles/${id}`);
        if (!response.ok) {
          throw new Error(`Error al cargar el rol: ${response.status}`);
        }
        const data = await response.json();
        setNombreRol(data.nombre_rol);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchRol();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedRol = { nombre_rol: nombreRol };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/roles/${id}`, {
        method: 'PATCH', // Usamos PATCH para actualizaciones parciales
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRol),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el rol: ${response.status}`);
      }

      navigate('/roles'); // Redirige a la lista de roles después de actualizar
    } catch (err) {
      setError(err.message);
    }
  };

  // Mientras se carga el rol
  if (!nombreRol) return <div className="text-center">Cargando rol...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Actualizar Rol</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md">
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
          Actualizar Rol
        </button>
      </form>
    </div>
  );
};

export default ActualizarRoles;
