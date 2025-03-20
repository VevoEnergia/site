"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappBubble() {
  const handleOpenWhatsapp = () => {
    if (window) {
      window.open(
        "https://wa.me/5561999072808/?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21",
        "_blank"
      );
    }
  };
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0, 1],
      }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: "easeIn",
      }}
      className="fixed bottom-8 right-8 drop-shadow-[2px_2px_6px_#00000050] hover:scale-105 transition-all duration-300 group cursor-pointer hover:drop-shadow-[0px_0px_8px_#00000090] opacity-0"
      onClick={handleOpenWhatsapp}
    >
      <div className="bg-[#25D366] rounded-full p-3 z-10">
        <FaWhatsapp className="text-3xl xl:text-4xl text-white" />
      </div>
      <div className="w-5 h-5 absolute bottom-0.5 right-0.5 !z-[-1] rotate-5 rounded rounded-tl-xl bg-[#25D366] group-hover:rounded-full group-hover:right-5 transition-all duration-300"></div>
    </motion.div>
  );
}
