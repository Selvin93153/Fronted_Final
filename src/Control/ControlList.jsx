import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ControlList = () => {
  const [controles, setControles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los controles
  const fetchControles = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/control`);
      if (!response.ok) {
        throw new Error('Error al obtener los controles');
      }
      const data = await response.json();
      setControles(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchControles();
  }, []);

  // Manejar la edición de un control
  const handleEdit = (id) => {
    navigate(`/control/${id}/edit`);
  };

  // Manejar la creación de un nuevo control
  const handleCreate = () => {
    navigate('/control/new'); // Redirige a la ruta de creación de control
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Estadisticas de Usuarios</h1>
      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Peso ID</th>
            <th className="py-2 px-4 border-b">Peso Inicial</th>
            <th className="py-2 px-4 border-b">Peso Actual</th>
            <th className="py-2 px-4 border-b">Altura</th>
            <th className="py-2 px-4 border-b">Fecha</th>
            <th className="py-2 px-4 border-b">Usuario</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {controles.map(control => (
            <tr key={control.peso_id}>
              <td className="py-2 px-4 border-b">{control.peso_id}</td>
              <td className="py-2 px-4 border-b">{control.peso_inicial}</td>
              <td className="py-2 px-4 border-b">{control.peso_actual}</td>
              <td className="py-2 px-4 border-b">{control.altura}</td>
              <td className="py-2 px-4 border-b">{new Date(control.fecha).toLocaleDateString()}</td> {/* Formatear la fecha */}
              <td className="py-2 px-4 border-b">{control.usuario ? control.usuario.nombre : 'Sin usuario'}</td> {/* Mostrar el nombre del usuario */}
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(control.peso_id)} 
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

export default ControlList;
