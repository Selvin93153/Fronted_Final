const API_URL = 'http://localhost:3000/clientes';

export const fetchClientes = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener los clientes');
  }
  return await response.json();
};

export const createCliente = async (clienteData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clienteData),
  });
  if (!response.ok) {
    throw new Error('Error al crear cliente');
  }
  return await response.json();
};

export const updateCliente = async (id, clienteData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clienteData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar cliente');
  }
  return await response.json();
};

// Añade la función para eliminar cliente
export const deleteCliente = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar cliente');
  }
  return await response.json();
};
