const API_URL = 'http://localhost:3000/membresias';

// Función para obtener todas las membresías
export const fetchMembresias = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener las membresías');
  }
  return await response.json();
};

// Función para crear una nueva membresía
export const crearMembresia = async (membresiaData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(membresiaData),
  });
  if (!response.ok) {
    throw new Error('Error al crear la membresía');
  }
  return await response.json();
};

// Función para actualizar una membresía existente
export const updateMembresia = async (id, membresiaData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(membresiaData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la membresía');
  }
  return await response.json();
};

// Función para eliminar una membresía
export const deleteMembresia = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar la membresía');
  }
  return await response.json();
};
