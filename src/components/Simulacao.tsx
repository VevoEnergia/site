"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface SimulacaoProps {
  className?: string;
}

export default function Simulacao({ className }: SimulacaoProps) {
  return (
    <Dialog>
      <DialogTrigger
        className="hover:!scale-105 duration-300 transition-all"
        asChild
      >
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
          className={`${className} shadow-md max-w-[90dvw] w-80 bg-primary text-white font-bold text-lg rounded-full px-4 py-2 transition-all z-[100] relative`}
        >
          Faça uma simulação
        </motion.button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faça sua simulação</DialogTitle>
          <DialogDescription className="w-80 h-96"></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
