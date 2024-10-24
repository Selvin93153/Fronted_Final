import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MembresiasList = () => {
  const [membresias, setMembresias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener las membresías
  const fetchMembresias = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/membresias`);
      if (!response.ok) {
        throw new Error('Error al obtener las membresías');
      }
      const data = await response.json();
      setMembresias(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembresias();
  }, []);

  // Manejar la edición de la membresía
  const handleEdit = (id) => {
    navigate(`/membresias/${id}/edit`);
  };

  // Manejar la creación de una nueva membresía
  const handleCreate = () => {
    console.log('Redirigiendo a crear nueva membresía');
    navigate('/membresias/new'); // Redirige a la ruta de creación de membresía
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Membresías</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nueva Membresía
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b">membresia_id</th>
            <th className="py-2 px-4 border-b">Nombre</th>
           

            <th className="py-2 px-4 border-b">Beneficios</th>
            <th className="py-2 px-4 border-b">Estado</th>
            <th className="py-2 px-4 border-b">Fecha de Inicio</th>
            <th className="py-2 px-4 border-b">Fecha de Fin</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {membresias.map(membresia => (
            <tr key={membresia.membresia_id}>
               <td className="py-2 px-4 border-b">{membresia.membresia_id}</td>
              <td className="py-2 px-4 border-b">{membresia.nombre_membresia}</td>
              <td className="py-2 px-4 border-b">{membresia.beneficios}</td>
              <td className="py-2 px-4 border-b">{membresia.estado_membresia}</td>
              <td className="py-2 px-4 border-b">{new Date(membresia.fecha_inicio).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{new Date(membresia.fecha_fin).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(membresia.membresia_id)} 
                  className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700 transition duration-300"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembresiasList;