import { Subtitle } from "../ui/text";
import Section from "../ui/section";
import Question from "./Question";

import { questions } from "@/data/faq";

export default function FAQ() {
  return (
    <Section className="bg-[#E0E0E0]">
      <Subtitle className="!text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary">
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
