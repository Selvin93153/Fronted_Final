// src/routes.js
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer';
import HomeStore from './components/Tienda/HomeStore';
import Cart from './components/Tienda/Cart';
import Login from './components/Login/Login';
import Planes from './components/Planes/Planes';
import Contact from './components/Contactanos/Contact';
import PagoTarjeta from './components/Contactanos/PagoTarjeta';
import LocationsView from './components/Sedes/LocationsView';
import SignUpForm from './components/Sedes/SignUpForm';
import AboutUs from './components/SobreNosotros/AboutUs';
import BebidaMenu from './components/Restaurante/BebidaMenu';


const Root = () => (
  <>
    <Header />
    <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,  // HomePage como la ruta principal
      },
      {
        path: "servicios",
        element: <Servicios />, // Define la ruta para Servicios
      },
      {
        path: "Login", // Define la ruta para Login
        element: <Login />,
      },
      {
        path: "HomeStore", // Define la ruta para HomeStore
        element: <HomeStore />,
      },
      {
        path: "cart", // Define la ruta para Cart
        element: <Cart />,
      },
      {
        path: "Planes", // Define la ruta para Cart
        element: <Planes />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'LocationsView',
        element: <LocationsView />,
      },
      {
        path: 'signup',
        element: <SignUpForm />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'pago-tarjeta',
        element: <PagoTarjeta />,
      },
      {
        path: 'BebidaMenu',
        element: <BebidaMenu />,
      },
    ],
  },
]);

export default router;
