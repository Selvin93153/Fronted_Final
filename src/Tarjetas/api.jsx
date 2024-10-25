const API_URL_TARJETAS = 'http://localhost:3000/tarjetas';

// Función para obtener todas las tarjetas
export const fetchTarjetas = async () => {
  const response = await fetch(API_URL_TARJETAS);
  if (!response.ok) {
    throw new Error('Error al obtener las tarjetas');
  }
  return await response.json();
};

// Función para crear una nueva tarjeta
export const crearTarjeta = async (tarjetaData) => {
  const response = await fetch(API_URL_TARJETAS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarjetaData),
  });
  if (!response.ok) {
    throw new Error('Error al crear la tarjeta');
  }
  return await response.json();
};

// Función para actualizar una tarjeta existente
export const updateTarjeta = async (id, tarjetaData) => {
  const response = await fetch(`${API_URL_TARJETAS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarjetaData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la tarjeta');
  }
  return await response.json();
};

// Función para eliminar una tarjeta
export const deleteTarjeta = async (id) => {
  const response = await fetch(`${API_URL_TARJETAS}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar la tarjeta');
  }
  return await response.json();
};
