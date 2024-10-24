import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarEntrenador = () => {
  const { entrenador_id } = useParams(); // Obtiene el id del rol a editar
  const [nombre_completo, setNombre_completo] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [años_experiencia, setAños_experiencia] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar los datos del rol cuando el componente se monta
  useEffect(() => {
    const fetchEntrenador = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores/${entrenador_id}`);
        if (!response.ok) {
          throw new Error(`Error al cargar el entrenador: ${response.status}`);
        }
        const data = await response.json();
        setNombre_completo(data.nombre_completo);
        setEdad(data.edad);
        setSexo(data.sexo);
        setTelefono(data.telefono);
        setEspecialidad(data.especialidad);
        setAños_experiencia(data.años_experiencia);
      
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchEntrenador();
  }, [entrenador_id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedEntrenador = { nombre_completo: nombre_completo,
      edad,
      sexo,
      telefono,
      especialidad,
      años_experiencia
     };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores/${entrenador_id}`, {
        method: 'PATCH', // Usamos PATCH para actualizaciones parciales
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEntrenador),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el entrenador: ${response.status}`);
      }

      navigate('/entrenadores'); // Redirige a la lista de roles después de actualizar
    } catch (err) {
      setError(err.message);
    }
  };

  // Mientras se carga el rol
  if (!nombre_completo) return <div className="text-center">Cargando rol...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Actualizar Entrenador</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombreRol">nombre_completo</label>
          <input 
            type="text" 
            id="nombre_completo" 
            value={nombre_completo} 
            onChange={(e) => setNombre_completo(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

<label className="block mb-2 font-bold" htmlFor="edad">edad</label>
          <input 
            type="number" 
            id="edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

<label className="block mb-2 font-bold" htmlFor="sexo">Sexo</label>
          <input 
            type="text" 
            id="sexo" 
            value={sexo} 
            onChange={(e) => setSexo(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

<label className="block mb-2 font-bold" htmlFor="telefono">telefono</label>
          <input 
            type="text" 
            id="telefono" 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

<label className="block mb-2 font-bold" htmlFor="especialidad">especialidad</label>
          <input 
            type="text" 
            id="especialidad" 
            value={especialidad} 
            onChange={(e) => setEspecialidad(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

<label className="block mb-2 font-bold" htmlFor="años_experiencia">años_experiencia</label>
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
          Actualizar Entrenador
        </button>
      </form>
    </div>
  );
};

export default ActualizarEntrenador;
