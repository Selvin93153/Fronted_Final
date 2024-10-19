import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { loader as rolesLoader, Roles } from './Roles/views/Roles';
import { NewRole, action as newRoleAction } from './Roles/views/NewRole';
import { EditRole, loader as editRoleLoader, action as editRoleAction } from './Roles/views/EditRole';
import { action as deleteRoleAction } from './Roles/components/RoleDetails';
import { loader as asignacionesLoader, Asignaciones } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Asignaciones/views/Asignaciones.tsx';
import { NewAsignacion, action as newAsignacionAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Asignaciones/views/NewAsignacion.tsx';
import { EditAsignacion, loader as editAsignacionLoader, action as editAsignacionAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Asignaciones/views/EditAsignacion.tsx';
import { action as deleteAsignacionAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Asignaciones/components/AsignacionDetails.tsx'; // Componente para eliminar asignación

import { loader as entrenadoresLoader, Entrenadores } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/views/Entrenadores.tsx';
import { NewEntrenador, action as newEntrenadorAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/views/NewEntrenador.tsx';
import { EditEntrenador, loader as editEntrenadorLoader, action as editEntrenadorAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/views/EditEntrenador.tsx';
import { action as deleteEntrenadorAction } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/components/EntrenadorDetails.tsx'; // Componente para eliminar asignación

import KidsArea from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Beneficios/KidsArea.tsx';
import Spa from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Beneficios/Spa.tsx';
// src/router.tsx



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
           
            {
                index: true,
                element: <Roles />,
                loader: rolesLoader
            },
            {
                path: 'roles/new',
                element: <NewRole />,
                action: newRoleAction,
            },
            {
                path: 'roles/:rol_id/edit',      
                element: <EditRole />,
                loader: editRoleLoader,
                action: editRoleAction
            },
            {
                path: 'roles/:rol_id/delete',
                element: <Roles />,
                action: deleteRoleAction
            },
            {
                path: 'asignaciones',
                element: <Asignaciones />,
                loader: asignacionesLoader
            },
            {
                path: 'asignaciones/new',
                element: <NewAsignacion />,
                action: newAsignacionAction,
            },
            {
                path: 'asignaciones/:asignacion_id/edit',
                element: <EditAsignacion />,
                loader: editAsignacionLoader,
                action: editAsignacionAction
            },
            {
                path: 'asignaciones/:asignacion_id/delete',
                element: <Asignaciones />,
                action: deleteAsignacionAction
            },
            {
                path: 'entrenadores',
                element: <Entrenadores />,
                loader: entrenadoresLoader
            },
            {
                path: 'entrenadores/new',
                element: <NewEntrenador/>,
                action: newEntrenadorAction,
            },
            {
                path: 'entrenadores/:entrenador_id/edit',
                element: <EditEntrenador />,
                loader: editEntrenadorLoader,
                action: editEntrenadorAction
            },
            {
                path: 'entrenadores/:entrenador_id/delete',
                element: <Entrenadores />,
                action: deleteEntrenadorAction
            },
            {
                path: 'KidsArea', // Ruta para KidsArea
                element: <KidsArea /> 
            },
            {
                path: 'Spa', // Ruta para KidsArea
                element: <Spa /> 
            },
          
             
        ],
    }
]);
