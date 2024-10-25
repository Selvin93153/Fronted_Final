import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rolId, setRolId] = useState('');
  const [membresiaId, setMembresiaId] = useState('');
  const [roles, setRoles] = useState([]);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Función para obtener roles
  const fetchRoles = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/roles`);
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error('Error al obtener roles:', error);
    }
  };

  // Función para obtener membresías
  const fetchMembresias = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/membresias`);
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error al obtener membresías:', error);
    }
  };

  // Llamar las funciones al montar el componente
  useEffect(() => {
    fetchRoles();
    fetchMembresias();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const newUsuario = {
      nombre,
      apellido,
      email,
      contraseña,
      telefono,
      rol_id: parseInt(rolId), // Convertir a entero
      membresia_id: parseInt(membresiaId), // Convertir a entero
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUsuario),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear el usuario');
      }

      navigate('/usuarios'); // Redirigir a la lista de usuarios
    } catch (error) {
      setError(error.message); // Mostrar mensaje de error
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Usuario</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="rol">Rol</label>
          <select
            id="rol"
            value={rolId}
            onChange={(e) => setRolId(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Seleccionar rol</option>
            {roles.map(rol => (
              <option key={rol.rol_id} value={rol.rol_id}>
                {rol.nombre_rol}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="membresia">Membresía</label>
          <select
            id="membresia"
            value={membresiaId}
            onChange={(e) => setMembresiaId(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Seleccionar membresía</option>
            {members.map(membresia => (
              <option key={membresia.membresia_id} value={membresia.membresia_id}>
                {membresia.nombre_membresia}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
