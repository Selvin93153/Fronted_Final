

const gyms = [
  {
    name: "Utz Ulew",
    address: "09001 - 19 avenida 2-40 zona 3, S3 102 - Quetzaltenango, Quetzaltenango - 09",
    price: {
      smart: "Q165.00",
      black: "Q215.00 Q150.00*",
      fit: "Q150.00",
    },
    promotion: "INSCRIPCIÓN GRATIS + 3 PRIMEROS MESES A Q150 EN PLAN BLACK",
    imageUrl: "../images/images.jpeg",
  },
  {
    name: "Tinajón Quetzaltenango",
    address: "09001 - Diagonal 2 9-62 - Quetzaltenango - 09",
    price: {
      smart: "Q165.00",
      black: "Q215.00",
      fit: "Q150.00",
    },
    imageUrl: "../images/2.jpg",
  },
  {
    name: "Cobán",
    address: "16001 - Primera calle quince guion veinte, Cobán, Alta Verapaz - 16",
    price: {
      smart: "Q150.00",
      black: "Q215.00",
      fit: "Q140.00",
    },
    imageUrl: "../images/3.jpg",
  },
];

const Locations = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Entonces, ¿dónde quieres entrenar?</h2>
        <p className="text-lg text-gray-500">Ingresa tu zona, ciudad o Código Postal</p>
      </div>

      {/* Buscador */}
      <div className="w-full max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Ingresa tu zona, ciudad o Código Postal"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Grid de Gimnasios */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {gyms.map((gym, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={gym.imageUrl} alt={gym.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{gym.name}</h3>
              <p className="text-gray-600 mt-2">{gym.address}</p>
              <div className="mt-4">
                <p className="text-green-500 text-sm font-semibold">{gym.promotion}</p>
                <div className="mt-4">
                  <p className="text-gray-600"><strong>SMART:</strong> {gym.price.smart}</p>
                  <p className="text-gray-600"><strong>BLACK:</strong> {gym.price.black}</p>
                  <p className="text-gray-600"><strong>FIT:</strong> {gym.price.fit}</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full">
                  ¡Inscríbete ya!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
