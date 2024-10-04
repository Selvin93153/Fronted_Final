import { array, number, object, string, InferOutput } from 'valibot';

export const DraftProductSchema = object({
    title: string(),
    price: number(),
});

export const ProductSchema = object({
    id: string(),
    title: string(),
    price: number(),
    slug: string(),
    stock: number(),
});

export const ProductsSchema = array(ProductSchema);

export type Product = InferOutput<typeof ProductSchema>