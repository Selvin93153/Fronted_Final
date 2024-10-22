// ContactForm.js
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  correo: yup.string().email('Correo no válido').required('El correo es obligatorio'),
  documento: yup.string().required('El documento es obligatorio'),
  estado: yup.string().required('Seleccione un estado'),
  ciudad: yup.string().required('Seleccione una ciudad'),
  asunto: yup.string().required('El asunto es obligatorio'),
  mensaje: yup.string().required('El mensaje es obligatorio'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/contact', data);
      console.log('Formulario enviado correctamente', response);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <form
      className="w-full bg-white rounded-lg shadow-lg p-6 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Nombre</label>
        <input
          {...register('nombre')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.nombre ? 'border-red-500' : ''
          }`}
          placeholder="Nombre"
        />
        {errors.nombre && <p className="text-red-500 text-xs italic mt-2">{errors.nombre.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Correo</label>
        <input
          {...register('correo')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.correo ? 'border-red-500' : ''
          }`}
          placeholder="Correo"
        />
        {errors.correo && <p className="text-red-500 text-xs italic mt-2">{errors.correo.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Documento</label>
        <input
          {...register('documento')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.documento ? 'border-red-500' : ''
          }`}
          placeholder="Documento"
        />
        {errors.documento && <p className="text-red-500 text-xs italic mt-2">{errors.documento.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Estado</label>
        <input
          {...register('estado')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.estado ? 'border-red-500' : ''
          }`}
          placeholder="Estado"
        />
        {errors.estado && <p className="text-red-500 text-xs italic mt-2">{errors.estado.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Ciudad</label>
        <input
          {...register('ciudad')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.ciudad ? 'border-red-500' : ''
          }`}
          placeholder="Ciudad"
        />
        {errors.ciudad && <p className="text-red-500 text-xs italic mt-2">{errors.ciudad.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Asunto</label>
        <input
          {...register('asunto')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg transition-all duration-200 ${
            errors.asunto ? 'border-red-500' : ''
          }`}
          placeholder="Asunto"
        />
        {errors.asunto && <p className="text-red-500 text-xs italic mt-2">{errors.asunto.message}</p>}
      </div>

      <div>
        <label className="block text-gray-800 text-sm font-bold mb-2">Mensaje</label>
        <textarea
          {...register('mensaje')}
          className={`border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 w-full py-3 px-4 rounded-lg h-32 transition-all duration-200 ${
            errors.mensaje ? 'border-red-500' : ''
          }`}
          placeholder="Escribe tu mensaje"
        />
        {errors.mensaje && <p className="text-red-500 text-xs italic mt-2">{errors.mensaje.message}</p>}
      </div>

      <div className="flex justify-end">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
