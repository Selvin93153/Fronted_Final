import React from 'react';
import { useNavigate } from 'react-router-dom';
import gym1 from '../../images/2.jpg';
import gym2 from '../../images/3.jpg';
import gym3 from '../../images/4.avif';

const gyms = [
  {
    name: "Utz Ulew",
    address: "09001 - 19 avenida 2-40 zona 3, S3 102 - Quetzaltenango, Quetzaltenango - 09",
    price: { publico: "Q165.00", premium: "Q215.00", olympia: "Q150.00" },
    imageUrl: gym1,
  },
  {
    name: "Tinajón Quetzaltenango",
    address: "09001 - Diagonal 2 9-62 - Quetzaltenango - 09",
    price: { publico: "Q165.00", premium: "Q215.00", olympia: "Q150.00" },
    imageUrl: gym2,
  },
  {
    name: "Cobán",
    address: "16001 - Primera calle quince guion veinte, Cobán, Alta Verapaz - 16",
    price: { publico: "Q150.00", premium: "Q215.00", olympia: "Q140.00" },
    imageUrl: gym3,
  },
];

const LocationsView = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Entonces, ¿dónde quieres entrenar?</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {gyms.map((gym, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={gym.imageUrl} alt={gym.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{gym.name}</h3>
              <p className="text-gray-600 mt-2">{gym.address}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <p><strong>PÚBLICO:</strong> {gym.price.publico}</p>
                <p><strong>PREMIUM:</strong> {gym.price.premium}</p>
                <p><strong>OLYMPIA:</strong> {gym.price.olympia}</p>
              </div>
              <button
                className="bg-yellow-500 mt-4 w-full text-white p-3 rounded-lg hover:bg-yellow-600"
                onClick={() => navigate('/signup', { state: { gymName: gym.name } })}
              >
                ¡Inscríbete ya!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsView;
