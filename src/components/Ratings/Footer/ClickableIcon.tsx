"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

export default function ClickableImage({
  Icon,
  color,
  delay = 0.5,
}: {
  Icon: IconType;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
        scale: [0, 1],
        backgroundColor: color,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className={`w-12 h-12 rounded-full text-white shadow-[0px_0px_8px_2px_#00000040] text-4xl grid items-center justify-center hover:!scale-110 hover:shadow-[0px_0px_10px_4px_#00000060] transition-all duration-300`}
    >
      <Icon className="text-white text-2xl" />
    </motion.div>
  );
}
