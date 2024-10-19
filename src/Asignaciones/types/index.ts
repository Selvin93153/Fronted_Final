import { array, object, InferOutput, number, date } from 'valibot';

export const DraftAsignacionSchema = object({
    usuario_id: number(),
    entrenador_id: number(),
    fecha_asignacion: date(),
});

export const AsignacionSchema = object({
    asignacion_id: number(),
    usuario_id: number(),
    entrenador_id: number(),
    fecha_asignacion: date(),
});


export const AsignacionesSchema = array(AsignacionSchema);

export type Asignacion = InferOutput<typeof AsignacionSchema>;
