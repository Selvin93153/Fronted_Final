import { Role } from '../types';
import { ActionFunctionArgs, redirect, useFetcher, useNavigate } from 'react-router-dom';
import { deleteRoleById } from '../services/RoleService';


type RoleDetailsProps = {
    role: Role;
};

export const action = async ({ params }: ActionFunctionArgs) => {

    if (params.rol_id !== undefined) {
        await deleteRoleById(+params.rol_id);
        return redirect('/');
    }

}

export const RoleDetails = ({ role }: RoleDetailsProps) => {
    const fetcher = useFetcher();
    const navigate = useNavigate();

    return (
        <>
            <tr className="border-b">
                <td className="p-3 text-lg text-gray-800">{role.nombre_rol}</td>
                <td className="p-3 text-lg text-gray-800">
                    <div className='flex gap-2 items-center'>
                        <button
                            onClick={() => navigate(`/roles/${role.rol_id}/edit`)}
                            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        >
                            Edit
                        </button>
                        <fetcher.Form
                            className='w-full'
                            method='POST'
                            action={`roles/${role.rol_id}/delete`}
                            onSubmit={(e) => {
                                if (!confirm('Quiere eliminar el registro?')) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <input
                                type="submit"
                                value="Delete"
                                className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                            />
                        </fetcher.Form>
                    </div>
                </td>
            </tr>
        </>
    );
};
