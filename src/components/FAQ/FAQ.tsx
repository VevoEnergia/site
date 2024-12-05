import { Title } from "../ui/text";
import Section from "../ui/section";
import Question from "./Question";

const questions = [
    {question: "Pergunta 1 - A energia solar pode mudar o mundo?", answer: "lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo"},
    {question: "Pergunta 1 - A energia solar pode mudar o mundo?", answer: "lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo"},
    {question: "Pergunta 1 - A energia solar pode mudar o mundo?", answer: "lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo"},
    {question: "Pergunta 1 - A energia solar pode mudar o mundo?", answer: "lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsu lorem ipsum lorewm ipsum lor lorem ip lorem ipsum lorewm ipsum lorem lo loreips lorem lore ipsum lo rem ipsun lorem ipsun lore lo"},
]

export default function FAQ(){
    return (
        <Section>
            <Title>Perguntas Frequentes</Title>

            <div className="flex flex-col gap-y-8 mt-12">
                {questions.map((question, index) => {
                    return (
                        <Question key={`question-${index}`} question={question.question} answer={question.answer}/>
                    );
                })}
            </div>
        </Section>
    )
}