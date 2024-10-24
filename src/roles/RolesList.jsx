import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RolesList = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los roles
  const fetchRoles = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/roles`);
      if (!response.ok) {
        throw new Error('Error al obtener los roles');
      }
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Manejar la edición del rol
  const handleEdit = (id) => {
    navigate(`/roles/${id}/edit`);
  };

  // Manejar la creación de un nuevo rol
  const handleCreate = () => {
    navigate('/roles/new'); // Redirige a la ruta de creación del rol
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Roles</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nuevo Rol
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre Rol</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.rol_id}>
              <td className="py-2 px-4 border-b">{role.rol_id}</td>
              <td className="py-2 px-4 border-b">{role.nombre_rol}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(role.rol_id)} 
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

export default RolesList;
