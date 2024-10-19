import { ActionFunctionArgs, Form, Link, redirect, useActionData } from 'react-router-dom';
import { addAsignacion } from '../services/AsignacionService';
import { AsignacionForm } from '../components/AsignacionForm';
import { ErrorMessage } from '../components/ErrorMessage';

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()); // Convertimos el FormData a un objeto
    let error = '';


    // Validación de campos vacíos
    if (Object.values(data).includes('')) {
        error = 'All fields are required';
    }

    // Devolver el error si los campos están vacíos
    if (error.length) {
        return error;
    }

    await addAsignacion(data);

    return redirect('/');
}

   

export const NewAsignacion = () => {
    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Add Asignación</h2>
                <Link
                    to='/asignaciones'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Back to Asignaciones
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form method="POST" className="mt-10">
                <AsignacionForm />
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Add Asignación"
                />
            </Form>
        </>
    );
};
