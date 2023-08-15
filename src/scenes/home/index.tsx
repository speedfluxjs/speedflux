import { SelectedPage } from '@/shared/types'
import { ActionButton } from '@/shared/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
    className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0"
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
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-evolvetext'>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                </div>
                <p className='m-8 text-sm pb-0 mb-2'>
                        Bem-vindo à CoreFusion Gym, onde a jornada para um corpo saudável 
                    e uma mente forte começa. Somos mais do que uma academia, somos um espaço dedicado à 
                    transformação holística. Aqui, fundimos os elementos essenciais do fitness para criar 
                    uma experiência única e inspiradora.
                </p>
                <p className='m-8 text-sm my-0'>
                        Na CoreFusion, acreditamos que a chave para um estilo de vida equilibrado reside na harmonia 
                    entre o núcleo físico e a vitalidade mental. Nossas aulas dinâmicas e orientadas por instrutores 
                    altamente qualificados abrangem desde treinamento funcional e cardio revigorante até práticas 
                    de mindfulness que nutrem a sua paz interior.
                </p>
                
            </motion.div>

            {/* actions */}
            <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                }}
                    >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Junte-se Agora
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Veja Mais</p>
                </AnchorLink>
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
        <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 items-center justify-between gap-8'>
                    <img src={SponsorRedBull} alt="redbull-sponsor" />
                    <img src={SponsorForbes} alt="forbes-sponsor" />
                    <img src={SponsorFortune} alt="fortune-sponsor" />
                </div>
            </div>
        </div>
    )}
  </section>
}

