import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearEntrenador = () => {
  const [nombre_completo, setNombre_completo] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [años_experiencia, setAños_experiencia] = useState('');
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newEntrenador = {
      nombre_completo,
      edad: Number(edad), // Asegurarse de que sea número
      sexo,
      telefono,
      especialidad,
      años_experiencia: Number(años_experiencia), // Asegurarse de que sea número
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntrenador),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear entrenador');
      }

      navigate('/entrenadores'); // Redirigir a la lista de entrenadores después de crear
    } catch (error) {
      setError(error.message); // Mostrar mensaje de error
      console.error('Error al crear entrenador:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Entrenador</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombre_completo">Nombre Completo</label>
          <input
            type="text"
            id="nombre_completo"
            value={nombre_completo}
            onChange={(e) => setNombre_completo(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="sexo">Sexo</label>
          <input 
            type="text" 
            id="sexo" 
            value={sexo} 
            onChange={(e) => setSexo(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="telefono">Teléfono</label>
          <input 
            type="text" 
            id="telefono" 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="especialidad">Especialidad</label>
          <input 
            type="text" 
            id="especialidad" 
            value={especialidad} 
            onChange={(e) => setEspecialidad(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="años_experiencia">Años de Experiencia</label>
          <input 
            type="number" 
            id="años_experiencia" 
            value={años_experiencia} 
            onChange={(e) => setAños_experiencia(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Entrenador
        </button>
      </form>
    </div>
  );
};

export default CrearEntrenador;
