import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { getAsignacionById, updateAsignacion } from '../services/AsignacionService';
import { Asignacion } from '../types';
import { AsignacionForm } from '../components/AsignacionForm';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (params.asignacion_id !== undefined) {
        const asignacion = await getAsignacionById(+params.asignacion_id);
        if (!asignacion) {
            return redirect('/');
        }
        return asignacion;
    }
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData());
    let error = '';
    if (Object.values(data).includes('')) {
        error = 'All fields are required';
    }

    if (error.length) {
        return error;
    }

    if (params.asignacion_id !== undefined) {
        await updateAsignacion(data, +params.asignacion_id);
        return redirect('/');
    }

}

export const EditAsignacion = () => {

    const asignacion = useLoaderData() as Asignacion;

    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Edit Asignacion</h2>
                <Link
                    to='/'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Back to Products
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form
                className="mt-10"
                method='POST'
            >

                <AsignacionForm asignacion={asignacion} />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Save Product"
                />
            </Form>
        </>
    )
}