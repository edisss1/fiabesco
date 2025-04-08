import Curve from "../../assets/Curve"
import { exploreCards } from "../../constants/exploreCards"
import ExploreCard from "../atoms/ExploreCard"
import Section from "../atoms/Section"
import SectionHeader from "../atoms/SectionHeader"

const Explore = () => {
    return (
        <Section position="relative">
            <SectionHeader>Explore the Community</SectionHeader>
            <div className="mt-6 flex justify-center items-center gap-8 flex-wrap">
                {exploreCards.map((card) => (
                    <ExploreCard {...card} />
                ))}
            </div>
            <Curve />
        </Section>
    )
}
export default Explore
