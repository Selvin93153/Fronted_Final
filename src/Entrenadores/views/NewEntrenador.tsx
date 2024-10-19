import { ActionFunctionArgs, Form, Link, redirect, useActionData } from 'react-router-dom'

import { ErrorMessage } from '../components/ErrorMessage';
import { addEntrenador } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/service/EntrenadoresService';
import { EntrenadoresForm } from '../components/EntrenadoresForm';

export const action = async ({ request }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData());
    let error = '';
    if (Object.values(data).includes('')) {
        error = 'All fields are required';
    }

    if (error.length) {
        return error;
    }

    await addEntrenador(data);

    return redirect('/');
}

export const NewEntrenador = () => {

    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Add Entrenador</h2>
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

                <EntrenadoresForm />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Add Entrenadores"
                />
            </Form>
        </>
    )
}