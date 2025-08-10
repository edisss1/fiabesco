import { useState } from "react"
import ChevronDownIcon from "../../assets/ChevronDownIcon"
import Button from "../Common/Button"

interface PostImagesProps {
    images: string[]
}

const Image = ({ image, className }: { image: string; className?: string }) => {
    return (
        <img
            src={image}
            alt="post"
            loading="lazy"
            decoding="async"
            className={`w-full max-h-[300px] object-cover rounded-lg block shrink-0 ${className} transition-all duration-200`}
        />
    )
}

const PostImages = ({ images }: PostImagesProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState("right")
    const count = images.length

    const slideNext = () => {
        setDirection("right")
        setCurrentIndex((prev) => {
            if (prev === count - 1) return 0
            return prev + 1
        })
    }

    const slidePrevious = () => {
        setDirection("left")
        setCurrentIndex((prev) => {
            if (prev === 0) return count - 1
            return prev - 1
        })
    }

    return (
        <div className="relative ">
            {count > 1 && (
                <>
                    <Button
                        onClick={slideNext}
                        className="absolute top-1/2 -translate-y-1/2 left-2 bg-background/50 rounded-full p-2 backdrop-blur-lg cursor-pointer z-[40]"
                    >
                        <ChevronDownIcon className="rotate-90" />
                    </Button>
                    <Button
                        onClick={slidePrevious}
                        className="absolute top-1/2 -translate-y-1/2 right-2  bg-background/50 rounded-full p-2 backdrop-blur-lg cursor-pointer z-[40]"
                    >
                        <ChevronDownIcon className="-rotate-90" />
                    </Button>
                </>
            )}
            <div className="overflow-x-hidden w-full h-[300px] relative">
                {images &&
                    images.map((image, index) => (
                        <Image
                            key={index}
                            image={image}
                            className={`
                                absolute top-0 left-0 
                                ${
                                    index === currentIndex
                                        ? "translate-x-0 z-20"
                                        : direction === "right"
                                        ? "-translate-x-full z-10"
                                        : "translate-x-full z-10"
                                }
                              `}
                        />
                    ))}
            </div>
        </div>
    )
}

export default PostImages
