import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  src: string;
  children: ReactNode;
}

export default function ExpandableCard({ src, children }: CardProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-[100px_32px_1fr] xl:grid-rows-[80px_48px_1fr]  gap-y-4 items-center text-center mx-4 hover:h-72 h-48 xl:hover:h-80 xl:h-48 rounded-md drop-shadow-md p-8 font-roboto !bg-primary group transition-all duration-300 cursor-pointer">
      <Image
        src={src}
        width={80}
        height={80}
        className="place-self-center w-20 h-20"
        alt={""}
      />

      {children}
    </div>
  );
}
