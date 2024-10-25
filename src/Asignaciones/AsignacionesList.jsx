import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AsignacionesList = () => {
  const [asignaciones, setAsignaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener las asignaciones
  const fetchAsignaciones = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/asignaciones`);
      if (!response.ok) {
        throw new Error('Error al obtener las asignaciones');
      }
      const data = await response.json();
      setAsignaciones(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsignaciones();
  }, []);

  // Manejar la edición de la asignación
  const handleEdit = (id) => {
    navigate(`/asignaciones/${id}/edit`);
  };

  // Manejar la creación de una nueva asignación
  const handleCreate = () => {
    navigate('/asignaciones/new');
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Asignaciones</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nueva Asignación
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Usuario</th>
            <th className="py-2 px-4 border-b">Entrenador</th>
            <th className="py-2 px-4 border-b">Fecha de Asignación</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.map(asignacion => (
            <tr key={asignacion.asignacion_id}>
              <td className="py-2 px-4 border-b">{asignacion.usuario.nombre}</td>
              <td className="py-2 px-4 border-b">{asignacion.entrenador.nombre_completo}</td>
              <td className="py-2 px-4 border-b">{new Date(asignacion.fecha_asignacion).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(asignacion.asignacion_id)} 
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

export default AsignacionesList;