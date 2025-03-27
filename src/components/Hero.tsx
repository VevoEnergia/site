import Section from "@/components/ui/section";
import Simulacao from "./Simulacao";
import HeroVideo from "./Hero/HeroVideo";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export default async function Hero() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const parser = new UAParser(userAgent);

  const result = parser.getResult();

  const isMobile = true;

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
