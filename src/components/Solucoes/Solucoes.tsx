// Componetnts
import Section from "../ui/section";
import { Paragraph, Subtitle } from "../ui/text";
import SolutionCard from "./SolutionCard";
import Image from "next/image";
// Data
import { solutions } from "@/data/solucoes";
import { title } from "process";

export default function Solucoes() {
  return (
    <Section id="solucoes" className="flex flex-col !pt-24">
      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary">
        Soluções<span className="text-primary">.</span>
      </Subtitle>

      <div className="grid cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 mt-8">
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            text={solution.text}
            src={solution.src}
          />
        ))}

        <div className="p-4 bg-secondary text-white rounded-[20px] shadow-lg shadow-black/20 border-none lg:col-span-3 border drop-shadow-sm ">
          <div className="flex items-center">
            <Image
              width={80}
              height={80}
              alt={"Instalação de carregador veicular"}
              src={"/solucoes/carregador-veicular.png"}
              className="min-w-20 h-20 me-4 rounded-md"
            ></Image>

            <div className="flex flex-col items-start">
              <Subtitle className="text-xl text-primary">
                Instalação de carregador veicular
              </Subtitle>
              <Paragraph className="text-xs hidden lg:block">
                {
                  "Oferecemos o serviço completo de instalação de carregadores para veículos elétricos, com segurança, agilidade e total conformidade com as normas técnicas. Atendemos residências, empresas e condomínios, garantindo a melhor solução para seu dia a dia. Nossa equipe especializada avalia o local, realiza a instalação e entrega o sistema pronto para uso, com suporte técnico e garantia de qualidade."
                }
              </Paragraph>
            </div>
          </div>
          <Paragraph className="text-xs mt-4 lg:hidden">
            {
              "Oferecemos o serviço completo de instalação de carregadores para veículos elétricos, com segurança, agilidade e total conformidade com as normas técnicas. Atendemos residências, empresas e condomínios, garantindo a melhor solução para seu dia a dia. Nossa equipe especializada avalia o local, realiza a instalação e entrega o sistema pronto para uso, com suporte técnico e garantia de qualidade."
            }
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}
