import React, { useState } from 'react';
// Importaciones de imágenes
import ArrozTofu from './imagenes/Arroz_tofu.png';
import Avena from './imagenes/Avena.png';
import BarritaProteinas from './imagenes/Barrita_proteinas.png';
import BatidoDeCaseina from './imagenes/Batido_de_caseína.png';
import BatidoDeFrutoRojo from './imagenes/Batido_de_fruto_rojos.png';
import BatidoDePlatano from './imagenes/Batido_de_plátano.png';
import BatidoDeProteinaVegana from './imagenes/Batido_de_proteína_vegana.png';
import BatidoDeSuero from './imagenes/Batido_de_Suero.png';
import BatidoVerde from './imagenes/Batido_verde.png';
import BebidaDeCoco from './imagenes/Bebida_de_coco.png';
import BebidaDeJengibre from './imagenes/Bebida_de_jengibre.png';
import BistecRes from './imagenes/Bistec_res.png';
import EnsaladaAtun from './imagenes/Ensalada_atun.png';
import EnsaladaGarbanzos from './imagenes/Ensalada_garbanzos.png';
import EnsaladaSalmon from './imagenes/Ensalada_salmon.png';
import FiletePollo from './imagenes/FiletePollo.png';
import FileteSalmonPlancha from './imagenes/FileteSalmonpLancha.png';
import Hummus from './imagenes/Hummus.png';
import InfusionesDeTe from './imagenes/Infusiones_de_té_verde.png';
import ManzanaAlmendra from './imagenes/Manzana_almendra.png';
import NuecesPera from './imagenes/Nueces_pera.png';
import OmeletteClaras from './imagenes/Omelette_claras.png';
import PanIntegral from './imagenes/Pan_integral.png';
import PechugaPollo from './imagenes/Pechugaparrilla.png';
import PolloCurry from './imagenes/Pollo_curry.png';
import TacosLechuga from './imagenes/Tacos_lechuga.png';
import Tilapia from './imagenes/Tilapia.png';
import TostadasIntegrales from './imagenes/Tostadas_integrales_con_aguacate.png';
import WrapPavo from './imagenes/Wrap_pavo.png';
import YogurtGriego from './imagenes/Yogurt_griego.png';

// Asegúrate de importar la imagen de fondo correctamente
import BackgroundImage from './imagenes/logo.png'; // Ajusta la ruta si es necesario

// Categorías de bebidas
const categoriasBebidas = [
    {
        categoria: 'Batidos de Proteína',
        bebidas: [
            { nombre: 'Batido de suero de leche (whey protein)', descripcion: 'Ideal para la recuperación muscular después del entrenamiento.', imagen: BatidoDeSuero },
            { nombre: 'Batido de proteína vegana', descripcion: 'Hecho a base de proteínas vegetales como guisante, arroz o cáñamo.', imagen: BatidoDeProteinaVegana },
            { nombre: 'Batido de caseína', descripcion: 'Proteína de absorción lenta, perfecta para consumir antes de dormir.', imagen: BatidoDeCaseina }
        ]
    },
    {
        categoria: 'Batidos de Frutas',
        bebidas: [
            { nombre: 'Batido de plátano y avena', descripcion: 'Energético y lleno de carbohidratos complejos para reponer energía.', imagen: BatidoDePlatano },
            { nombre: 'Batido de frutos rojos y yogur griego', descripcion: 'Rico en antioxidantes y proteínas.', imagen: BatidoDeFrutoRojo },
            { nombre: 'Batido verde', descripcion: 'Hecho con espinacas, manzana, apio, pepino y limón para una opción refrescante y nutritiva.', imagen: BatidoVerde }
        ]
    },
    {
        categoria: 'Bebidas Energéticas Naturales',
        bebidas: [
            { nombre: 'Bebida de jengibre y cúrcuma', descripcion: 'Antiinflamatoria y energizante.', imagen: BebidaDeJengibre },
            { nombre: 'Bebida de agua de coco', descripcion: 'Para rehidratarse y reponer electrolitos.', imagen: BebidaDeCoco },
            { nombre: 'Infusiones de té verde o matcha', descripcion: 'Ayudan a aumentar la energía sin los azúcares.', imagen: InfusionesDeTe }
        ]
    }
];

// Comidas por día
const comidasPorDia = {
    Lunes: [
        { nombre: 'Tostadas integrales con aguacate y huevos pochados acompañados de jugo de naranja natural.', imagen: TostadasIntegrales },
        { nombre: 'Pechuga de pollo a la parrilla con quinoa y ensalada de espinaca con aderezo de limón.', imagen: PechugaPollo },
        { nombre: 'Yogurt griego con almendras y arándanos frescos un snack saludable.', imagen: YogurtGriego },
        { nombre: 'Filete de salmón a la plancha con puré de camote y vegetales al vapor.', imagen: FileteSalmonPlancha }
    ],
    Martes: [
        { nombre: 'Avena con plátano, nueces y miel perfecto para empezar el día.', imagen: Avena },
        { nombre: 'Ensalada de atún con espinacas pepino, tomate cherry y aceite de oliva.', imagen: EnsaladaAtun },
        { nombre: 'Tacos de lechuga con carne magra de res con salsa de aguacate.', imagen: TacosLechuga }
    ],
    Miércoles: [
        { nombre: 'Omelette de claras de huevo con espinacas, champiñones y queso feta.', imagen: OmeletteClaras },
        { nombre: 'Bowl de arroz integral con tofu, brócoli, zanahorias y salsa de soya baja en sodio.', imagen: ArrozTofu },
        { nombre: 'Barrita de proteínas con frutos secos, un snack rico en energía.', imagen: BarritaProteinas },
        { nombre: 'Tilapia al horno con espárragos y ensalada de kale.', imagen: Tilapia }
    ],
    Jueves: [
        { nombre: 'Ensalada de garbanzos con pepino, cebolla morada, tomate y aceitunas negras.', imagen: EnsaladaGarbanzos },
        { nombre: 'Manzana con mantequilla de almendras, un snack saludable.', imagen: ManzanaAlmendra },
        { nombre: 'Bistec de res magra con puré de coliflor y zanahorias asadas.', imagen: BistecRes }
    ],
    Viernes: [
        { nombre: 'Pan integral con mantequilla de maní acompañado de rodajas de manzana.', imagen: PanIntegral },
        { nombre: 'Filete de pollo a la plancha con batata asada y brócoli al vapor.', imagen: FiletePollo },
        { nombre: 'Hummus con zanahorias y apio, un snack saludable.', imagen: Hummus },
        { nombre: 'Ensalada de salmón ahumado con aguacate, espárragos y limón.', imagen: EnsaladaSalmon }
    ],
    Sábado: [
        { nombre: 'Wrap de pavo con aguacate, lechuga y tomate en tortilla integral.', imagen: WrapPavo },
        { nombre: 'Puñado de nueces y una pera, un snack saludable.', imagen: NuecesPera },
        { nombre: 'Pollo al curry con arroz basmati y ensalada de pepino.', imagen: PolloCurry }
    ]
};

const BebidaMenu = () => {
    const [diaSeleccionado, setDiaSeleccionado] = useState('Lunes');

    return (
        <div className="bg-black text-white p-8 min-h-screen">
            {/* Título principal */}
            <div 
                className="relative text-center mb-8 h-48 bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${BackgroundImage})`, // Asegúrate de que esta ruta esté correcta
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative text-9xl font-bold">
                    <span className="text-white">Restaur</span>
                    <span className="text-yellow-500 text-9xl">ante</span>
                </h1>
            </div>

            {/* Título del Menú de Bebidas */}
            <h2 className="text-3xl font-bold text-center mb-4">
                <span className="text-white">Menú d</span>
                <span className="text-yellow-500 text-4xl">e Bebidas</span>
            </h2>

            {/* Categorías de bebidas */}
            {categoriasBebidas.map((categoria, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-3xl font-bold mb-4 text-left">
                        <span className="text-white">{categoria.categoria}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categoria.bebidas.map((bebida, idx) => (
                            <div key={idx} className="bg-yellow-600 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <img 
                                    src={bebida.imagen} 
                                    alt={bebida.nombre} 
                                    className="w-full h-48 object-cover mb-4 rounded-lg transform transition-all duration-300 hover:scale-110"
                                />
                                <h4 className="text-xl font-semibold mb-2">{bebida.nombre}</h4>
                                <p>{bebida.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Título del Menú de Comidas */}
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">
                <span className="text-white">Menú d</span>
                <span className="text-yellow-500 text-4xl">e Comidas</span>
            </h2>

            {/* Botones de días de la semana */}
            <div className="flex justify-center space-x-4 mb-8">
                {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((dia) => (
                    <button
                        key={dia}
                        className={`${diaSeleccionado === dia ? 'bg-yellow-700' : 'bg-yellow-600'} hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300`}
                        onClick={() => setDiaSeleccionado(dia)}
                    >
                        {dia}
                    </button>
                ))}
            </div>

            {/* Mostrar comidas del día seleccionado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-500">
                {comidasPorDia[diaSeleccionado]?.map((comida, idx) => (
                    <div key={idx} className="bg-yellow-600 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <img 
                            src={comida.imagen} 
                            alt={comida.nombre} 
                            className="w-full h-48 object-cover mb-4 rounded-lg transform transition-all duration-300 hover:scale-110"
                        />
                        <h4 className="text-xl font-semibold mb-2">{comida.nombre}</h4>
                        <p>{comida.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BebidaMenu;
