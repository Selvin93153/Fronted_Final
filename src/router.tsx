import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { loader as rolesLoader, Roles } from './views/Roles';
import { NewRole, action as newRoleAction } from './views/NewRole';
import { EditRole, loader as editRoleLoader, action as editRoleAction } from './views/EditRole';
import { action as deleteRoleAction } from './components/RoleDetails';
import Contact from './views/Contact';
import LocationsView from './views/LocationsView';

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
                path: 'roles/:rol_id/edit',      // ROA Pattern - Resourse Oriented design
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
                path: 'contact',  // Nueva ruta para la página de contacto
                element: <Contact />,  // Renderiza el componente ContactView
            },

            {
                path: 'locations',  // Nueva ruta para la página de contacto
                element: <LocationsView />,  // Renderiza el componente ContactView
            }
        ],
    }
]);
