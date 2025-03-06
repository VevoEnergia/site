import { Title, Span } from "@/components/ui/text";
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
    <div className="flex items-start justify-start gap-x-4">
      <Image
        width={56}
        height={56}
        src={src}
        alt={title}
        className="w-10 h-10 xl:min-w-14 xl:h-14 rounded-md invert"
      ></Image>
      <div>
        <Title className="text-base xl:text-2xl 2xl:text-3xl text-secondary">
          {title}
        </Title>
        <Span className="text-xs xl:text-base 2xl:text-xl font-black">
          {text}
        </Span>
      </div>
    </div>
  );
}
