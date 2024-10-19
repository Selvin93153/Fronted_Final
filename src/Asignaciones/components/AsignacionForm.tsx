import { Asignacion } from '../types';

type AsignacionFormProps = {
    asignacion?: Asignacion;
};

export const AsignacionForm = ({ asignacion }: AsignacionFormProps) => {
    return (
        <div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="usuario_id">usuario_id:</label>
                <input
                    id="usuario_id"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="usuario_id"
                    placeholder="usuario_id"
                    defaultValue={asignacion?.usuario_id}  
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="entrenador_id">entrenador_id:</label>
                <input
                    id="entrenador_id"
                    name="entrenador_id"
                    defaultValue={asignacion?.entrenador_id}
                    className="mt-2 block w-full p-3 bg-gray-50"
                    type="number"
                    placeholder="entrenador_id"
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="fecha_asignacion">fecha_asignacion:</label>
                <input
                    id="fecha_asignacion"
                    name="fecha_asignacion"
                    defaultValue={asignacion ? asignacion.fecha_asignacion.toISOString().split('T')[0] : ''}
                    className="mt-2 block w-full p-3 bg-gray-50"
                    type="date"
                    placeholder="fecha_asignacion"
                />
            </div>
        </div>
    );
};
