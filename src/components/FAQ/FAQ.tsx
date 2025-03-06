import { Subtitle, Title } from "../ui/text";
import Section from "../ui/section";
import Question from "./Question";

import { questions } from "@/data/faq";

export default function FAQ() {
  return (
    <Section className="h-screen bg-neutral-200">
      <Subtitle className="text-5xl xl:text-6xl text-secondary">
        Perguntas Frequentes<span className="text-primary">.</span>
      </Subtitle>

      <div className="flex flex-col gap-y-8 mt-12">
        {questions.map((question, index) => {
          return (
            <Question
              key={`question-${index}`}
              question={question.question}
              answer={question.answer}
              rev={index % 2 == 1 ? 1 : -1}
            />
          );
        })}
      </div>
    </Section>
  );
}
