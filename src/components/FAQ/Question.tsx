import { IoArrowDown } from "react-icons/io5";
import { Paragraph, Subtitle } from "../ui/text";

interface QuestionProps{
    question: string,
    answer: string
}

export default function Question({question, answer}: QuestionProps){
    return (
        <div className="px-12 py-4 w-3/4 border shadow-md rounded-lg even:ms-auto cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-x-4 mb-4">
                <IoArrowDown className="text-3xl"/>
                <Subtitle>
                    {question}
                </Subtitle>
            </div>

            <Paragraph>
                {answer}
            </Paragraph>
        </div>
    )
}