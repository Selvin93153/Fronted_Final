import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { loader as rolesLoader, Roles } from './views/Roles';
import { NewRole, action as newRoleAction } from './views/NewRole';
import { EditRole, loader as editRoleLoader, action as editRoleAction } from './views/EditRole';
import { action as deleteRoleAction } from './components/RoleDetails';
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
            }
           
        ],
    }
]);
