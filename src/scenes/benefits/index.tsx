import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon, 
        UserGroupIcon, 
        AcademicCapIcon 
    } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import HText from "@/shared/HText"
import { Benefit } from "./Benefits"
import { ActionButton } from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-9" />,
        title: "Treinamento Holístico Integrado",
        description: 
        "Abraçamos uma abordagem holística para o fitness, combinando exercícios físicos dinâmicos com técnicas de mindfulness."
    },
    {
        icon: <UserGroupIcon className="h-6 w-9" />,
        title: "Comunidade Motivadora e Apoio Individualizado",
        description: 
        "Nossa academia é mais do que um lugar para malhar; é um espaço onde uma comunidade calorosa e inclusiva se une para alcançar metas comuns."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-9" />,
        title: "Variedade de Programas Adaptáveis",
        description: 
        "Entendemos que todos têm necessidades e objetivos diferentes. É por isso que oferecemos uma ampla gama de programas de treinamento que podem ser personalizados"
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
                <HText>MAIS QUE UMA ACADEMIA</HText>
                <p className="my-5 text-sm">
                    Seja você um iniciante no mundo fitness ou um atleta experiente, a nossa comunidade acolhedora 
                    está pronta para guiá-lo em direção a seus objetivos pessoais. Nós nos orgulhamos de oferecer 
                    um ambiente inclusivo e motivador, onde cada passo que você dá nos leva mais perto de se tornar 
                    a melhor versão de si mesmo.

                    Junte-se a nós na CoreFusion Gym e comece a jornada para um corpo mais forte, uma mente mais 
                    clara e uma vida mais plena. Sua transformação espera por você aqui.
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
                    src={BenefitsPageGraphic}/>

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILHÕES DE MEMBROS JÁ FAZEM {" "}
                                    <span className="text-primary-500">PARTE</span>
                                </HText>
                            </div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <div>
                        <p className="my-5">Entendemos que cada indivíduo é único, com metas, necessidades e desafios distintos. 
                            É por isso que oferecemos uma gama diversificada de programas adaptáveis, desde treinamento funcional e 
                            cardio intenso até ioga restaurativa e meditação guiada. Nossa flexibilidade permite que você escolha a 
                            abordagem que melhor se alinha com seus objetivos pessoais, permitindo uma jornada de progresso gradual 
                            e sustentável.
                        </p>
                        <p className="mb-5">
                            Na CoreFusion, estamos comprometidos em ir além do fitness convencional. 
                            Estamos aqui para ajudá-lo a cultivar uma relação mais profunda com seu corpo e mente, 
                            capacitando-o a enfrentar desafios, superar limites e abraçar seu potencial total. 
                            Junte-se a nós enquanto exploramos a interseção entre força física, clareza mental e 
                            realização interior. A transformação está ao seu alcance, e na CoreFusion Gym, estamos aqui 
                            para guiá-lo nessa jornada significativa.
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