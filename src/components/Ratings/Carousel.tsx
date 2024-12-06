import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Rating from "./Rating"

const ratings = [
    {id: 1, src : 'https://placehold.co/600x400', name: "Nome Pessoa 1", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 2, src : 'https://placehold.co/600x400', name: "Nome Pessoa 2", rating: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 3, src : 'https://placehold.co/600x400', name: "Nome Pessoa 3", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 4, src : 'https://placehold.co/600x400', name: "Nome Pessoa 4", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 5, src : 'https://placehold.co/600x400', name: "Nome Pessoa 5", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 6, src : 'https://placehold.co/600x400', name: "Nome Pessoa 6", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
    {id: 7, src : 'https://placehold.co/600x400', name: "Nome Pessoa 7", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ac purus tempor efficitur eget in enim. Quisque dignissim ante magna, at consequat felis semper in. Vestibulum fringilla, leo vitae efficitur placerat, justo ante congue dui, vel condimentum lorem magna sit amet sapien. Cras quis lorem sit amet tellus lobortis pellentesque. Maecenas nibh nulla, consequat nec fringilla vel, rutrum venenatis mauris."},
]

export default function Carouse(){
    return (
        <Carousel
            opts={{
                align: "center"
            }}
            className=""
        >
            <CarouselPrevious />
            <CarouselContent>
                {ratings?.length && ratings.map(rating => (
                    <CarouselItem key={`rating-${rating.id}`} className="basis-1 md:basis-1/2 pl-24 py-4">
                        <Rating rating={rating}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
        </Carousel>
    )
}