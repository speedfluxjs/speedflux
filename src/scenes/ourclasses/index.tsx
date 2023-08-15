import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { Class } from "./Class";

const classes: Array<ClassType> = [
  {
    name: "CoreStrength Circuit",
    description:
      "Uma aula desafiadora que se concentra no fortalecimento do núcleo e na melhoria da resistência muscular",
    image: image1,
  },
  {
    name: "ZenYoga Fusion",
    description:
      "Esta classe combina as técnicas de alongamento e fortalecimento do yoga com a prática da atenção plena. Você vai ganhar flexibilidade, equilíbrio e foco mental enquanto se conecta com sua respiração e relaxa a mente.",
    image: image2,
  },
  {
    name: "CardioKick Power",
    description:
      "Uma sessão energética que combina movimentos de cardio com técnicas de artes marciais. Você vai melhorar seu condicionamento cardiovascular, enquanto a liberação de endorfinas alivia o estresse.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NOSSAS CLASSES</HText>
            <p className="py-5">
              oferecemos uma ampla variedade de classes projetadas para atender às necessidades individuais de nossos 
              membros, abrangendo tanto a dimensão física quanto a mental do bem-estar. Nossa abordagem única 
              combina treinamento físico inovador com práticas de mindfulness, proporcionando uma experiência 
              transformadora e holística. Aqui está uma visão geral das classes que temos a oferecer:
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;