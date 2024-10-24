import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EntrenadoresSelect from './EntrenadoresSelect'; // Corrige la ruta
 // Asegúrate de que la ruta es correcta

const CrearCliente = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [sexo, setSexo] = useState('');
  const [entrenadorId, setEntrenadorId] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newCliente = { 
      nombre_completo: nombreCompleto, 
      sexo, 
      entrenador_id: entrenadorId // Agregar entrenador_id
    };

    await fetch(`${import.meta.env.VITE_API_URL}/api/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCliente),
    });

    navigate('/clientes');
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Cliente</h2>
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="nombreCompleto">Nombre Completo</label>
          <input 
            type="text" 
            id="nombreCompleto" 
            value={nombreCompleto} 
            onChange={(e) => setNombreCompleto(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="sexo">Sexo</label>
          <select 
            id="sexo" 
            value={sexo} 
            onChange={(e) => setSexo(e.target.value)} 
            required 
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Selecciona sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="entrenador">Entrenador</label>
          <EntrenadoresSelect selectedEntrenador={entrenadorId} setSelectedEntrenador={setEntrenadorId} />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Crear Cliente
        </button>
      </form>
    </div>
  );
};

export default CrearCliente;
