import Image from "next/image"
import { ReactElement, ReactNode } from "react";

interface CardProps {
    Icon?: ReactNode;
    src?: string;
    children: ReactNode
}

export default function Card({Icon, src = "", children} : CardProps){
    return (
        <div className="flex flex-col items-center text-center min-h-80 rounded-md border drop-shadow-md px-10">
            {Icon ?
                Icon :
                <Image src={src} alt="" width={300} height={80} className="w-full h-20"/>
            }

            {children}
        </div>
    )
}