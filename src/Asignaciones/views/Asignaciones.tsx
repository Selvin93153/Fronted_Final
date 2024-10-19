import { Link, useLoaderData } from 'react-router-dom'
import { getAsignaciones } from '../services/AsignacionService';
import { AsignacionDetails } from '../components/AsignacionDetails';
import { Asignacion } from '../types';

export const loader = async () => {
    const asignaciones = await getAsignaciones();
    return asignaciones;
}

export const Asignaciones = () => {

    const asignaciones = useLoaderData() as Asignacion[];

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Asignaciones</h2>
                <Link
                    to='/asignaciones/new'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    New Asignacion
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">usuario_id</th>
                            <th className="p-2">entrenador_id</th>
                            <th className="p-2">fecha_asignacion</th>

                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {asignaciones.map((asignacion: any) => (
                            <AsignacionDetails
                                key={asignacion.asignacion_id}
                                asignacion={asignacion}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}