import CreatePortfolioSection from "../molecules/CreatePortfolioSection"
import PortfolioProjectsList from "../molecules/PortfolioProjectsList"

const PortfolioProjectsSection = () => {
    return (
        <CreatePortfolioSection header="Add your projects">
            <PortfolioProjectsList />
        </CreatePortfolioSection>
    )
}
export default PortfolioProjectsSection
