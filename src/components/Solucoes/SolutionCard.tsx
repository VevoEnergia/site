import Image from "next/image";
import { Subtitle, Paragraph } from "@/components/ui/text";

export default function SolutionCard({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center border drop-shadow-sm p-4 bg-secondary text-white rounded-[20px] shadow-lg shadow-black/20 border-none">
      <Image
        width={80}
        height={80}
        alt={title}
        src={src}
        className="min-w-20 h-20 me-4 rounded-md"
      ></Image>

      <div className="flex flex-col items-start">
        <Subtitle className="text-xl text-primary">{title}</Subtitle>
        <Paragraph className="text-xs">{text}</Paragraph>
      </div>
    </div>
  );
}
