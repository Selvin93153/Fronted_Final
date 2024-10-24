import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los usuarios
  const fetchUsuarios = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/usuarios`);
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Manejar la edición del usuario
  const handleEdit = (id) => {
    navigate(`/usuarios/${id}/edit`);
  };

  // Manejar la creación de un nuevo usuario
  const handleCreate = () => {
    navigate('/usuarios/new'); // Redirige a la ruta de creación de usuario
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nuevo Usuario
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
           
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Apellido</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">contraseña</th>
            <th className="py-2 px-4 border-b">Teléfono</th>
            <th className="py-2 px-4 border-b">Roles</th>
            <th className="py-2 px-4 border-b">Membresia</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.usuario_id}>
           
              <td className="py-2 px-4 border-b">{usuario.nombre}</td>
              <td className="py-2 px-4 border-b">{usuario.apellido}</td>
              <td className="py-2 px-4 border-b">{usuario.email}</td>
              <td className="py-2 px-4 border-b">{usuario.contraseña}</td>
              <td className="py-2 px-4 border-b">{usuario.telefono}</td>
              <td className="py-2 px-4 border-b">{usuario.rol ? usuario.rol.nombre_rol:'Sin rol'}</td>
              <td className="py-2 px-4 border-b">{usuario.membresia ? usuario.membresia.nombre_membresia:'Sin membresia'}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(usuario.usuario_id)} 
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

export default UsuariosList;
