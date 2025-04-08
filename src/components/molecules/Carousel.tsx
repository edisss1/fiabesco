import { carouselImages } from "../../constants/carouselImages"
import CarouselImage from "../atoms/CarouselImage"

const Carousel = () => {
    return (
        <div className="overflow-hidden w-full h-[12rem] relative flex  carousel-wrapper max-w-[1000px]">
            <div className="flex gap-6  ">
                <div className="flex gap-6 carousel">
                    {carouselImages.map((image) => (
                        <CarouselImage {...image} />
                    ))}
                </div>
                <div className="flex gap-6 carousel">
                    {carouselImages.map((image) => (
                        <CarouselImage {...image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Carousel
