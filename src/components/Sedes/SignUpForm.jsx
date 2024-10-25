import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dpi: '',
    edad: '',
    sede: '',
    plan: '',
  });
  const navigate = useNavigate();

  // Manejar cambio de campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir al formulario de tarjeta con los datos del formulario
    navigate('/pago-tarjeta', { state: formData });
  };

  return (
    <div className="w-full py-16 bg-gray-100 flex justify-center">
      <div className="max-w-2xl w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Inscripción</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos del formulario */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="w-full p-3 border rounded-lg"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Apellido</label>
            <input
              type="text"
              name="apellido"
              className="w-full p-3 border rounded-lg"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">DPI</label>
            <input
              type="text"
              name="dpi"
              className="w-full p-3 border rounded-lg"
              placeholder="DPI"
              value={formData.dpi}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Edad</label>
            <input
              type="number"
              name="edad"
              className="w-full p-3 border rounded-lg"
              placeholder="Edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sede</label>
            <select
              name="sede"
              className="w-full p-3 border rounded-lg"
              value={formData.sede}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una sede</option>
              <option value="Utz Ulew">Utz Ulew</option>
              <option value="Tinajón Quetzaltenango">Tinajón Quetzaltenango</option>
              <option value="Cobán">Cobán</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Plan</label>
            <select
              name="plan"
              className="w-full p-3 border rounded-lg"
              value={formData.plan}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un plan</option>
              <option value="Público">Público</option>
              <option value="Olympia">Olympia</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          {/* Método de pago */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Método de Pago</label>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Tarjeta"
                  checked={true}
                  readOnly
                  className="mr-2"
                />
                Tarjeta
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
