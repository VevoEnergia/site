"use client";
import { motion, Variants } from "framer-motion";
import Section from "../ui/section";
import { Paragraph, Subtitle } from "../ui/text";
import CTAButton from "../ui/cta-button";
import Image from "next/image";

const introContact: Variants = {
  hide: {
    opacity: 0,
    right: "-40%",
  },
  show: {
    opacity: 1,
    right: 0,
    transition: {
      duration: 1.3,
    },
  },
};

const introTitle: Variants = {
  hide: {
    opacity: 0,
    y: 100,
    color: "#ffffffff",
  },
  show: {
    color: "#000",
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
    },
  },
};

export default function Contact() {
  return (
    <Section className="!min-h-[800px] grid grid-cols-[0.6fr_1fr] grid-rows-1 gap-x-24 row-span-2 relative bg-secondary">
      <div className="flex flex-col items-start justify-center gap-y-7">
        <motion.div initial="hide" whileInView="show" variants={introTitle}>
          <Subtitle className="text-start text-5xl w-full text-white font-black">
            Invista em Energia Solar e Economize na Sua Conta de Luz!
            <span className="text-primary">.</span>
          </Subtitle>
        </motion.div>

        <Paragraph className="text-2xl w-full text-wrap font-bold text-white">
          Pare de pagar caro na energia!<br></br> Com a Vevo Energia, você reduz
          seus gastos, valoriza seu imóvel e ainda contribui para um futuro
          sustentável. Solicite um orçamento e comece a economizar hoje mesmo!
        </Paragraph>
        <CTAButton text="Fale com um Especialista Agora!" />
      </div>

      <motion.div
        initial="hide"
        whileInView="show"
        variants={introContact}
        className="absolute top-10 rounded-l-[50px] w-[1075px] h-[720px] overflow-hidden bg-cover"
      >
        <Image
          src={"/contact/paineis-solares.jpg"}
          width={1280}
          height={720}
          className="object-center rounded-l-[50px] w-full h-auto"
          alt="Vista de cima de uma casa moderna que contém paineis solares."
        />
      </motion.div>
    </Section>
  );
}
