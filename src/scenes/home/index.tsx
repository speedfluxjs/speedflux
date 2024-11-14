import { SelectedPage } from '@/shared/types'
import { ActionButton } from '@/shared/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import {motion} from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export const Home = ({ setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return <section
    id="home"
    className="gap-16 bg-gradient-whiteblue py-10 md:h-full md:pd-0"
  >
    {/* image and main header */}
    <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* headings */}
            <motion.div className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
            >
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                </div>
                <p className='m-8 text-sm pb-0 mb-2'>
                    A <strong>SPEEDFLUX</strong> oferece uma base de dados robusta e altamente qualificada, com milhares de leads segmentados e atualizados constantemente, reunindo informações de contatos de profissionais de diversos setores e indústrias. Nosso serviço proporciona acesso a um vasto banco de dados que permite identificar e se conectar com os tomadores de decisão mais relevantes para o seu negócio no mercado B2B.
                </p>
                <p className='m-8 text-sm pb-0 mb-2'>
                    Com a <strong>SPEEDFLUX</strong>, você pode potencializar o crescimento da sua empresa, otimizar suas estratégias de marketing e vendas e, assim, aumentar a geração de oportunidades de negócios qualificadas. As informações são coletadas de fontes confiáveis e criteriosamente selecionadas, garantindo que você tenha acesso a dados precisos e atualizados para maximizar sua performance comercial.
                </p>


            </motion.div>

            {/* actions */}
            <motion.div
                className='mt-5 flex flex-col items-start gap-6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 30 }
                }}
            >
            <ActionButton setSelectedPage={setSelectedPage}>
                Junte-se Agora
            </ActionButton>
            </motion.div>

        </div>

        {/* image */}
        <div className='flex basics-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md-justify-items-end'>
            <div>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </div>
    </motion.div>

    { /* sponsors */}
    {isAboveMediumScreens && (
        <div className='h-[130px] w-full bg-black-100 mt-20 py-10'> {/* Aumentando a margem superior */}
            <div className='mx-auto w-5/6'>
                <div className='flex w-5/5 items-center justify-between gap-8'>
                    <img src={SponsorRedBull} alt="redbull-sponsor" />
                    <img src={SponsorForbes} alt="forbes-sponsor" />
                    <img src={SponsorFortune} alt="fortune-sponsor" />
                </div>
            </div>
        </div>
    )}
    </section>
}

