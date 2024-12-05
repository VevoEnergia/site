import Section from "./ui/section";
import { Title } from "./ui/text";
import SolutionCard from "./Solucoes/SolutionCard";
import ExperienceHighlight from "./Solucoes/ExperienceHighlight";
import ImageGrid from "./Solucoes/ImageGrid";
import Grid from "./ui/grid";

const solutions = [
    { title: "Solução 1", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { title: "Solução 2", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { title: "Solução 3", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { title: "Solução 4", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { title: "Solução 5", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
    { title: "Solução 6", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

export default function Solucoes() {
    return (
        <Section className="flex flex-col">
            <Title>Soluções</Title>

            <Grid cols={3} rows={2} className="mt-8">
                {solutions.map((solution) => (
                    <SolutionCard key={solution.title} title={solution.title} text={solution.text} />
                ))}
            </Grid>

            <div className="flex items-center justify-between px-32 py-4 mt-24 border rounded-full">
                <ExperienceHighlight />
                <ExperienceHighlight />
                <ExperienceHighlight />
            </div>

            <ImageGrid images={Array(5).fill(null)}/>
        </Section>
    );
}
