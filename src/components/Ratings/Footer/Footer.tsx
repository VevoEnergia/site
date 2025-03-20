import Image from "next/image";
import { Subtitle } from "../../ui/text";
import ContactItem from "./ContactItem";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import AdditionalData from "./AdditionalData";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="!min-h-96 w-screen px-6 sm:px-8 lg:px-32 2xl:px-60 2xl:py-16 py-8 snap-start bg-neutral-200 !pb-8 max-w-screen overflow-x-hidden"
    >
      <div className="mx-auto max-w-[1920px] flex flex-col lg:grid grid-cols-[2fr_1fr] grid-rows-1 gap-x-24">
        <div className="flex flex-col items-start justify-between h-full">
          <div className="overflow-hidden relative flex items-center justify-start h-[72px] w-96 mb-4">
            <Image
              src="logo preta.svg"
              width={400}
              height={120}
              className="object-cover -ms-[50px]"
              alt="Logo da Vevo Energia Fotovoltaica."
            />
          </div>

          <Subtitle className="!text-2xl text-secondary max-w-xs lg:max-w-xl">
            Invista em Energia Solar e Economize na Sua Conta de Luz
            <span className="text-primary">!</span>
          </Subtitle>

          <div className="space-y-4 mt-16">
            <ContactItem
              Icon={FaWhatsapp}
              title="Ligue Agora!"
              value="(61) 9.9907-2808"
            />
            <ContactItem
              Icon={MdMailOutline}
              title="E-mail."
              value="vevoenergiafotovoltaica@gmail.com"
            />
          </div>

          <Subtitle className="hidden lg:block text-xl font-medium mt-12">
            VEVO.{" "}
            <span className="text-sm lg:text-base">Direitos Reservados.</span>
          </Subtitle>
        </div>

        <AdditionalData />
      </div>
    </footer>
  );
}
