"use client"
import Section  from "@/components/ui/section";
import Carousel from "./Carousel";


export default function Ratings(){

    return (
        <Section className="!max-h-[480px] !min-h-96 bg-neutral-100 !px-24 !pb-32">
            <Carousel />
        </Section>
    )
}