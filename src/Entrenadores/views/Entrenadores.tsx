import { Link, useLoaderData } from 'react-router-dom'
import { getEntrenador} from '../service/EntrenadoresService';
import { EntrenadorDetails } from '../components/EntrenadorDetails';
import { Entrenador} from '../types';

export const loader = async () => {
    const entrenadores = await getEntrenador();
    return entrenadores;
}

export const Entrenadores = () => {

    const entrenadores = useLoaderData() as Entrenador[];

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Entrenadores</h2>
                <Link
                    to='/entrenadores/new'
                    className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    New Entrenador
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">nombre_completo</th>
                            <th className="p-2">edad</th>
                            <th className="p-2">sexo</th>
                            <th className="p-2">telefono</th>
                            <th className="p-2">especialidad</th>
                            <th className="p-2">años_experiencia</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entrenadores.map((entrenador: any) => (
                            <EntrenadorDetails
                                key={entrenador.entrenador_id}
                                entrenador={entrenador}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}