import React, { useEffect, useState } from 'react';

const EntrenadoresSelect = ({ selectedEntrenador, setSelectedEntrenador }) => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entrenadores`);
        if (!response.ok) {
          throw new Error('Error al obtener entrenadores');
        }
        const data = await response.json();
        setEntrenadores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntrenadores();
  }, []);

  if (loading) return <option>Cargando entrenadores...</option>;
  if (error) return <option>Error: {error}</option>;

  return (
    <select 
      value={selectedEntrenador} 
      onChange={(e) => setSelectedEntrenador(e.target.value)} 
      required 
      className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
    >
      <option value="">Selecciona un entrenador</option>
      {entrenadores.map(entrenador => (
        <option key={entrenador.id_entrenador} value={entrenador.id_entrenador}>
          {entrenador.nombre_completo}
        </option>
      ))}
    </select>
  );
};

export default EntrenadoresSelect;
