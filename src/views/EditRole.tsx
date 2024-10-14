import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { getRoleById, updateRole } from '../services/RoleService';
import { Role } from '../types/index';
import { RoleForm } from '../components/RoleForm';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (params.rol_id !== undefined) {
        const role = await getRoleById(+params.rol_id);
        if (!role) {
            return redirect('/');
        }
        return role;
    }
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData());
    let error = '';

    // Verificar si hay campos vacíos
    if (Object.values(data).includes('')) {
        error = 'All fields are required';
    }

    // Si hay un error, retornarlo
    if (error.length) {
        return error;
    }

    // Actualizar el rol si `rol_id` está definido
    if (params.rol_id !== undefined) {
        await updateRole(data, +params.rol_id);
        return redirect('/');
    }
}

export const EditRole = () => {
    const role = useLoaderData() as Role;
    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Edit Role</h2>
                <Link
                    to='/'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Back to Roles
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form className="mt-10" method='POST'>
                <RoleForm role={role} />
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Save Role"
                />
            </Form>
        </>
    )
}
