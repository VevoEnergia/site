import { ReactNode } from "react";

interface SectionProps{
    children?: ReactNode,
    className?: string,
}

export default function Section({children, className}: SectionProps){
    return (
        <section className={`${className} w-screen 2xl:px-48`}>
            {children}
        </section>
    )
}