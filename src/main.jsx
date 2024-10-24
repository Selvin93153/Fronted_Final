import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; // Importa tu configuración de rutas
import './index.css'; // Asegúrate de que Tailwind CSS esté importado aquí

// Obtenemos el elemento con ID 'root'
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("No se encontró el elemento con ID 'root'");
}
