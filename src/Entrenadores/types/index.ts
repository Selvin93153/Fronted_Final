import { array, number, object, string, InferOutput } from 'valibot';

export const DraftEntrenadorSchema = object({
    nombre_completo: string(),
    edad: number(),
    sexo: string(),
    telefono: string(),
    especialidad: string(),
    años_experiencia: number(),
});

export const EntrenadorSchema = object({
    entrenador_id: number(),
    nombre_completo: string(),
    edad: number(),
    sexo: string(),
    telefono: string(),
    especialidad: string(),
    años_experiencia: number(),
});

export const EntrenadorsSchema = array(EntrenadorSchema);

export type Entrenador = InferOutput<typeof EntrenadorSchema>