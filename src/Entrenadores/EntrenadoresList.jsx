import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntrenadoresList = () => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener la lista de entrenadores
  const fetchEntrenadores = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores`);
      if (!response.ok) {
        throw new Error('Error al obtener los entrenadores');
      }
      const data = await response.json();
      setEntrenadores(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntrenadores();
  }, []);

  // Manejar la edición de un entrenador
  const handleEdit = (id) => {
    navigate(`/entrenadores/${id}/edit`);
  };

  // Manejar la creación de un nuevo entrenador
  const handleCreate = () => {
    navigate('/entrenadores/new'); // Redirige a la ruta de creación de entrenador
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Lista de Entrenadores</h2>
        <button 
          onClick={handleCreate} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Entrenador
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Nombre Completo</th>
            <th className="py-2 px-4 text-left">Edad</th>
            <th className="py-2 px-4 text-left">Sexo</th>
            <th className="py-2 px-4 text-left">Teléfono</th>
            <th className="py-2 px-4 text-left">Especialidad</th>
            <th className="py-2 px-4 text-left">Años de Experiencia</th>
            <th className="py-2 px-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entrenadores.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No hay entrenadores disponibles.
              </td>
            </tr>
          ) : (
            entrenadores.map((entrenador) => (
              <tr key={entrenador.entrenador_id} className="border-t">
                <td className="py-2 px-4">{entrenador.nombre_completo}</td>
                <td className="py-2 px-4">{entrenador.edad}</td>
                <td className="py-2 px-4">{entrenador.sexo}</td>
                <td className="py-2 px-4">{entrenador.telefono}</td>
                <td className="py-2 px-4">{entrenador.especialidad}</td>
                <td className="py-2 px-4">{entrenador.años_experiencia}</td>
                <td className="py-2 px-4">
                  <button 
                    onClick={() => handleEdit(entrenador.entrenador_id)} 
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700 transition duration-300"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntrenadoresList;
