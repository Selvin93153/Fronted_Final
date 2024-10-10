import { safeParse, pipe, string, transform, number, parse } from 'valibot';
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from '../types';
import axios from 'axios';

type ProductData = {
    [ k: string ]: FormDataEntryValue;
};

export const addProduct = async (data: ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            title: data.title,
            price: +data.price,
            stock: +data.stock,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`;
            await axios.post(url, {
                title: result.output.title,
                price: result.output.price,
                stock: result.output.stock,
            });
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (data: ProductData, id: Product[ 'id' ]) => {
    try {

        const NumberSchema = pipe(string(), transform(Number), number());

        const result = safeParse(DraftProductSchema, {
            title: data.title,
            price: parse(NumberSchema, data.price),
            stock: parse(NumberSchema, data.stock),
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
            await axios.patch(url, {
                title: result.output.title,
                price: result.output.price,
                stock: result.output.stock,
            });
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductsSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getProductById = async (id: Product[ 'id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const deleteProductById = async (id: Product[ 'id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
        return [];
    }
}
