import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from 'react-router-dom'

import { ErrorMessage } from '../components/ErrorMessage';
import { getEntrenadorById, updateEntrenador } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/service/EntrenadoresService';
import { Entrenador } from '../types/index';
import { EntrenadoresForm } from '../components/EntrenadoresForm';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (params.entrenador_id !== undefined) {
        const entrenador = await getEntrenadorById(+params.entrenador_id);
        if (!entrenador) {
            return redirect('/');
        }
        return entrenador;
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

    if (params.entrenador_id !== undefined) {
        await updateEntrenador(data, +params.entrenador_id);
        return redirect('/');
    }

}

export const EditEntrenador = () => {

    const entrenador = useLoaderData() as Entrenador;

    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Edit Entrenador</h2>
                <Link
                    to='/'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Back to Entrenadores
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form
                className="mt-10"
                method='POST'
            >

                <EntrenadoresForm entrenador={entrenador} />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Save Product"
                />
            </Form>
        </>
    )
}