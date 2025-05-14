"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface SimulacaoProps {
  className?: string;
}

export default function Simulacao({ className }: SimulacaoProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/#contact-form");
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
      className={`${className} shadow-md max-w-[90dvw] w-80 bg-primary text-white font-bold text-lg rounded-full px-4 py-2 transition-all relative z-[10]`}
    >
      Faça uma simulação
    </motion.button>
  );
}
