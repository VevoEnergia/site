"use client";
import Link from "next/link";
import { Subtitle } from "../../ui/text";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import ClickableIcon from "./ClickableIcon";
import Image from "next/image";
import { motion } from "framer-motion";
interface ClickableImage {
  url: string;
  icon: ReactNode;
  clickable?: boolean;
}

interface DataProps {
  title: string;
  clickableImages: ClickableImage[];
}

const data = {
  socialNetworks: {
    title: "Redes Sociais.",
    clickableImages: [
      {
        clickable: true,
        url: "https://www.instagram.com/vevo.energia/",
        icon: (
          <ClickableIcon Icon={IoLogoInstagram} color="#DD2A7B" delay={0.1} />
        ),
      },
      {
        clickable: true,
        url: "https://wa.me/5561999072808/?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21",
        icon: <ClickableIcon Icon={FaWhatsapp} color="#25D366" delay={0.3} />,
      },
      // {
      //   clickable: true,
      //   url: "/",
      //   icon: <ClickableIcon Icon={FcGoogle} color="#ffffff" delay={0.5} />,
      // },
    ],
  },
  certifications: {
    title: "Financiamento.",
    clickableImages: [
      {
        url: "/",
        icon: (
          <Image
            width={4096}
            height={4096}
            className="me-4 w-16 h-auto"
            src="/footer/santander.png"
            alt="Logo do banco Santander"
          />
        ),
      },
      {
        url: "/",
        icon: (
          <Image
            width={4096}
            height={4096}
            className="me-4 w-16 h-auto scale-[2.5]"
            src="/footer/brb.png"
            alt="Logo do banco BRB"
          />
        ),
      },
      {
        url: "/",
        icon: (
          <Image
            width={4096}
            height={4096}
            className="mx-auto w-16 h-auto"
            src="/footer/bv.png"
            alt="Logo do banco BV"
          />
        ),
      },
    ],
  },
  financing: {
    title: "Certificado.",
    clickableImages: [
      {
        url: "/",
        icon: (
          <Image
            width={4096}
            height={4096}
            className="mx-auto w-16 h-auto"
            src="/footer/certificacao.png"
            alt="Logo do banco BV"
          />
        ),
      },
    ],
  },
};
export default function AdditionalData() {
  return (
    <div className="space-y-12">
      <DataWrapper
        title={data.socialNetworks.title}
        clickableImages={data.socialNetworks.clickableImages}
      />
      <DataWrapper
        title={data.certifications.title}
        clickableImages={data.certifications.clickableImages}
      />
      <DataWrapper
        title={data.financing.title}
        clickableImages={data.financing.clickableImages}
      />
    </div>
  );
}

function DataWrapper({ title, clickableImages }: DataProps) {
  return (
    <div className="space-y-3">
      <Subtitle className="text-secondary">
        {title.slice(0, -1)}
        <strong className="text-primary">{title.slice(-1)}</strong>
      </Subtitle>
      <div className="flex items-center gap-x-8">
        {clickableImages?.length &&
          clickableImages.map((image, index) => {
            if (image.clickable) {
              return (
                <Link
                  href={image.url}
                  key={`clickable-image-${Math.random()}`}
                  target={"_blank"}
                >
                  {image.icon}
                </Link>
              );
            }

            return (
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 * index,
                }}
                key={`clickable-image-${Math.random()}`}
              >
                {image.icon}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
