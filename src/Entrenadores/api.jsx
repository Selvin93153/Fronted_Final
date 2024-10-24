const API_URL = 'http://localhost:3000/api/entrenadores'; // Asegúrate de que esta URL coincida con tu API

// Función para obtener la lista de entrenadores
export const fetchEntrenadores = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener los entrenadores');
  }
  return await response.json();
};

// Función para crear un nuevo entrenador
export const createEntrenador = async (entrenadorData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entrenadorData),
  });
  if (!response.ok) {
    throw new Error('Error al crear el entrenador');
  }
  return await response.json();
};

// Función para actualizar un entrenador
export const updateEntrenador = async (id, entrenadorData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entrenadorData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar el entrenador');
  }
  return await response.json();
};

// Función para eliminar un entrenador
export const deleteEntrenador = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el entrenador');
  }
  return await response.json();
};
