"use client";
import { motion, Variants } from "framer-motion";
import Section from "../ui/section";
import { Subtitle } from "../ui/text";
import CTAButton from "../ui/cta-button";
import Image from "next/image";

const introContact: Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
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
    <Section
      className="lg:h-[480px] 2xl:min-h-[800px] relative bg-secondary"
      containerClassName="flex flex-col xl:grid grid-cols-2 grid-rows-1 gap-x-24"
    >
      <div className="flex flex-col items-start justify-start gap-y-4 2xl:gap-y-7 lg:mt-14">
        <motion.div initial="hide" whileInView="show" variants={introTitle}>
          <Subtitle className="text-start !text-3xl 2xl:!text-5xl w-full text-white font-black">
            Invista em Energia Solar e Economize na Sua Conta de Luz!
            <span className="text-primary">.</span>
          </Subtitle>
        </motion.div>

        <p className="text-xs 2xl:text-2xl w-full text-wrap text-neutral-50">
          <strong>Pare de pagar caro na energia!</strong>
          <br></br> Com a Vevo Energia, você reduz seus gastos, valoriza seu
          imóvel e ainda contribui para um futuro sustentável. Solicite um
          orçamento e comece a economizar hoje mesmo!
        </p>
        <CTAButton
          text="Fale com um Especialista Agora!"
          className="xl:mt-6 !text-base lg:!text-xl"
        />
      </div>

      <motion.div
        initial="hide"
        whileInView="show"
        variants={introContact}
        className="mt-10 top-10 rounded-[50px] xl:w-[700px] 2xl:w-[1075px] 2xl:h-[720px] overflow-hidden bg-cover"
      >
        <Image
          src={"/contact/paineis-solares.jpg"}
          width={1280}
          height={720}
          className="object-center rounded-[50px] lg:rounded-l-[50px] w-full h-auto"
          alt="Vista de cima de uma casa moderna que contém paineis solares."
        />
      </motion.div>
    </Section>
  );
}
