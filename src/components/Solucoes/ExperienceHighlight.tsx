import { Title, Span, Subtitle } from "@/components/ui/text";
import Image from "next/image";

export default function ExperienceHighlight({
  title,
  text,
  src,
}: {
  title: string;
  text: string;
  src: string;
}) {
  return (
    <div className="flex items-center justify-start translate-x-[20%] md:translate-x-0 md:justify-center gap-x-4 w-full">
      <Image
        width={56}
        height={56}
        src={src}
        alt={title}
        className="w-10 h-10 xl:min-w-14 xl:h-14 rounded-md"
      ></Image>
      <div className="flex flex-col">
        <Subtitle className="text-base xl:text-lg 2xl:text-xl text-white">
          {title}
        </Subtitle>
        <Span className="text-xs xl:text-base 2xl:text-lg text-white">
          {text}
        </Span>
      </div>
    </div>
  );
}
