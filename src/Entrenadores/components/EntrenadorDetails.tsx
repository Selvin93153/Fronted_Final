import { ActionFunctionArgs, redirect, useFetcher, useNavigate } from 'react-router-dom';
import { Entrenador } from '../types'
import { deleteEntrenadorById } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Entrenadores/service/EntrenadoresService.tsx';

type EntrenadorDetailsProps = {
    entrenador: Entrenador
}

export const action = async ({ params }: ActionFunctionArgs) => {

    if (params.entrenador_id !== undefined) {
        await deleteEntrenadorById(+params.entrenador_id);
        return redirect('/');
    }

}

export const EntrenadorDetails = ({ entrenador }: EntrenadorDetailsProps) => {

    const fetcher = useFetcher();
    const navigate = useNavigate();

    return (
        <>
            <tr className="border-b ">
                <td className="p-3 text-lg text-gray-800">
                    {entrenador.nombre_completo}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {entrenador.edad}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {entrenador.sexo}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {entrenador.telefono}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {entrenador.especialidad}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {entrenador.años_experiencia}
                </td>

                <td className="p-3 text-lg text-gray-800 ">
                    <div className='flex gap-2 items-center'>
                        <button
                            onClick={() => navigate(`/entrenadores/${entrenador.entrenador_id}/edit`)}
                            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        >
                            Editar
                        </button>
                        <fetcher.Form
                            className='w-full'
                            method='POST'
                            action={`entrenadores/${entrenador.entrenador_id}/delete`}
                            onSubmit={(e) => {
                                if (!confirm('¿Desea eliminar el registro?')) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <input
                                type="submit"
                                value="Eliminar"
                                className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                            />
                        </fetcher.Form>
                    </div>
                </td>
            </tr>
        </>
    )
}