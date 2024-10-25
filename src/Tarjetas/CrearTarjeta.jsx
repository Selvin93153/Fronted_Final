import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearTarjeta = () => {
  const [numero_tarjeta, setNumero_tarjeta] = useState('');
  const [expiracion, setExpiracion] = useState('');
  const [nombre_titular, setNombre_titular] = useState('');
  const [cvv, setCvv] = useState(''); // Campo CVV
  const [usuario_id, setUsuario_id] = useState(''); // ID del usuario asociado a la tarjeta
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newTarjeta = {
      numero_tarjeta,
      expiracion,
      nombre_titular,
      cvv, // Agregar CVV a los datos de la nueva tarjeta
      usuario_id: Number(usuario_id), // Asegurarse de que sea número
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tarjetas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTarjeta),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear tarjeta');
      }

      navigate('/tarjetas'); // Redirigir a la lista de tarjetas después de crear
    } catch (error) {
      setError(error.message); // Mostrar mensaje de error
      console.error('Error al crear tarjeta:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Tarjeta</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="numero_tarjeta">Número de Tarjeta</label>
          <input
            type="text"
            id="numero_tarjeta"
            value={numero_tarjeta}
            onChange={(e) => setNumero_tarjeta(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="expiracion">Expiración (MM/AA)</label>
          <input 
            type="text" 
            id="expiracion" 
            value={expiracion} 
            onChange={(e) => setExpiracion(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombre_titular">Nombre del Titular</label>
          <input 
            type="text" 
            id="nombre_titular" 
            value={nombre_titular} 
            onChange={(e) => setNombre_titular(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="cvv">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="usuario_id">ID del Usuario</label>
          <input 
            type="number" 
            id="usuario_id" 
            value={usuario_id} 
            onChange={(e) => setUsuario_id(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Tarjeta
        </button>
      </form>
    </div>
  );
};

export default CrearTarjeta;
