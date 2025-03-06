import Beneficios from "@/components/Beneficios";
import Hero from "@/components/Hero";
import Solucoes from "@/components/Solucoes/Solucoes";
import Sustentabilidade from "@/components/Sustentabilidade";
import FAQ from "@/components/FAQ/FAQ";
import Ratings from "@/components/Ratings/Ratings";
import Contact from "@/components/Contact/Contact";
import OurProjects from "@/components/Projetos/NossosProjetos";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        {/* @ts-expect-error Server Component */}
        <Hero />
      </Suspense>
      <Beneficios />
      <Sustentabilidade />
      <Solucoes />
      <OurProjects />
      <Ratings />
      <FAQ />
      <Contact />
    </>
  );
}
