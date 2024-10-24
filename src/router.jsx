import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout.jsx'; // Asegúrate de tener un layout definido
import ClientesList from './Clientes/ClientesList.jsx'; // Lista de clientes
import CrearCliente from './Clientes/CrearCliente.jsx'; // Formulario para crear un nuevo cliente
import ActualizarCliente from './Clientes/ActualizarCliente.jsx'; // Formulario para editar un cliente

import Home from './components/HomePage/HomePage.jsx'; // Página de inicio
import Administracion from './Beneficios/Administracion.jsx'; // Ruta de administración
import KidsArea from './Beneficios/KidsArea.jsx'; // Ruta de kids area
import SpaArea from './Beneficios/SpaArea.jsx'; // Ruta de spa area
import RolesList from './roles/RolesList.jsx'; // Lista de roles
import CrearRoles from './roles/CrearRoles.jsx'; // Formulario para crear un nuevo rol
import ActualizarRoles from './roles/ActualizarRoles.jsx'; // Formulario para editar un rol
import EntrenadoresList from './Entrenadores/EntrenadoresList.jsx'; // Lista de entrenadores
import CrearEntrenador from './Entrenadores/CrearEntrenador.jsx'; // Formulario para crear un nuevo entrenador
import ActualizarEntrenador from './Entrenadores/ActualizarEntrenador.jsx'; // Formulario para editar un entrenador

import MembresiaList from './membresias/MembresiaList.jsx';
import CrearMembresia from './membresias/CrearMembresia.jsx';
import ActualizarMembresia from './membresias/ActualizarMembresia.jsx';
import DeleteMembresia from './membresias/DeleteMembresia';

import UsuariosList from './usuarios/UsuariosList.jsx';

import AsignacionesList from './Asignaciones/AsignacionesList.jsx';
import CrearAsignacion from './Asignaciones/CrearAsignacion.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Componente layout
        children: [
            {
                index: true,
                element: <Home />, // Página de inicio
            },
            {
                path: 'clientes',
                element: <ClientesList />, // Lista de clientes
            },
            {
                path: 'clientes/new',
                element: <CrearCliente />, // Formulario para crear un nuevo cliente
            },
            {
                path: 'clientes/:id/edit',
                element: <ActualizarCliente />, // Formulario para editar un cliente
            },
            {
                path: 'clientes/:id/delete',
                element: <ClientesList />, // Redirige a la lista después de eliminar
                action: async ({ params }) => {
                    await deleteClienteAction(params.id); // Llama a la acción para eliminar cliente
                    return null;
                },
            },
            {
                path: 'roles',
                element: <RolesList />, // Lista de roles
            },
            {
                path: 'roles/new',
                element: <CrearRoles />, // Formulario para crear un nuevo rol
            },
            {
                path: 'roles/:id/edit',
                element: <ActualizarRoles />, // Formulario para editar un rol
            },
            {
                path: 'roles/:id/delete',
                element: <RolesList />, // Redirige a la lista después de eliminar
                action: async ({ params }) => {
                    await deleteRoleAction(params.id); // Llama a la acción para eliminar rol
                    return null;
                },
            },
            {
                path: 'entrenadores',
                element: <EntrenadoresList />, // Lista de entrenadores
            },
            {
                path: 'entrenadores/new',
                element: <CrearEntrenador />, // Formulario para crear un nuevo entrenador
            },
            {
                path: 'entrenadores/:id/edit',
                element: <ActualizarEntrenador />, // Formulario para editar un entrenador
            },
            {
                path: 'administracion',
                element: <Administracion />, // Ruta de administración
            },
            {
                path: 'kidsarea',
                element: <KidsArea />, // Ruta de kids area
            },
            {
                path: 'spaarea',
                element: <SpaArea />, // Ruta de spa area
            },
            {
                path: 'membresias',
                element: <MembresiaList />, // Lista de membresías
            },
            {
                path: 'membresias/new',
                element: <CrearMembresia />, // Formulario para crear una nueva membresía
            },
            {
                path: 'membresias/:id/edit',
                element: <ActualizarMembresia />, // Formulario para editar una membresía
            },
            {
                path: 'membresias/:id/delete',
                element: <DeleteMembresia />, // Formulario para eliminar una membresía
            },
            {
                path: 'usuarios',
                element: <UsuariosList />, // Lista de membresías
            },
            {
                path: 'asignaciones',
                element: <AsignacionesList />, // Lista de membresías
            },
            {
                path: 'asignaciones/new',
                element: <CrearAsignacion />, // Formulario para crear una nueva membresía
            },
            
        ],
    },
]);
