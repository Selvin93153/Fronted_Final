import { ActionFunctionArgs, redirect, useFetcher, useNavigate } from 'react-router-dom';
import { Product } from '../types'
import { formatCurrency } from '../utils/index';
import { deleteProductById } from '../services/ProductService';

type ProductDetailsProps = {
    product: Product
}

export const action = async ({ params }: ActionFunctionArgs) => {

    if (params.id !== undefined) {
        await deleteProductById(params.id);
        return redirect('/');
    }

}

export const ProductDetails = ({ product }: ProductDetailsProps) => {

    const fetcher = useFetcher();
    const navigate = useNavigate();

    const isAvailable = product.stock;

    return (
        <>
            <tr className="border-b ">
                <td className="p-3 text-lg text-gray-800">
                    {product.title}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {formatCurrency(product.price)}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {product.slug}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {product.stock}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {isAvailable ? 'Available' : 'Unavailable'}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    <div className='flex gap-2 items-center'>
                        <button
                            onClick={() => navigate(`/products/${product.id}/edit`)}
                            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        >
                            Editar
                        </button>
                        <fetcher.Form
                            className='w-full'
                            method='POST'
                            action={`products/${product.id}/delete`}
                            onSubmit={(e) => {
                                if (!confirm('¿Desea eliminar el registro?')) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <input
                                type="submit"
                                value="Eliminar"
                                className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                            />
                        </fetcher.Form>
                    </div>
                </td>
            </tr>
        </>
    )
}
