import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Você também pode nos ligar para obter informações diretas e esclarecer quaisquer dúvidas que possa ter.
            Nossa equipe de atendimento ao cliente está disponível durante o horário comercial para ajudá-lo(a).
          </p>
          <p>© Speedflux All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Linkedin: http://bit.ly/3Z12Fy9
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contato</h4>
          <p className="my-5">Email comercial: <strong>josemarcos@speedflux.info</strong></p>
          <p>+55 (11) 99739-9911</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;