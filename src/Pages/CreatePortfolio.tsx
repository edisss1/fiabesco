import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioAboutSection from "../components/organisms/PortfolioAboutSection"
import PortfolioNav from "../components/organisms/PortfolioNav"
import PortfolioProjectsSection from "../components/organisms/PortfolioProjectsSection"

const CreatePortfolio = () => {
    return (
        <>
            <PortfolioNav />
            <PortfolioMain>
                <PortfolioAboutSection />
                <PortfolioProjectsSection />
            </PortfolioMain>
        </>
    )
}
export default CreatePortfolio
