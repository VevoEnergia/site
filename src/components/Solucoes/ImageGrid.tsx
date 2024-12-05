interface ImagePridProps{
    images: string[] | []
}

export default function ImageGrid({images}:ImagePridProps ) {
    return (
        <div className="grid grid-cols-5 gap-4 items-center w-3/4 self-center mt-32">
            {images?.length && images.map((_, index) => (
                <div
                    key={index}
                    className="max-w-48 h-48 bg-neutral-600 rounded-md hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
                ></div>
            ))}
        </div>
    );
}
