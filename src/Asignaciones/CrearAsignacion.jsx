import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearAsignacion = () => {
  const [usuarioId, setUsuarioId] = useState('');
  const [entrenadorId, setEntrenadorId] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [entrenadores, setEntrenadores] = useState([]);
  const [fechaAsignacion, setFechaAsignacion] = useState('');
  const [error, setError] = useState(''); // Para manejar errores
  const navigate = useNavigate();

  // Función para obtener usuarios
  const fetchUsuarios = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/usuarios`);
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  // Función para obtener entrenadores
  const fetchEntrenadores = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores`);
      const data = await response.json();
      setEntrenadores(data);
    } catch (error) {
      console.error('Error al obtener entrenadores:', error);
    }
  };

  // Llamar las funciones al montar el componente
  useEffect(() => {
    fetchUsuarios();
    fetchEntrenadores();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const newAsignacion = {
      usuario_id: parseInt(usuarioId), // Convertir a entero
      entrenador_id: parseInt(entrenadorId), // Convertir a entero
      fecha_asignacion: fechaAsignacion,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/asignaciones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAsignacion),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear la asignación');
      }

      navigate('/asignaciones'); // Redirigir a la lista de asignaciones
    } catch (error) {
      setError(error.message); // Mostrar mensaje de error
      console.error('Error al crear asignación:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Asignación</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="usuario">Usuario</label>
          <select
            id="usuario"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Seleccionar usuario</option>
            {usuarios.map(usuario => (
              <option key={usuario.usuario_id} value={usuario.usuario_id}>
                {usuario.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="entrenador">Entrenador</label>
          <select
            id="entrenador"
            value={entrenadorId}
            onChange={(e) => setEntrenadorId(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Seleccionar entrenador</option>
            {entrenadores.map(entrenador => (
              <option key={entrenador.entrenador_id} value={entrenador.entrenador_id}>
                {entrenador.nombre_completo}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="fecha_asignacion">Fecha de Asignación</label>
          <input
            type="date"
            id="fecha_asignacion"
            value={fechaAsignacion}
            onChange={(e) => setFechaAsignacion(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Asignación
        </button>
      </form>
    </div>
  );
};

export default CrearAsignacion;
