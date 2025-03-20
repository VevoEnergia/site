import CTAButton from "../ui/cta-button";
import Section from "../ui/section";
import { Subtitle } from "../ui/text";
import { places, projects } from "@/data/projetos";
import PlaceCard from "./PlaceCard";
import Image from "next/image";

export default function OurProjects() {
  const duplicatedProjects = [...projects, ...projects];
  return (
    <Section className="bg-gradient-to-br from-primary from-50% to-yellow-600">
      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary lg:my-8">
        Atendemos sua Necessidade<span className="text-white">.</span>
      </Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {places.map((place, index) => (
          <PlaceCard key={`place-${index}`} text={place.text} src={place.src} />
        ))}
      </div>
      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary my-8">
        Nossos Projetos<span className="text-white">.</span>
      </Subtitle>
      <div className="flex">
        <div className="flex gap-x-8 whitespace-nowrap animate-scroll">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="relative min-w-72 h-72 flex items-center justify-center overflow-hidden p-1 rounded-[32px] bg-transparent"
            >
              <Image
                src={project.src}
                alt={`Imagem do projeto ${index}, com vista superior mostrando painéis solares.`}
                fill
                sizes=""
                className="rounded-[32px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <CTAButton
          variant="ghost"
          text="Quero minha energia solar!"
          className="mt-8 !text-xl max-w-xl"
        />
      </div>
    </Section>
  );
}
