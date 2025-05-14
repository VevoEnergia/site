import Image from "next/image";

import { Paragraph, Subtitle } from "./ui/text";
import Section from "./ui/section";
import CTAButton from "./ui/cta-button";

export default function Sustentabilidade() {
  return (
    <Section
      id="sustentabilidade"
      className="flex items-center justify-between snap-mandatory !px-0 bg-secondary min-w-full"
    >
      <div className="relative flex flex-col-reverse gap-y-8 lg:flex-row items-start justify-between px-6 sm:px-8 lg:px-32 2xl:px-60 py-8 lg:h-[520px]">
        <div className="space-y-6 basis-1/2">
          <Subtitle className="text-primary !text-5xl xl:!text-6xl min-[1700px]:text-8xl !font-black lg:w-3/4 text-wrap">
            Energia acessível e limpa<span className="text-white">.</span>
          </Subtitle>

          <Paragraph className="!text-xl lg:text-2xl text-white font-roboto !font-light">
            <strong className="font-black">Vevo é a força</strong> que
            impulsiona você para o futuro.
          </Paragraph>

          <CTAButton
            className="w-full lg:w-auto"
            text="FALE COM UM CONSULTOR!"
            variant="filled"
          />
        </div>
        <div className="overflow-hidden shadow-xl shadow-black/20 rounded-[60px] mx-auto w-full h-[400px] lg:w-[600px] lg:h-[650px]">
          <Image
            width={960}
            height={1280}
            src={"/sustentabilidade/placa-solar.jpg"}
            alt={"Imagem de placas solares"}
            className="drop-shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
}
