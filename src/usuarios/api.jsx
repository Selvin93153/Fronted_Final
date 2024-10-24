const API_URL = 'http://localhost:3000/usuarios';

// Función para obtener todos los usuarios
export const fetchUsuarios = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }
  return await response.json();
};

// Función para crear un nuevo usuario
export const crearUsuario = async (usuarioData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuarioData),
  });
  if (!response.ok) {
    throw new Error('Error al crear el usuario');
  }
  return await response.json();
};

// Función para actualizar un usuario existente
export const updateUsuario = async (id, usuarioData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuarioData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar el usuario');
  }
  return await response.json();
};

// Función para eliminar un usuario
export const deleteUsuario = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el usuario');
  }
  return await response.json();
};
