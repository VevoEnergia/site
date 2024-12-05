import { ReactNode } from "react";

interface SectionProps{
    id?: string,
    children?: ReactNode,
    className?: string,
}

export default function Section({id, children, className}: SectionProps){
    return (
        <section id={id} className={`${className} min-h-screen w-screen 2xl:px-48 snap-start`}>
            {children}
        </section>
    )
}