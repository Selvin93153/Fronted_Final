import { safeParse, pipe, string, transform, number, parse } from 'valibot';
import { DraftEntrenadorSchema, Entrenador, EntrenadorSchema, EntrenadorsSchema } from '../types';
import axios from 'axios';

type EntrenadorData = {
    [ k: string ]: FormDataEntryValue;
};

export const addEntrenador = async (data: EntrenadorData) => {
    try {
        const result = safeParse(DraftEntrenadorSchema, {
            nombre_completo: data.nombre_completo,
            edad: data.edad,
            sexo: data.sexo,
            telefono: data.telefono,
            especialidad: data.especialidad,
            años_experiencia: data.años_experiencia,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/entrenadores`;
            await axios.post(url, {
                nombre_completo: result.output.nombre_completo,
                edad: result.output.edad,
                sexo: result.output.sexo,
                telefono: result.output.telefono,
                especialidad: result.output.especialidad,
                años_experiencia: result.output.años_experiencia,

            });
        } else {
            throw new Error('Invalid entrenador data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateEntrenador = async (data: EntrenadorData, entrenador_id: Entrenador[ 'entrenador_id' ]) => {
    try {

        const NumberSchema = pipe(string(), transform(Number), number());

        const result = safeParse(DraftEntrenadorSchema, {
            nombre_completo: data.nombre_completo,
            edad: parse(NumberSchema, data.edad),
            sexo: data.sexo,
            telefono: data.telefono,
            especialidad: data.especialidad,
            años_experiencia: parse(NumberSchema, data.años_experiencia),
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/entrenadores/${entrenador_id}`;
            await axios.patch(url, {
                nombre_completo: result.output.nombre_completo,
                edad: result.output.edad,
                sexo: result.output.sexo,
                telefono: result.output.telefono,
                especialidad: result.output.especialidad,
                años_experiencia: result.output.años_experiencia,
            });
        } else {
            throw new Error('Invalid entrenador data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const getEntrenador = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/entrenadores`;
        const { data } = await axios.get(url);
        const result = safeParse(EntrenadorsSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid entrenador data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getEntrenadorById = async (entrenador_id: Entrenador[ 'entrenador_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/entrenadores/${entrenador_id}`;
        const { data } = await axios.get(url);
        const result = safeParse(EntrenadorSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid entrenador data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const deleteEntrenadorById = async (entrenador_id: Entrenador[ 'entrenador_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/entrenadores/${entrenador_id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
        return [];
    }
}