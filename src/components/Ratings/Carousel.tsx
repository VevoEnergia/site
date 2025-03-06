import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Rating from "./Rating";

import { ratings } from "@/data/depoimentos";

export default function Carouse() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="ms-40 w-[80%]"
    >
      <CarouselPrevious />
      <CarouselContent>
        {ratings?.length &&
          ratings.map((rating) => (
            <CarouselItem
              key={`rating-${rating.name}`}
              className="basis-1 md:basis-1/2 pl-24 py-4"
            >
              <Rating rating={rating} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
