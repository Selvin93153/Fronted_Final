import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ActualizarCliente.css'; // Asegúrate de que esta ruta sea correcta

const ActualizarCliente = () => {
  const { id } = useParams(); // Obtener el ID del cliente
  const [cliente, setCliente] = useState(null);
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [sexo, setSexo] = useState('');
  const navigate = useNavigate(); // Usado para redirigir después de la actualización

  useEffect(() => {
    const fetchCliente = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clientes/${id}`);
      const data = await response.json();
      setCliente(data);
      setNombreCompleto(data.nombre_completo);
      setSexo(data.sexo);
    };

    fetchCliente();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedCliente = { nombre_completo: nombreCompleto, sexo };

    await fetch(`${import.meta.env.VITE_API_URL}/api/clientes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCliente),
    });

    navigate('/'); // Redirigir a la lista de clientes después de actualizar
  };

  if (!cliente) return <div>Cargando cliente...</div>;

  return (
    <div className="form-container">
      <h2>Editar Cliente</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="nombreCompleto">Nombre Completo</label>
          <input
            type="text"
            id="nombreCompleto"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          >
            <option value="">Selecciona sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
        <button type="submit">Actualizar Cliente</button>
      </form>
    </div>
  );
};

export default ActualizarCliente;
