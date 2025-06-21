import PortfolioProjectUpload from "../atoms/AddPortfolioProject"
import CreatePortfolioSection from "../molecules/CreatePortfolioSection"

const PortfolioProjectsSection = () => {
    return (
        <CreatePortfolioSection header="Add your projects">
            <PortfolioProjectUpload />
        </CreatePortfolioSection>
    )
}
export default PortfolioProjectsSection
