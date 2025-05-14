"use client";
import { motion, Variants } from "framer-motion";
import Section from "../ui/section";
import { Subtitle } from "../ui/text";
import Image from "next/image";
import ContactForm from "../ui/contact-form";

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

const yellowBg: Variants = {
  hide: {
    x: "0%",
    y: "-40%",
    rotate: 15,
    opacity: 0,
  },
  show: {
    x: "0%",
    rotate: 15,
    y: "-50%",
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
};

export default function Contact() {
  return (
    <Section
      className="relative bg-secondary min-w-full overflow-hidden"
      id="contact-form"
    >
      <Subtitle className="text-start !text-3xl md:!text-4xl 2xl:!text-5xl max-w-2xl text-white font-black mb-8 relative z-10">
        Invista em Energia Solar e Economize na Sua Conta de Luz!
        <span className="text-white xl:text-primary">.</span>
      </Subtitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white w-full rounded-2xl overflow-hidden shadow-lg shadow-black/20 border-none lg:col-span-2 border drop-shadow-sm mt-8 relative z-10">
        <ContactForm />

        <motion.div
          initial="hide"
          whileInView="show"
          variants={introContact}
          className="hidden lg:block h-full overflow-hidden"
        >
          <Image
            src={"/contact/paineis-solares.jpg"}
            width={1280}
            height={720}
            className="object-cover object-center w-auto h-full"
            alt="Vista de cima de uma casa moderna que contém paineis solares."
          />
        </motion.div>
      </div>

      <motion.div
        initial="hide"
        whileInView="show"
        variants={yellowBg}
        className="w-[200%] h-[400%] absolute bg-gradient-to-br from-primary to-90% to-[#aa6600] top-1/2 left-2/3 xl:left-[60%] -translate-y-1/2 z-0"
      ></motion.div>
    </Section>
  );
}
