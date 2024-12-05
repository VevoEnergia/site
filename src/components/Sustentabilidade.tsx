import { Title } from "./ui/text";
import Section from "./ui/section";
import Simulacao from "./Simulacao";

export default function Sustentabilidade(){
    return (
        <Section id="sustentabilidade" className="bg-secondary flex flex-col items-center justify-between">
            <Title>
                Sustentabilidade
            </Title>

            <Simulacao />
        </Section>
    )
}