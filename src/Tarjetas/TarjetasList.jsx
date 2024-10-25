import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TarjetasList = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para obtener las tarjetas
  const fetchTarjetas = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tarjetas`);
      if (!response.ok) {
        throw new Error('Error al obtener las tarjetas');
      }
      const data = await response.json();
      setTarjetas(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTarjetas();
  }, []);

  // Manejar la edición de la tarjeta
  const handleEdit = (id) => {
    navigate(`/tarjetas/${id}/edit`);
  };

  // Manejar la creación de una nueva tarjeta
  const handleCreate = () => {
    navigate('/tarjetas/new'); // Redirige a la ruta de creación de tarjeta
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarjetas</h1>
      <button 
        onClick={handleCreate} 
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Crear Nueva Tarjeta
      </button>
      <table className="min-w-full bg-white border border-black-2000">
        <thead>
          <tr>
            
            <th className="py-2 px-4 border-b">nombre</th>
            <th className="py-2 px-4 border-b">Número de Tarjeta</th>
            <th className="py-2 px-4 border-b">Expiración</th>
            <th className="py-2 px-4 border-b">Nombre del Titular</th>
            
          </tr>
        </thead>
        <tbody>
          {tarjetas.map(tarjeta => (
            <tr key={tarjeta.tarjeta_id}>
             
              <td className="py-2 px-4 border-b">{tarjeta.usuario ? tarjeta.usuario.nombre : 'Sin usuario'}</td> {/* Mostrar el nombre del usuario */}
              <td className="py-2 px-4 border-b">**** **** **** {tarjeta.numero_tarjeta.slice(-4)}</td> {/* Mostrar sólo los últimos 4 dígitos */}
              <td className="py-2 px-4 border-b">{tarjeta.expiracion}</td>
              <td className="py-2 px-4 border-b">{tarjeta.nombre_titular}</td>
              <td className="py-2 px-4 border-b">
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TarjetasList;
