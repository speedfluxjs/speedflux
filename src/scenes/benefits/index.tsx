import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon,
        UserGroupIcon,
        AcademicCapIcon
    } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import HText from "@/shared/HText"
import { Benefit } from "./Benefits"
import { ActionButton } from "@/shared/ActionButton"
import BenefitsPageGraphic02 from "@/assets/BenefitsPageGraphic02.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-9" />,
        title: "Base de Dados Personalizada e Qualificada",
        description:
        "Nossa plataforma oferece uma base de dados robusta e segmentada, com leads de diversos setores, permitindo que você alcance os contatos mais relevantes para o seu negócio com precisão."
    },
    {
        icon: <UserGroupIcon className="h-6 w-9" />,
        title: "Segmentação Avançada e Estratégica",
        description:
        "Com ferramentas de segmentação poderosas, você pode direcionar suas campanhas para os leads mais promissores, com base em informações detalhadas como cargo, localização e histórico profissional."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-9" />,
        title: "Qualificação e Atualização Constante de Dados",
        description:
        "A nossa equipe realiza um processo contínuo de validação e atualização das informações dos leads, garantindo que você tenha sempre acesso a contatos atualizados e com alto potencial de conversão."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export const Benefits = ({setSelectedPage}: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h full w-5/6 py-20"
        >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER*/}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}>
                <HText>🔍 Leads qualificados</HText>
                <p className="my-5 text-sm">
                    Nossos leads individuais são minuciosamente selecionados e organizados, com foco em oferecer informações de contato extremamente relevantes e atualizadas. Cada lead é analisado com rigor, levando em consideração dados como e-mails, números de telefone, cargos, e até mesmo histórico profissional, garantindo que você tenha acesso a perfis altamente qualificados e com alto potencial de conversão.
                </p>
            </motion.div>

            {/* Benefits*/}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>

            {/* GRAPHICS */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC*/}
                <img
                    className="mx-auto"
                    alt="benefits-page-praphic"
                    src={BenefitsPageGraphic02}/>

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                            <div>
                                <HText>
                                🤝 Contrato EXCLUSIVO e {" "} 🔒
                                    <span className="#B6D7A8">Sigilo Absoluto</span>
                                </HText>
                            </div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <div>
                        <p className="my-5">
                            Na SPEEDFLUX, oferecemos contratos personalizados e exclusivos, cuidadosamente ajustados às necessidades específicas de cada empresa.
                            Entendemos que cada negócio é único e, por isso, buscamos entender os seus objetivos e desafios antes de definir a melhor solução.
                            Nosso foco é ajudar você a alcançar os profissionais certos dentro de cada mercado ou setor, garantindo uma conexão precisa e estratégica com o seu público-alvo.
                            Seja para campanhas de marketing direcionadas, prospecção de vendas ou geração de leads, nossa abordagem é projetada para otimizar os resultados e acelerar o crescimento do seu negócio.
                        </p>
                        <p className="mb-5">
                            Além disso, garantimos total confidencialidade e segurança no tratamento das informações dos contatos que repassamos. Sabemos o quanto a proteção de dados é fundamental,
                            especialmente em um cenário digital cada vez mais rigoroso. Por isso, seguimos as melhores práticas de segurança da informação, assegurando que seus dados e os dos seus leads estejam sempre protegidos.
                            Ao utilizar nossos serviços, você pode realizar suas ações de prospecção e marketing com tranquilidade, sabendo que todos os dados são tratados com o mais alto nível de segurança e em conformidade com as leis de privacidade, como a LGPD.
                            Isso permite que sua empresa se concentre no que realmente importa: expandir seus negócios de forma eficiente e segura, sem preocupações com a privacidade ou integridade dos dados.
                        </p>
                    </div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Junte-se Agora
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}