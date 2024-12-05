import { ReactNode } from "react"

interface TextProps{
    children?: ReactNode
    className?: string
}

export function Title({className, children}:TextProps){
    return (
        <h1 className={`text-4xl font-black ${className}`}>
            {children}
        </h1>
    )
}

export function Subtitle({className, children}:TextProps){
    return (
        <h2 className={`text-3xl font-bold ${className}`}>
            {children}
        </h2>
    )
}

export function Paragraph({className, children}:TextProps){
    return (
        <p className={`text-lg font-medium ${className}`}>
            {children}
        </p>
    )
}