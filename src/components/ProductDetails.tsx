import { Product } from '../types'
import { formatCurrency } from '../utils/index';

type ProductDetailsProps = {
    product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
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
            </tr>
        </>
    )
}
