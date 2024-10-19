import axios from 'axios';
import { Asignacion, AsignacionSchema, DraftAsignacionSchema } from '../types';
import { safeParse } from 'valibot';


type AsignacionData = {
    [ k: string ]: FormDataEntryValue;
};

export const addAsignacion = async (data: AsignacionData) => {
    try {
        const result = safeParse(DraftAsignacionSchema, {
            usuario_id: data.usuario_id,
            entrenador_id: data.entrenador_id,
            fecha_asignacion: data.fecha_asignacion,

        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/asignaciones`;
            await axios.post(url, {
                usuario_id: result.output.usuario_id,
                entrenador_id: result.output.entrenador_id,
                fecha_asignacion: result.output.fecha_asignacion,


            });
        } else {
            throw new Error('Invalid asignacion data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateAsignacion = async (data: AsignacionData, asignacion_id: Asignacion[ 'asignacion_id' ]) => {
    try {

        const result = safeParse(DraftAsignacionSchema, {
            usuario_id: data.usuario_id,
            entrenador_id: data.entrenador_id,
            fecha_asignacion: data.fecha_asignacion,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/asignaciones/${asignacion_id}`;
            await axios.patch(url, {
                usuario_id: result.output.usuario_id,
                entrenador_id: result.output.entrenador_id,
                fecha_asignacion: result.output.fecha_asignacion,
            });
        } else {
            throw new Error('Invalid asignacion data');
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAsignaciones = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/asignaciones`;
        const { data } = await axios.get(url);
        const result = safeParse(AsignacionSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid asignaciones data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getAsignacionById = async (asignacion_id: Asignacion[ 'asignacion_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/asignaciones/${asignacion_id}`;
        const { data } = await axios.get(url);
        const result = safeParse(AsignacionSchema, data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Invalid asignacion data');
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const deleteAsignacionById = async (asignacion_id: Asignacion[ 'asignacion_id' ]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/asignaciones/${asignacion_id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
        return [];
    }
}