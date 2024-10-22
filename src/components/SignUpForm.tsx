import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SignUpForm = () => {
  const { state } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <div className="w-full py-16 bg-gray-100 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Inscripción</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Nombre</label>
            <input className="w-full p-3 border rounded-lg" placeholder="Nombre" />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Apellido</label>
            <input className="w-full p-3 border rounded-lg" placeholder="Apellido" />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">DPI</label>
            <input className="w-full p-3 border rounded-lg" placeholder="DPI" />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Edad</label>
            <input className="w-full p-3 border rounded-lg" placeholder="Edad" />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Sede</label>
            <select className="w-full p-3 border rounded-lg">
              <option value={state?.gymName || ''}>{state?.gymName || 'Seleccione una sede'}</option>
              <option value="Utz Ulew">Utz Ulew</option>
              <option value="Tinajón Quetzaltenango">Tinajón Quetzaltenango</option>
              <option value="Cobán">Cobán</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Tipo de Plan</label>
            <select className="w-full p-3 border rounded-lg">
              <option value="">Seleccione un plan</option>
              <option value="Público">Público</option>
              <option value="Olympia">Olympia</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2">Método de Pago</label>
            <div className="flex space-x-4">
              <button type="button" className={`p-3 border rounded-lg ${paymentMethod === 'efectivo' ? 'bg-yellow-500 text-white' : ''}`} onClick={() => handlePaymentChange('efectivo')}>
                Efectivo
              </button>
              <button type="button" className={`p-3 border rounded-lg ${paymentMethod === 'tarjeta' ? 'bg-yellow-500 text-white' : ''}`} onClick={() => handlePaymentChange('tarjeta')}>
                Tarjeta
              </button>
            </div>
          </div>

          {paymentMethod === 'tarjeta' && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 text-sm font-bold mb-2">Número de Tarjeta</label>
                <input className="w-full p-3 border rounded-lg" name="cardNumber" onChange={handleCardChange} placeholder="Número de Tarjeta" />
              </div>
              <div>
                <label className="block text-gray-800 text-sm font-bold mb-2">Nombre del Titular</label>
                <input className="w-full p-3 border rounded-lg" name="cardHolder" onChange={handleCardChange} placeholder="Nombre del Titular" />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label className="block text-gray-800 text-sm font-bold mb-2">Fecha de Expiración</label>
                  <input className="w-full p-3 border rounded-lg" name="expiryDate" onChange={handleCardChange} placeholder="MM/AA" />
                </div>
                <div>
                  <label className="block text-gray-800 text-sm font-bold mb-2">CVV</label>
                  <input className="w-full p-3 border rounded-lg" name="cvv" onChange={handleCardChange} placeholder="CVV" />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
