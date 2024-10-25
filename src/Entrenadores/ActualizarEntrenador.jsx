import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarEntrenador = () => {
  const { id } = useParams(); // Obtener el ID del entrenador
  const [entrenador, setEntrenador] = useState(null);
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [añosExperiencia, setAñosExperiencia] = useState('');

  const navigate = useNavigate(); // Usado para redirigir después de la actualización

  useEffect(() => {
    const fetchEntrenador = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores/${id}`);
      const data = await response.json();
      setEntrenador(data);
      setNombreCompleto(data.nombre_completo);
      setEdad(data.edad);
      setSexo(data.sexo);
      setTelefono(data.telefono || ''); // Manejar posible valor undefined
      setEspecialidad(data.especialidad);
      setAñosExperiencia(data.años_experiencia);
    };

    fetchEntrenador();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedEntrenador = {
      nombre_completo: nombreCompleto,
      edad: Number(edad), // Asegúrate de que sea un número
      sexo,
      telefono,
      especialidad,
      años_experiencia: Number(añosExperiencia) // Asegúrate de que sea un número
    };

    await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEntrenador),
    });

    navigate('/entrenadores'); // Redirigir a la lista de entrenadores después de actualizar
  };

  if (!entrenador) return <div className="text-center">Cargando entrenador...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Editar Entrenador</h2>
      <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="nombreCompleto" className="block mb-2">Nombre Completo</label>
          <input
            type="text"
            id="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="edad" className="block mb-2">Edad</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sexo" className="block mb-2">Sexo</label>
          <select
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          >
            <option value="">Selecciona sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block mb-2">Teléfono</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="especialidad" className="block mb-2">Especialidad</label>
          <input
            type="text"
            id="especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="añosExperiencia" className="block mb-2">Años de Experiencia</label>
          <input
            type="number"
            id="añosExperiencia"
            value={añosExperiencia}
            onChange={(e) => setAñosExperiencia(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Actualizar Entrenador
        </button>
      </form>
    </div>
  );
};

export default ActualizarEntrenador;
