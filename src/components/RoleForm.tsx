import { Role } from '../types';

type RoleFormProps = {
    role?: Role;
};

export const RoleForm = ({ role }: RoleFormProps) => {
    return (
        <div className="mb-4">
            <label className="text-gray-800" htmlFor="nombre_rol">nombre_rol:</label>
            <input
                id="nombre_rol"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="nombre_rol"
                name="nombre_rol"  // Cambiado para coincidir con el esquema
                defaultValue={role?.nombre_rol}
            />
        </div>
    );
};
