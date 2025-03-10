"use client";

import { motion } from "framer-motion";

interface SimulacaoProps {
  className?: string;
}

export default function Simulacao({ className }: SimulacaoProps) {
  const handleClick = () => {
    window.open(
      "https://wa.me/5561999072808/?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
    );
  };
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      onClick={handleClick}
      className={`${className} shadow-md max-w-[90dvw] w-80 bg-primary text-white font-bold text-lg rounded-full px-4 py-2 transition-all z-[100] relative`}
    >
      Faça uma simulação
    </motion.button>
  );
}
