import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarControl = () => {
  const { id } = useParams(); // Obtener el ID del control
  const [control, setControl] = useState(null);
  const [pesoInicial, setPesoInicial] = useState('');
  const [pesoActual, setPesoActual] = useState('');
  const [altura, setAltura] = useState('');
  const [fecha, setFecha] = useState('');
  const [usuarioId, setUsuarioId] = useState(''); // Para almacenar el ID del usuario

  const navigate = useNavigate(); // Usado para redirigir después de la actualización

  useEffect(() => {
    const fetchControl = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/control/${id}`);
      const data = await response.json();
      setControl(data);
      setPesoInicial(data.peso_inicial);
      setPesoActual(data.peso_actual);
      setAltura(data.altura);
      setFecha(data.fecha);
      setUsuarioId(data.usuario_id); // Cargar el ID del usuario, no editable
    };

    fetchControl();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedControl = {
      peso_inicial: Number(pesoInicial), // Asegúrate de que sea un número
      peso_actual: Number(pesoActual), // Asegúrate de que sea un número
      altura:altura, // Asegúrate de que sea un número
      fecha: fecha,
      usuario_id: usuarioId // Mantener el ID del usuario original
    };

    await fetch(`${import.meta.env.VITE_API_URL}/api/control/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedControl),
    });

    navigate('/control'); // Redirigir a la lista de controles después de actualizar
  };

  if (!control) return <div className="text-center">Cargando control...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Editar Control</h2>
      <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="pesoInicial" className="block mb-2">Peso Inicial</label>
          <input
            type="number"
            id="pesoInicial"
            value={pesoInicial}
            onChange={(e) => setPesoInicial(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pesoActual" className="block mb-2">Peso Actual</label>
          <input
            type="number"
            id="pesoActual"
            value={pesoActual}
            onChange={(e) => setPesoActual(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="altura" className="block mb-2">Altura</label>
          <input
            type="string"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fecha" className="block mb-2">Fecha</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Actualizar Control
        </button>
      </form>
    </div>
  );
};

export default ActualizarControl;
