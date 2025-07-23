import { carouselImages } from "../../constants/carouselImages"
import CarouselImage from "../atoms/CarouselImage"
import { motion } from "framer-motion"

const Carousel = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="overflow-hidden w-full h-[15rem] relative flex  carousel-wrapper max-w-[1000px]"
        >
            <div className="flex gap-6 ">
                <div className="flex gap-6 carousel">
                    {carouselImages.map((image) => (
                        <CarouselImage key={image.src} {...image} />
                    ))}
                </div>
                <div className="flex gap-6 carousel">
                    {carouselImages.map((image) => (
                        <CarouselImage key={image.src + "2"} {...image} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
export default Carousel
