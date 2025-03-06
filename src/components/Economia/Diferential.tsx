import Image from "next/image";

export default function Diferential({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-neutral-800 gap-y-3">
      <Image width={46} height={46} src={src} alt={text} className="invert" />
      <span className="font-medium">{text}</span>
    </div>
  );
}
