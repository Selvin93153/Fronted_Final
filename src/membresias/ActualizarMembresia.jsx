import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarMembresia = () => {
  const { id } = useParams(); // Obtener el ID de la membresía
  const [membresia, setMembresia] = useState(null);
  const [nombreMembresia, setNombreMembresia] = useState('');
  const [beneficios, setBeneficios] = useState(''); // Estado para los beneficios
  const [estadoMembresia, setEstadoMembresia] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  
  const navigate = useNavigate(); // Usado para redirigir después de la actualización

  useEffect(() => {
    const fetchMembresia = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/membresias/${id}`);
      const data = await response.json();
      setMembresia(data);
      setNombreMembresia(data.nombre_membresia);
      setBeneficios(data.beneficios);
      setEstadoMembresia(data.estado_membresia);
      setFechaInicio(data.fecha_inicio);
      setFechaFin(data.fecha_fin);
    };

    fetchMembresia();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedMembresia = { 
      nombre_membresia: nombreMembresia, 
      estado_membresia: estadoMembresia, 
      fecha_inicio: fechaInicio, 
      fecha_fin: fechaFin,
      beneficios // Incluir beneficios en la actualización
    };

    await fetch(`${import.meta.env.VITE_API_URL}/api/membresias/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMembresia),
    });

    navigate('/membresias'); // Redirigir a la lista de membresías después de actualizar
  };

  if (!membresia) return <div className="text-center">Cargando membresía...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Editar Membresía</h2>
      <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="nombreMembresia" className="block mb-2">Nombre de la Membresía</label>
          <input
            type="text"
            id="nombreMembresia"
            value={nombreMembresia}
            onChange={(e) => setNombreMembresia(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="beneficios" className="block mb-2">Beneficios</label>
          <textarea
            id="beneficios"
            value={beneficios}
            onChange={(e) => setBeneficios(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 h-24"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="estadoMembresia" className="block mb-2">Estado de la Membresía</label>
          <select
            id="estadoMembresia"
            value={estadoMembresia}
            onChange={(e) => setEstadoMembresia(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          >
            <option value="">Selecciona estado</option>
            <option value="Activa">Activa</option>
            <option value="Inactiva">Inactiva</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="fechaInicio" className="block mb-2">Fecha de Inicio</label>
          <input
            type="date"
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fechaFin" className="block mb-2">Fecha de Fin</label>
          <input
            type="date"
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Actualizar Membresía
        </button>
      </form>
    </div>
  );
};

export default ActualizarMembresia;
