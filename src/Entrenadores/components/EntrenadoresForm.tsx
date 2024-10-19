import { Entrenador } from '../types'

type EntrenadorFormProps = {
    entrenador?: Entrenador
}

export const EntrenadoresForm = ({ entrenador }: EntrenadorFormProps) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre_completo"
                >nombre_completo:</label>
                <input
                    id="nombre_completo"
                    type="string"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="nombre_completo"
                    name="nombre_completo"
                    defaultValue={entrenador?.nombre_completo}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="edad"
                >edad:</label>
                <input
                    id="edad"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="edad"
                    name="edad"
                    defaultValue={entrenador?.edad}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="sexo"
                >sexo:</label>
                <input
                    id="sexo"
                    type="string"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="sexo"
                    name="sexo"
                    defaultValue={entrenador?.sexo}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >telefono:</label>
                <input
                    id="telefono"
                    type="string"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="telefono"
                    name="telefono"
                    defaultValue={entrenador?.telefono}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="especialidad"
                >especialidad:</label>
                <input
                    id="especialidad"
                    type="string"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="especialidad"
                    name="especialidad"
                    defaultValue={entrenador?.especialidad}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="años_experiencia"
                >años_experiencia:</label>
                <input
                    id="años_experiencia"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="años_experiencia"
                    name="años_experiencia"
                    defaultValue={entrenador?.años_experiencia}
                />
            </div>
        </>
    )
}