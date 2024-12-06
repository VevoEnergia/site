import Link from "next/link"
import { Subtitle } from "../ui/text"
import { ReactNode } from "react"
import { PiNoteBlankThin } from "react-icons/pi";


interface ClickableImage{
    url: string,
    icon: ReactNode
}

interface DataProps{
    title: string,
    clickableImages: ClickableImage[]
}

const data = {
    socialNetworks: {
        title: "Redes Sociais",
        clickableImages: [{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},]
    },
    certifications: {
        title: "Certifications",
        clickableImages: [{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},]
    },
    financing: {
        title: "Financiamento",
        clickableImages: [{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},{url: "/", icon: <PiNoteBlankThin className="mx-auto"/>},]
    },
}
export default function AdditionalData(){
    return (
        <div className="space-y-12">
            <DataWrapper title={data.socialNetworks.title} clickableImages={data.socialNetworks.clickableImages} />
            <DataWrapper title={data.certifications.title} clickableImages={data.certifications.clickableImages} />
            <DataWrapper title={data.financing.title} clickableImages={data.financing.clickableImages} />
        </div>
    )
}

function DataWrapper({title, clickableImages}: DataProps){
    return (
        <div className="space-y-3">
            <Subtitle>
                {title}
            </Subtitle>
            <div className="flex items-center gap-x-8">
                {clickableImages?.length && clickableImages.map((image) => (
                    <Link href={image.url} key={`clickable-image-${Math.random()}`}>
                        <div className="w-12 h-12 bg-neutral-600 rounded-md text-white text-4xl grid items-center hover:scale-110 hover:shadow-md transition-all duration-300">
                            {image.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}