import Curve from "../../assets/Curve"
import { exploreCards } from "../../constants/exploreCards"
import ExploreCard from "../Common/ExploreCard"
import Section from "../Common/Section"
import SectionHeader from "../Common/SectionHeader"

const Explore = () => {
    return (
        <Section position="relative">
            <SectionHeader>Explore the Community</SectionHeader>
            <div className="mt-6 flex justify-center items-center gap-8 flex-wrap">
                {exploreCards.map((card, index) => (
                    <ExploreCard key={card.header} index={index} {...card} />
                ))}
            </div>
            <Curve />
        </Section>
    )
}
export default Explore
