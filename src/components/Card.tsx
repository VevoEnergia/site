import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  src?: string;
  children: ReactNode;
}

export default function Card({ src = "", children }: CardProps) {
  return (
    <div className="grid rounded-3xl shadow-xl font-roboto group transition-all duration-300 border-4 border-primary">
      <div className="max-h-96 xl:max-h-72 flex items-center justify-center overflow-hidden rounded-xl shadow-md">
        <Image
          src={src}
          alt="Imagem superior de uma casa"
          width={1920}
          height={1080}
          className="rounded-t-3xl object-contain w-full"
        />
      </div>
      <div className="px-2 xl:px-4 pb-4 xl:pb-6">{children}</div>
    </div>
  );
}
