import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearMembresia = () => {
  const [nombre_membresia, setNombreMembresia] = useState('');
  const [beneficios, setBeneficios] = useState('');
  const [estado_membresia, setEstadoMembresia] = useState('');
  const [fecha_inicio, setFechaInicio] = useState('');
  const [fecha_fin, setFechaFin] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newMembresia = { 
      nombre_membresia,
      beneficios,
      estado_membresia,
      fecha_inicio,
      fecha_fin,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/membresias`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMembresia),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear la membresía');
      }

      navigate('/membresias'); // Redirigir a la lista de membresías después de crear
    } catch (error) {
      setError(error.message); // Mostrar mensaje de error
      console.error('Error al crear membresía:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Membresía</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombre_membresia">Nombre de la Membresía</label>
          <input 
            type="text" 
            id="nombre_membresia" 
            value={nombre_membresia} 
            onChange={(e) => setNombreMembresia(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="beneficios">Beneficios</label>
          <textarea 
            id="beneficios" 
            value={beneficios} 
            onChange={(e) => setBeneficios(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="estado_membresia">Estado de la Membresía</label>
          <input 
            type="enum" 
            id="estado_membresia" 
            value={estado_membresia} 
            onChange={(e) => setEstadoMembresia(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="fecha_inicio">Fecha de Inicio</label>
          <input 
            type="date" 
            id="fecha_inicio"
            value={fecha_inicio} 
            onChange={(e) => setFechaInicio(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="fecha_fin">Fecha de Fin</label>
          <input 
            type="date" 
            id="fecha_fin" 
            value={fecha_fin} 
            onChange={(e) => setFechaFin(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Membresía
        </button>
      </form>
    </div>
  );
};

export default CrearMembresia;
