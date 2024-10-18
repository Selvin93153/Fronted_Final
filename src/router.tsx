import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from './components/secciones/HomePage/HomePage';
import { loader as rolesLoader, Roles } from './views/Roles';
import { NewRole, action as newRoleAction } from './views/NewRole';
import { EditRole, loader as editRoleLoader, action as editRoleAction } from './views/EditRole';
import { action as deleteRoleAction } from './components/RoleDetails';
import Header from './components/Header'; // Asegúrate de importar el Header

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                index: true,
                element: <HomePage />,  // HomePage como la ruta principal
            },
            {
                path: 'roles',
                element: <Roles />,
                loader: rolesLoader,
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
                action: editRoleAction,
            },
            {
                path: 'roles/:rol_id/delete',
                element: <Roles />,
                action: deleteRoleAction,
            }
        ],
    }
]);
