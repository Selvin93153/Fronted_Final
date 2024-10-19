import { Asignacion } from '../types';
import { ActionFunctionArgs, redirect, useFetcher, useNavigate } from 'react-router-dom';
import { deleteAsignacionById } from 'C:/Users/Admin/Desktop/Fronted_Fina/src/Asignaciones/services/AsignacionService.ts';


type AsignacionDetailsProps = {
    asignacion: Asignacion;
};

export const action = async ({ params }: ActionFunctionArgs) => {

    if (params.asignacion_id !== undefined) {
        await deleteAsignacionById(+params.asignacion_id);
        return redirect('/');
    }

}

export const AsignacionDetails = ({ asignacion }: AsignacionDetailsProps) => {
    const fetcher = useFetcher();
    const navigate = useNavigate();

    return (
        <>
            <tr className="border-b">
                <td className="p-3 text-lg text-gray-800">{asignacion.usuario_id}</td>
                
                <td className="p-3 text-lg text-gray-800">
                    {asignacion.entrenador_id}
                </td>
                <td className="p-3 text-lg text-gray-800">
                  {asignacion.fecha_asignacion.toLocaleDateString()}
                 </td>

                <td className="p-3 text-lg text-gray-800">
                    <div className='flex gap-2 items-center'>
                        <button
                            onClick={() => navigate(`/asignaciones/${asignacion.asignacion_id}/edit`)}
                            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        >
                            Edit
                        </button>
                        <fetcher.Form
                            className='w-full'
                            method='POST'
                            action={`asignaciones/${asignacion.asignacion_id}/delete`}
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
