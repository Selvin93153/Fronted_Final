const API_URL_CONTROLES = 'http://localhost:3000/control';

// Función para obtener todos los controles
export const fetchControles = async () => {
  const response = await fetch(API_URL_CONTROLES);
  if (!response.ok) {
    throw new Error('Error al obtener los controles');
  }
  return await response.json();
};

// Función para crear un nuevo control
export const crearControl = async (controlData) => {
  const response = await fetch(API_URL_CONTROLES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(controlData),
  });
  if (!response.ok) {
    throw new Error('Error al crear el control');
  }
  return await response.json();
};

// Función para actualizar un control existente
export const updateControl = async (id, controlData) => {
  const response = await fetch(`${API_URL_CONTROLES}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(controlData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar el control');
  }
  return await response.json();
};

// Función para eliminar un control
export const deleteControl = async (id) => {
  const response = await fetch(`${API_URL_CONTROLES}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el control');
  }
  return await response.json();
};
