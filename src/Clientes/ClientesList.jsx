import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los clientes
  const fetchClientes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clientes`);
      if (!response.ok) {
        throw new Error('Error al obtener los clientes');
      }
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  // Manejar la edición del cliente
  const handleEdit = (id) => {
    navigate(`/clientes/${id}/edit`);
  };

  // Manejar la creación de un nuevo cliente
  const handleCreate = () => {
    navigate('/clientes/new'); // Redirige a la ruta de creación del cliente
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nuevo Cliente
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre Completo</th>
            <th className="py-2 px-4 border-b">Sexo</th>
            <th className="py-2 px-4 border-b">Entrenador</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id_cliente}>
              <td className="py-2 px-4 border-b">{cliente.id_cliente}</td>
              <td className="py-2 px-4 border-b">{cliente.nombre_completo}</td>
              <td className="py-2 px-4 border-b">{cliente.sexo}</td>
              <td className="py-2 px-4 border-b">{cliente.entrenador ? cliente.entrenador.nombre_completo : 'Sin entrenador'}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(cliente.id_cliente)} 
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

export default ClientesList;
