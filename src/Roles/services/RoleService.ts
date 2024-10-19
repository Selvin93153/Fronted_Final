import axios from 'axios';
import { Role, DraftRoleSchema, RoleSchema, RolesSchema } from '../types';
import { safeParse } from 'valibot';


type RoleData = {
    [ k: string ]: FormDataEntryValue;
};

export const addRole = async (data: RoleData) => {
    try {
        const result = safeParse(DraftRoleSchema, {
            nombre_rol: data.nombre_rol,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/roles`;
            await axios.post(url, {
                nombre_rol: result.output.nombre_rol,
            });
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateRole = async (data: RoleData, rol_id: Role[ 'rol_id' ]) => {
    try {

        const result = safeParse(DraftRoleSchema, {
            nombre_rol: data.nombre_rol,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/roles/${rol_id}`;
            await axios.patch(url, {
                nombre_rol: result.output.nombre_rol,
            });
        } else {
            throw new Error('Invalid product data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const getRoles = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/roles`;
        const { data } = await axios.get(url);
        const result = safeParse(RolesSchema, data);
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

export const getRoleById = async (rol_id: Role[ 'rol_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/roles/${rol_id}`;
        const { data } = await axios.get(url);
        const result = safeParse(RoleSchema, data);
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

export const deleteRoleById = async (rol_id: Role[ 'rol_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/roles/${rol_id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
        return [];
    }
}