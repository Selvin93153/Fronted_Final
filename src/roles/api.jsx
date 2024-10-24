// api.jsx
const API_URL = import.meta.env.VITE_API_URL; // Asegúrate de tener esta variable en tu archivo .env

const fetchRoles = async () => {
  const response = await fetch(`${API_URL}/api/roles`); // Ajusta la URL según tu API
  if (!response.ok) {
    throw new Error('Error al obtener los roles');
  }
  return await response.json();
};

const createRole = async (role) => {
  const response = await fetch(`${API_URL}/api/roles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(role),
  });
  
  if (!response.ok) {
    throw new Error('Error al crear el rol');
  }
  
  return await response.json();
};

const updateRole = async (id, role) => {
  const response = await fetch(`${API_URL}/api/roles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(role),
  });
  
  if (!response.ok) {
    throw new Error('Error al actualizar el rol');
  }
  
  return await response.json();
};

const deleteRole = async (id) => {
  const response = await fetch(`${API_URL}/api/roles/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Error al eliminar el rol');
  }
  
  return await response.json();
};

export default {
  fetchRoles,
  createRole,
  updateRole,
  deleteRole,
};
