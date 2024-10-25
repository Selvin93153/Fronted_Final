import React from 'react';
import logo from '../images/LogoGym.png';
import { FaPhone, FaHome, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="flex-1 mb-8 md:mb-0 text-left md:mr-8"> {/* Mueve el div del logo hacia la izquierda */}
          <img src={logo} alt="Logo" className="max-w-xs h-auto mb-4" />
          <p className="text-sm mb-2">
            Breve descripción sobre tu sitio aquí. Personalízalo según tu proyecto.
          </p>
          <p className="text-xs">© 2024 Todos los derechos reservados</p>
        </div>

        <div className="flex-grow mb-8 md:mb-0 text-left md:mt-20 md:ml-4 md:mr-4"> {/* Ajusta márgenes horizontales */}
          <h4 className="font-bold mb-4">Recursos</h4>
          <ul>
            <li className="mb-2"><a href="#">SaaS Development</a></li>
            <li className="mb-2"><a href="#">User Flow</a></li>
          </ul>
        </div>

        <div className="flex-grow mb-8 md:mb-0 text-left md:mt-20 md:ml-4 md:mr-4"> {/* Ajusta márgenes horizontales */}
          <h4 className="font-bold mb-4">Compañía</h4>
          <ul>
            <li className="mb-2"><a href="#">About TaiGrids</a></li>
            <li className="mb-2"><a href="#">Contact & Support</a></li>
            <li className="mb-2"><a href="#">Our Team</a></li>
          </ul>
        </div>

        <div className="flex-grow mb-8 md:mb-0 text-left md:mt-20 md:ml-4 md:mr-4"> {/* Ajusta márgenes horizontales */}
          <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
          <ul>
            <li className="mb-2"><a href="#">Premium Support</a></li>
            <li className="mb-2"><a href="#">Success History</a></li>
            <li className="mb-2"><a href="#">Selling & Privacy</a></li>
            <li className="mb-2"><a href="#">Download App</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start text-left md:mt-20 md:ml-4 md:mr-8"> {/* Ajusta márgenes horizontales */}
          <h4 className="font-bold mb-4">Síguenos en</h4>
          <div className="flex space-x-4">
            <a className="hover:text-primary-500" href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a className="hover:text-primary-500" href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a className="hover:text-primary-500" href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className="mt-8 text-sm flex items-center"> {/* Alinea el icono y el número horizontalmente */}
            <FaPhone className="mr-2" />
            <span>(+503) 253985445</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
