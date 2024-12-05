import Beneficios from "@/components/Beneficios";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Solucoes from "@/components/Solucoes";
import Sustentabilidade from "@/components/Sustentabilidade";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero />
      <Beneficios />
      <Sustentabilidade />
      <Solucoes />
    </>
  );
}