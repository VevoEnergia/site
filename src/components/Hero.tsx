import Section from "@/components/ui/section";
import Simulacao from "./Simulacao";
import HeroVideo from "./Hero/HeroVideo";
import { headers } from "next/headers";

export default async function Hero() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const isMobile = Boolean(
    userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );
  return (
    <Section
      id="hero"
      className="!pt-32 pb-16 bg-gradient-to-br from-white to-zinc-500 flex flex-col items-center justify-end snap-mandatory h-screen relative"
    >
      <HeroVideo isMobile={isMobile} />

      <Simulacao />
    </Section>
  );
}
