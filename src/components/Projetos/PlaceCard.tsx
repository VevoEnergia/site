import Image from "next/image";
import { Subtitle } from "../ui/text";

interface PlaceCardProps {
  src: string;
  text: string;
}

export default function PlaceCard({ src, text }: PlaceCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-neutral-200 rounded-xl p-4 drop-shadow-lg flex flex-col items-center justify-center w-72">
      <Image
        src={src}
        width={140}
        height={140}
        alt={`Ícone de ${text}`}
        className="w-40 h-36"
      />

      <Subtitle className="text-neutral-700 mt-6">{text}</Subtitle>
    </div>
  );
}
