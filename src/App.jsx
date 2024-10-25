import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes'; // Importa el enrutador desde routes.jsx

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
