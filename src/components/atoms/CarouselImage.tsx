interface CarouselImageProps {
    src: string
}

const CarouselImage = ({ src }: CarouselImageProps) => {
    return (
        <div className="relative  group w-[170px] h-[170px] hover:shadow-2xl transition-all">
            <img
                className="object-cover w-full h-full  aspect-square"
                src={src}
            />
        </div>
    )
}

export default CarouselImage
