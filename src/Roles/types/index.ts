import { array, object, string, InferOutput, number } from 'valibot';

export const DraftRoleSchema = object({
    nombre_rol: string(),
});

export const RoleSchema = object({
    rol_id: number(),
    nombre_rol: string(),
});

export const RolesSchema = array(RoleSchema);

export type Role = InferOutput<typeof RoleSchema>;
