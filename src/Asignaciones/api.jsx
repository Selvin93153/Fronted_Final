const API_URL = 'http://localhost:3000/asignaciones';

// Función para obtener todas las asignaciones
export const fetchAsignaciones = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener las asignaciones');
  }
  return await response.json();
};

// Función para crear una nueva asignación
export const crearAsignacion = async (asignacionData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(asignacionData),
  });
  if (!response.ok) {
    throw new Error('Error al crear la asignación');
  }
  return await response.json();
};

// Función para actualizar una asignación existente
export const updateAsignacion = async (id, asignacionData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(asignacionData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la asignación');
  }
  return await response.json();
};

// Función para eliminar una asignación
export const deleteAsignacion = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar la asignación');
  }
  return await response.json();
};
