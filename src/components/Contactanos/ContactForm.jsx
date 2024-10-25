import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

// Esquema de validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  correo: yup.string().email('Correo no válido').required('El correo es obligatorio'),
  telefono: yup.string().matches(/^[0-9]{8,12}$/, 'El teléfono debe tener entre 8 y 12 dígitos').required('El teléfono es obligatorio'),
  asunto: yup.string().required('El asunto es obligatorio'),
  mensaje: yup.string().required('El mensaje es obligatorio'),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Datos para enviar a EmailJS
    const templateParams = {
      nombre: data.nombre,
      correo: data.correo,
      telefono: data.telefono,
      asunto: data.asunto,
      mensaje: data.mensaje,
    };

    // Usar EmailJS para enviar el correo
    emailjs.send(
      'service_iw7zyk9', // Reemplaza con tu ID de servicio
      'template_cvdid52', // Reemplaza con tu ID de plantilla
      templateParams,
      '5PbC_LemaU6LHUnSf' // Reemplaza con tu ID de usuario de EmailJS
    )
    .then((response) => {
      console.log('Correo enviado exitosamente:', response.status, response.text);
      alert('Mensaje enviado con éxito.');
      reset(); // Resetea el formulario después de enviar
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.');
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <div>
        <label className="block text-gray-700 mb-2">Nombre</label>
        <input
          {...register('nombre')}
          className={`w-full p-3 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded`}
          placeholder="Nombre"
        />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Correo</label>
        <input
          {...register('correo')}
          className={`w-full p-3 border ${errors.correo ? 'border-red-500' : 'border-gray-300'} rounded`}
          placeholder="Correo"
        />
        {errors.correo && <p className="text-red-500 text-sm">{errors.correo.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Teléfono</label>
        <input
          {...register('telefono')}
          className={`w-full p-3 border ${errors.telefono ? 'border-red-500' : 'border-gray-300'} rounded`}
          placeholder="Número de Teléfono"
        />
        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Asunto</label>
        <input
          {...register('asunto')}
          className={`w-full p-3 border ${errors.asunto ? 'border-red-500' : 'border-gray-300'} rounded`}
          placeholder="Asunto"
        />
        {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Mensaje</label>
        <textarea
          {...register('mensaje')}
          className={`w-full p-3 border ${errors.mensaje ? 'border-red-500' : 'border-gray-300'} rounded h-32`}
          placeholder="Escribe tu mensaje"
        />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
