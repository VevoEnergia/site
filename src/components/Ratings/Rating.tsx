import Image from "next/image";
import { Subtitle, Paragraph } from "../ui/text";
import { RxQuote } from "react-icons/rx";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

interface RatingProps {
  name: string;
  rating: number;
  text: string;
}

export default function Rating({ rating }: { rating: RatingProps }) {
  return (
    <div className="relative bg-white px-6 2xl:px-10 py-8 flex flex-col items-center lg:flex-row lg:items-start justify-center gap-x-8 border rounded-xl shadow-md">
      <div className="flex flex-col items-center justify-center gap-y-3 min-w-32">
        <Image
          className="rounded-xl drop-shadow-md object-cover object-center w-32 h-32"
          unoptimized
          src={"/rating/rating.png"}
          width={600}
          height={400}
          alt={`Icone de avaliação`}
        />
        <Subtitle className="text-center text-xl text-nowrap">
          {rating.name}
        </Subtitle>
        <div className="flex gap-x-2 items-center justify-center">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              i + 1 <= rating.rating ? (
                <IoIosStar
                  key={`start-${rating.name}-${i}`}
                  className="text-primary"
                />
              ) : (
                <IoIosStarOutline key={`start-${rating.name}-${i}`} />
              )
            )}
        </div>
      </div>
      <Paragraph className="text-md z-[99999]">{rating.text}</Paragraph>
      <RxQuote className="text-7xl absolute bottom-0 right-0 lg:bottom-8 lg:right-8 z-[9999] opacity-50 lg:opacity-80 text-secondary" />
    </div>
  );
}
