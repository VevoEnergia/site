"use client";
import { IoArrowDown } from "react-icons/io5";
import { Paragraph, Subtitle } from "../ui/text";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
  rev: 1 | -1;
}

export default function Question({ question, answer, rev = 1 }: QuestionProps) {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const introQuestion: Variants = {
    hide: {
      opacity: 0,
      x: `${100 * rev}%`,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={introQuestion}
      className="px-4 2xl:px-12 2xl:py-4 py-2 w-[90%] lg:w-3/4 shadow-md rounded-lg even:ms-auto cursor-pointer hover:shadow-lg transition-all duration-300 bg-primary"
      onClick={() => setIsHidden(!isHidden)}
    >
      <div className="flex items-center gap-x-4">
        <IoArrowDown
          className="!text-2xl 2xl:text-3xl data-[active=true]:-rotate-90 transition-all duration-300"
          data-active={isHidden}
        />
        <Subtitle className="!text-base xl:!text-lg">{question}</Subtitle>
      </div>

      <div
        className="data-[hidden=true]:!max-h-0 !max-h-20 data-[hidden=false]:mt-4 !overflow-hidden transition-all duration-300"
        data-hidden={isHidden}
      >
        <Paragraph>{answer}</Paragraph>
      </div>
    </motion.div>
  );
}
