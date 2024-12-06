import { ReactNode } from "react";
import { Title, Span } from "../ui/text";

interface ContactItemProps{
    icon: ReactNode,
    title: string,
    value: string
}

export default function ContactItem({icon, title, value}: ContactItemProps){
    return (
        <div className="grid grid-cols-[48px_1fr] grid-rows-2 items-center">
            {icon}
            <Title>{title}</Title>
            <Span className="text-xl col-span-2">{value}</Span>
        </div>
    )
}