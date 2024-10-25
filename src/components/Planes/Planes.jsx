import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [billPlan, setBillPlan] = useState('monthly');

  const plans = [
    {
      name: 'Basico',
      price: { monthly: 10, annually: 100 },
      discretion: 'Perfecto para Iniciar.',
      Servicios: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Premium Fit',
      price: { monthly: 20, annually: 200 },
      discretion: 'Tu Vida Premium Fit inicia Aqui.',
      Servicios: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      name: 'Olympia',
      price: { monthly: 30, annually: 300 },
      discretion: 'Avanzados, tu vida es el Fitness.',
      Servicios: ['Feature X', 'Feature Y', 'Feature Z'],
    },
  ];

  return (
    <div className="container mx-auto antialiased text-gray-900 bg-white">
      

      <main className="mx-4 my-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold">plans</span> for your <span className="font-semibold">strategies</span>
          </h1>
          <p className="text-sm font-normal text-gray-400">See below our main three plans for your business, for your startup and agency.</p>
          <p className="text-sm font-normal text-gray-400">It start from here! You can teach yourself what you really like.</p>
        </div>

        {/* Plan switch */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <span className="text-base font-medium">Mensual</span>
          <button
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setBillPlan(billPlan === 'monthly' ? 'annually' : 'monthly')}
          >
            <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billPlan === 'monthly' ? 'translate-x-0' : 'translate-x-8'
              }`}
            ></div>
          </button>
          <span className="text-base font-medium">Anual</span>
        </div>

        {/* Plans */}
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
          {plans.map((plan, i) => (
            <section key={i} className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
              {/* Price */}
              <div className="flex-shrink-0">
                <span className="text-4xl font-medium tracking-tight" style={{ color: plan.name === 'Basico' ? 'green' : '' }}>
                  ${billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}
                </span>
                <span className="text-gray-400">{billPlan === 'monthly' ? ' / Mensual' : ' / Anual'}</span>
              </div>

              <div>
                <h2 className="text-lg font-medium">{plan.name}</h2>
                <p className="text-gray-400">{plan.discretion}</p>
              </div>

              <div className="flex-grow">
                <h3 className="text-md font-medium">Servicios:</h3>
                <ul className="flex flex-col space-y-2 text-gray-400">
                  {plan.Servicios.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-indigo-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-3.5-3.5a1 1 0 111.415-1.415L10 12.586l6.085-6.086A1 1 0 1117.5 6.914L10 14.414z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Adquirir Plan
              </button>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
