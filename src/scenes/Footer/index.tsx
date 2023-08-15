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
          <p>© CoreFusion All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Para perguntas detalhadas ou informações adicionais sobre nossos programas e horários de aulas, 
              sinta-se à vontade para enviar um e-mail para nosso endereço de contato
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;