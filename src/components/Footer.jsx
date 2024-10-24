
// import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-1/2 md:mt-0">
          {/* <img src={Logo} alt="Logo" /> */}
          <div className="w-24 h-10 bg-gray-300">Logo</div> {/* Imagen temporal */}
          <p className="my-5">
            Breve descripción sobre tu sitio aquí. Personalízalo según tu proyecto.
          </p>
          <p>© 2024 Todos los derechos reservados</p>
        </div>

        <div className="my-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacto</h4>
          <div className="flex flex-col">
            <p>Avenue E Street Const #986</p>
            <p>(+503) 253985445</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Enlaces de Patrocinadores</h4>
          <div className="flex flex-col">
            <a className="hover:text-primary-500" href="https://www.redbull.com/" target='_blank'>Redbull</a>
            <a className="hover:text-primary-500" href="https://www.forbes.com/" target='_blank'>Forbes</a>
            <a className="hover:text-primary-500" href="https://fortune.com/" target='_blank'>Fortune</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
