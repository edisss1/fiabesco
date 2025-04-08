interface CarouselImageProps {
    src: string
}

const CarouselImage = ({ src }: CarouselImageProps) => {
    return (
        <div className="relative h-min group">
            <img
                className="object-cover  max-w-[170px] h-[170px] aspect-square"
                src={src}
            />
        </div>
    )
}

export default CarouselImage
