import Beneficios from "@/components/Beneficios";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Solucoes from "@/components/Solucoes/Solucoes";
import Sustentabilidade from "@/components/Sustentabilidade";
import FAQ from "@/components/FAQ/FAQ";
import Ratings from "@/components/Ratings/Ratings";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero />
      <Beneficios />
      <Sustentabilidade />
      <Solucoes />
      <Ratings />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}