import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from 'react-router-dom'

import { ErrorMessage } from '../components/ErrorMessage';
import { getProductById, updateProduct } from '../services/ProductService';
import { Product } from '../types/index';
import { ProductForm } from '../components/ProductForm';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (params.id !== undefined) {
        const product = await getProductById(params.id);
        if (!product) {
            return redirect('/');
        }
        return product;
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

    if (params.id !== undefined) {
        await updateProduct(data, params.id);
        return redirect('/');
    }

}

export const EditProduct = () => {

    const product = useLoaderData() as Product;

    const error = useActionData() as string;

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Edit Product</h2>
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

                <ProductForm product={product} />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Save Product"
                />
            </Form>
        </>
    )
}