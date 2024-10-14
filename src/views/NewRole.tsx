import { ActionFunctionArgs, Form, Link, redirect, useActionData } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { addRole } from '../services/RoleService';
import { RoleForm } from '../components/RoleForm';

export const action = async ({ request }: ActionFunctionArgs) => {
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

    // Intentar agregar el nuevo rol
    await addRole(data);
    return redirect('/');
};

export const NewRole = () => {
    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Add Role</h2>
                <Link
                    to='/'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Back to Roles
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form className="mt-10" method='POST'>
                <RoleForm />
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Add Role"
                />
            </Form>
        </>
    );
};
