import Beneficios from "@/components/Beneficios";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Solucoes from "@/components/Solucoes/Solucoes";
import Sustentabilidade from "@/components/Sustentabilidade";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero />
      <Beneficios />
      <Sustentabilidade />
      <Solucoes />
      <FAQ />
    </>
  );
}