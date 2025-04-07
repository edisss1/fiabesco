import Brush from "../../assets/Brush"
import Scribble from "../../assets/Scribble"
import HeroHeader from "../atoms/HeroHeader"
import Link from "../atoms/Link"
import Section from "../atoms/Section"

const Hero = () => {
    return (
        <Section position="relative">
            <HeroHeader>
                Connect, Create, and Share Your Art with the World.
            </HeroHeader>
            <Link
                path="/auth/signup"
                className="w-full max-w-[200px] text-center"
                variant="primary"
            >
                Join
            </Link>
            <Scribble />
            <Brush />
        </Section>
    )
}
export default Hero
