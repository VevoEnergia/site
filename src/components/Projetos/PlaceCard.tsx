import Image from "next/image";
import { Subtitle } from "../ui/text";

interface PlaceCardProps {
  src: string;
  text: string;
}

export default function PlaceCard({ src, text }: PlaceCardProps) {
  return (
    <div className=" rounded-xl p-4 drop-shadow-lg flex flex-col items-center justify-end w-48 2xl:w-60">
      <Image
        src={src}
        width={512}
        height={512}
        alt={`Ícone de ${text}`}
        className="w-full h-auto"
      />

      <Subtitle className="text-secondary mt-6 text-sm xl:text-lg 2xl:text-2xl bg-white rounded-lg px-2 font-bold">
        {text}
      </Subtitle>
    </div>
  );
}
