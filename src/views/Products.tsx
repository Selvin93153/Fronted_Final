import { Link, useLoaderData } from 'react-router-dom'
import { getProducts } from '../services/ProductService';
import { ProductDetails } from '../components/ProductDetails';
import { Product } from '../types';

export const loader = async () => {
    const products = await getProducts();
    return products;
}

export const Products = () => {

    const products = useLoaderData() as Product[];

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Products</h2>
                <Link
                    to='/products/new'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    New Product
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Slug</th>
                            <th className="p-2">Stock</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: any) => (
                            <ProductDetails
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}