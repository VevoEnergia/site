import Image from "next/image";

import { Paragraph, Subtitle } from "./ui/text";
import Section from "./ui/section";
import CTAButton from "./ui/cta-button";

export default function Sustentabilidade() {
  return (
    <Section
      id="sustentabilidade"
      className="bg-white flex items-center justify-between snap-mandatory !px-0"
    >
      <div className="relative bg-secondary w-full flex items-start justify-between px-6 sm:px-8 lg:px-32 2xl:px-60 py-8 h-[600px] 2xl:h-[600px]">
        <div className="space-y-6 basis-1/2">
          <Subtitle className="text-primary text-3xl sm:text-5xl xl:text-6xl min-[1700px]:text-8xl font-black w-3/4 text-wrap">
            Energia acessível e limpa<span className="text-white">.</span>
          </Subtitle>

          <Paragraph className="!text-lg lg:text-2xl text-white font-roboto">
            Vevo é a força que impulsiona você para o futuro.
          </Paragraph>

          <CTAButton />
        </div>
        <div className="relative aspect-[6/8] w-[550px] overflow-hidden shadow-xl shadow-black/50 rounded-xl">
          <Image
            width={960}
            height={1280}
            src={"/sustentabilidade/placa-solar.jpg"}
            alt={"Imagem de placas solares"}
            className="drop-shadow-lg absolute h-auto w-[550px] right-0 top-0 rounded-xl"
          />
        </div>
      </div>
    </Section>
  );
}
