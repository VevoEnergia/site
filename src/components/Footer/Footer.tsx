import { FaPhone } from "react-icons/fa6";
import Section from "../ui/section";
import { Paragraph, Subtitle, Title } from "../ui/text";
import ContactItem from "./ContactItem";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import AdditionalData from "./AdditionalData";

export default function Footer(){
    return (
        <Section className="!min-h-96 grid grid-cols-2 grid-rows-1 gap-x-24 mt-24 row-span-3 bg-neutral-200 w-full !pb-8">
            <div className="flex flex-col items-start justify-between h-full">
                    <Title className="text-4xl">
                        LOGO
                    </Title>
                    <Paragraph>
                    lorem ipsum lorewm ipsum lorem lo loreips lorem lore
                    ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm
                    ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo
                    loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem
                    ipsum lorewm ipsum lor lorem ip lorem ipsum lorew
                    ipsum lorem lo loreips lorem lore ipsum lo rem
                    ipsun lorem ipsun lore lo
                    </Paragraph>

                    <div className="space-y-4 mt-24">
                        <ContactItem icon={<FaPhone className="text-2xl"/>} title="Telefone" value="(xx) xxxx-xxxx"/>
                        <ContactItem icon={<CiMail className="text-2xl"/>} title="E-mail" value="contato@vevoenergia.com.br"/>
                        <ContactItem icon={<CiLocationArrow1 className="text-2xl"/>} title="Onde estamos" value="Brasília DF - XXXXXXXXXXXXXX"/>
                    </div>

                    <Subtitle className="text-xl font-medium mt-12">
                        VEVO. Direitos Reservados.
                    </Subtitle>
                </div>

                <AdditionalData />
        </Section>
    )
}