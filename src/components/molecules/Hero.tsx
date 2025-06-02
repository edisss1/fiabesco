import Brush from "../../assets/Brush"
import HeroHeader from "../atoms/HeroHeader"
import Link from "../atoms/Link"
import Section from "../atoms/Section"
import heroImg from "../../assets/imgs/hero-img.png"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <Section position="relative">
            <div className="flex flex-wrap-reverse justify-center px-2">
                <div className="flex flex-col max-lg:items-center">
                    <HeroHeader>
                        Connect,{"  "}
                        <span className="relative">
                            Create,
                            <Brush />
                        </span>
                        {"  "}
                        and Share Your Art with the World.
                    </HeroHeader>
                    <Link
                        path="/auth/signup"
                        className="w-full max-w-[200px] text-center"
                        variant="secondary"
                    >
                        Join
                    </Link>
                </div>
                <motion.img
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 10, scale: 1 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                    loading="lazy"
                    decoding="async"
                    src={heroImg}
                    alt=""
                />
            </div>

            {/* <Scribble /> */}
        </Section>
    )
}
export default Hero
