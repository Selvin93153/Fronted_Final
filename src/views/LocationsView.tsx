
// Importar las imágenes desde 'src'
import gym1 from '../images/images.jpeg';
import gym2 from '../images/2.jpg';
import gym3 from '../images/3.jpg';

const gyms = [
  {
    name: "Utz Ulew",
    address: "09001 - 19 avenida 2-40 zona 3, S3 102 - Quetzaltenango, Quetzaltenango - 09",
    price: {
      publico: "Q165.00",
      premium: "Q215.00",
      olympia: "Q150.00",
    },
    imageUrl: gym1,
  },
  {
    name: "Tinajón Quetzaltenango",
    address: "09001 - Diagonal 2 9-62 - Quetzaltenango - 09",
    price: {
      publico: "Q165.00",
      premium: "Q215.00",
      olympia: "Q150.00",
    },
    imageUrl: gym2,
  },
  {
    name: "Cobán",
    address: "16001 - Primera calle quince guion veinte, Cobán, Alta Verapaz - 16",
    price: {
      publico: "Q150.00",
      premium: "Q215.00",
      olympia: "Q140.00",
    },
    imageUrl: gym3,
  },
];

const Locations = () => {
  return (
    <>
      <div className="w-full py-16 bg-gray-100">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Entonces, ¿dónde quieres entrenar?</h2>
        </div>

        {/* Grid de Gimnasios */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {gyms.map((gym, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <img src={gym.imageUrl} alt={gym.name} className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{gym.name}</h3>
                <p className="text-gray-600 mt-2">{gym.address}</p>
                <div className="mt-4">
                  <p className="text-gray-600"><strong>PÚBLICO:</strong> {gym.price.publico}</p>
                  <p className="text-gray-600"><strong>PREMIUM:</strong> {gym.price.premium}</p>
                  <p className="text-gray-600"><strong>OLYMPIA:</strong> {gym.price.olympia}</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
                    ¡Inscríbete ya!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black flex flex-col justify-center items-center py-12">
        <h2 className="text-xl mb-4 text-white font-semibold">Síguenos</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
        </div>
        <div className="border-t border-gray-600 mt-4 pt-4 w-full text-center">
          <p className="text-sm text-gray-500">© 2024 AtlasGym. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Locations;
