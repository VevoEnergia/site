import Card from "./Card";
import Grid from "./ui/grid";
import Section from "./ui/section";
import { Paragraph, Subtitle } from "./ui/text";
import { GiWrench } from "react-icons/gi";
import { Span } from "./ui/text";
import Simulacao from "./Simulacao";

const benefits = [
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 1",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 2",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 3",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 4",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 5",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
    {
        Icon: <GiWrench className="text-3xl my-8"/>,
        title: "Benefício 6",
        text: " Loremi psum loremipsum lorem lorem ipsum lorem ipsun lo rem ipsun loremipsun lorem ipsun loprem lorem ipsun loorem poloer lorem ipsun lore lo ipsun lorem lore lor lore lorem ipsum ip sum ipsum lorem ilermo"
    },
]

const saving = [
    {
        id: 1,
        src: "/image.svg",
        amount: 600,
        monthlyInvestment: 600,
        timeUntilWorth: 2
    },
    {
        id: 2,
        src: "/image.svg",
        amount: 600,
        monthlyInvestment: 600,
        timeUntilWorth: 2
    },
    {
        id: 3,
        src: "/image.svg",
        amount: 600,
        monthlyInvestment: 600,
        timeUntilWorth: 2
    },
]
export default function Beneficios(){
    return (
        <Section id="beneficios" className="py-12">
            <Subtitle className="mb-8">BENEFÍCIOS</Subtitle>

            <Grid cols={3} rows={2} className="my-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} Icon={benefit.Icon}>
                        <Subtitle className="mb-4">
                            {benefit.title}
                        </Subtitle>
                        <Paragraph className="text-sm">
                            {benefit.text}
                        </Paragraph>
                    </Card>
                ))}
            </Grid>

            <Subtitle>
                Economia
            </Subtitle>

            <Grid cols={3} rows={1} className="my-8">
                {saving.map(sav => {
                    return (
                        <Card key={sav.id} src={sav.src}>
                            <Span className="mt-4">
                                Valor da conta de energia:
                            </Span>
                            <Subtitle>
                                R$ {sav.amount}
                            </Subtitle>

                            <Span className="mb-4">
                                Investimento Mensal:
                            </Span>

                            <Subtitle>
                                R$ {sav.monthlyInvestment}
                            </Subtitle>

                            <Paragraph>
                                Em apenas {sav.timeUntilWorth} meses você pode parar de gastar com energia
                            </Paragraph>

                            <Simulacao className="my-8"/>
                        </Card>
                    );
                })}
            </Grid>
        </Section>
    )
}