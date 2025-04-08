interface CarouselImageProps {
    src: string
}

const CarouselImage = ({ src }: CarouselImageProps) => {
    return (
        <img
            className=" block object-cover max-w-[170px] h-[170px] aspect-square"
            src={src}
        />
    )
}

export default CarouselImage
