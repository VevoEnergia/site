"use client";
import Section from "@/components/ui/section";
import Carousel from "./Carousel";
import { Subtitle } from "../ui/text";
export default function Ratings() {
  return (
    <Section
      id="depoimentos"
      className="!max-h-[480px] !px-0 !min-h-96 bg-neutral-100 !pb-32"
    >
      <Subtitle className="ms-6 sm:ms-8 lg:ms-32 2xl:ms-60 !text-3xl sm:!text-4xl xl:!text-5xl 2xl:!text-6xl text-secondary">
        Depoimentos<span className="text-primary">.</span>
      </Subtitle>
      <Carousel />
    </Section>
  );
}
