import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

function HeroText() {
  const words = ["Seguras", "Modernas", "Escaláveis"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Ol&#225;, sou Vinicius
        </motion.h1>
        <div className="flex flex-col items=start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Desenvolvedor <br /> Dedicado a{" "}
          </motion.p>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Construir Aplica&ccedil;&otilde;es
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <FlipWords
              className="font-black text-white text-8xl"
              words={words}
            />
          </motion.div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, sou Vinicius
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Desenvolvedor <br /> Dedicado a{" "}
          </motion.p>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Construir Aplicações
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <FlipWords
              className="font-bold text-white text-7xl"
              words={words}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
