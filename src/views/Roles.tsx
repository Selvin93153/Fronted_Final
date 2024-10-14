import { Link, useLoaderData } from 'react-router-dom';
import { getRoles } from '../services/RoleService';
import { RoleDetails } from '../components/RoleDetails';
import { Role } from '../types';

export const loader = async () => {
   
        const roles = await getRoles();
        return roles;
}

export const Roles = () => {
    const roles = useLoaderData() as Role[];

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Roles</h2>
                <Link
                    to='/roles/new'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    New Role
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">nombre_rol</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role: any) => (
                            <RoleDetails
                                key={role.role_id}
                                role={role}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
