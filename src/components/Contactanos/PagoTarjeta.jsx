import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PagoTarjeta = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    cvv: '',
    expirationDate: '',
  });

  // Maneja cambios en los campos del formulario
  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  // Maneja la confirmación del pago
  const handleConfirm = () => {
    const { cardNumber, cardHolderName, cvv, expirationDate } = cardDetails;

    if (!cardNumber || !cardHolderName || !cvv || !expirationDate) {
      alert('Por favor, complete todos los campos de la tarjeta.');
      return;
    }

    // Lógica de confirmación de pago con tarjeta (puede incluir validación adicional aquí)
    alert('Pago con tarjeta confirmado.');
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Pago con Tarjeta</h2>

        {/* Información del usuario */}
        <div className="space-y-2 mb-4">
          <p><strong>Nombre:</strong> {state.nombre}</p>
          <p><strong>Apellido:</strong> {state.apellido}</p>
          <p><strong>DPI:</strong> {state.dpi}</p>
          <p><strong>Edad:</strong> {state.edad}</p>
          <p><strong>Sede:</strong> {state.sede}</p>
          <p><strong>Plan:</strong> {state.plan}</p>
        </div>

        {/* Formulario de tarjeta */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre del Titular</label>
            <input
              type="text"
              name="cardHolderName"
              className="w-full p-3 border rounded-lg"
              placeholder="Nombre del Titular"
              value={cardDetails.cardHolderName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Número de Tarjeta</label>
            <input
              type="text"
              name="cardNumber"
              className="w-full p-3 border rounded-lg"
              placeholder="Número de Tarjeta"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              maxLength="16"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Fecha de Expiración</label>
              <input
                type="text"
                name="expirationDate"
                className="w-full p-3 border rounded-lg"
                placeholder="MM/AA"
                value={cardDetails.expirationDate}
                onChange={handleInputChange}
                maxLength="5"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                className="w-full p-3 border rounded-lg"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                maxLength="3"
                required
              />
            </div>
          </div>
          
          <button
            className="w-full bg-yellow-500 text-white py-3 mt-6 rounded-lg font-bold hover:bg-yellow-600"
            onClick={handleConfirm}
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagoTarjeta;
