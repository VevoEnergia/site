// Componetnts
import Section from "../ui/section";
import { Subtitle } from "../ui/text";
import SolutionCard from "./SolutionCard";
import Grid from "../ui/grid";

// Data
import { solutions } from "@/data/solucoes";

export default function Solucoes() {
  return (
    <Section id="solucoes" className="flex flex-col !pt-24">
      <Subtitle className="xl:text-6xl text-secondary">
        Soluções<span className="text-primary">.</span>
      </Subtitle>

      <Grid cols={3} rows={2} className="mt-8">
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            text={solution.text}
            src={solution.src}
          />
        ))}
      </Grid>
    </Section>
  );
}
