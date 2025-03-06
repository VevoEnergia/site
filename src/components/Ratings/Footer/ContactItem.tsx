import { ReactNode } from "react";
import { Title, Span } from "../../ui/text";
import { IconType } from "react-icons";

interface ContactItemProps {
  Icon: IconType;
  title: string;
  value: string;
}

export default function ContactItem({ Icon, title, value }: ContactItemProps) {
  return (
    <div className="grid grid-cols-[48px_1fr] grid-rows-2 items-center justify-center">
      <div className="bg-secondary w-10 h-10 rounded-full grid items-center justify-center">
        <Icon className="text-2xl text-white" />
      </div>
      <Title className="text-sm xl:text-lg text-secondary">
        {title.slice(0, -1)}
        <strong className="text-primary">{title.slice(-1)}</strong>
      </Title>
      <Span className="text-base xl:text-xl col-span-2 mt-1 !text-neutral-800">
        {value}
      </Span>
    </div>
  );
}
