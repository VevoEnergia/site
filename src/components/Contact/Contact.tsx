import Simulacao from "../Simulacao";
import Section from "../ui/section";
import { Paragraph, Title } from "../ui/text";

export default function Contact(){
    return (
        <Section className="grid grid-cols-2 grid-rows-1 gap-x-24">
            <div className="flex flex-col items-center justify-between">
                <Title className="text-center">TITULO - CHAMADA PARA A PESSOA ENTRAR EM CONTATO</Title>

                <Paragraph>lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorew  ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo</Paragraph>
                <Simulacao />
            </div>

            <div className="w-full h-full bg-neutral-800">

            </div>
        </Section>
    )
}