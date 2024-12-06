import Simulacao from "../Simulacao";
import Section from "../ui/section";
import { Paragraph, Title } from "../ui/text";
import ContactItem from "../Footer/ContactItem";
import { FaPhone } from "react-icons/fa6";
import { CiMail, CiLocationArrow1  } from "react-icons/ci";



export default function Contact(){
    return (
        <Section className="!min-h-96 grid grid-cols-2 grid-rows-1 gap-x-24 row-span-2">
            <div className="flex flex-col items-center justify-between gap-y-36">
                <Title className="text-center">TITULO - CHAMADA PARA A PESSOA ENTRAR EM CONTATO</Title>

                <Paragraph>lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorew  ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo</Paragraph>
                <Simulacao />
            </div>

            <div className="w-full h-full bg-neutral-800"></div>
        </Section>
    )
}