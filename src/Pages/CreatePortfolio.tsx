import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioAboutSection from "../components/organisms/PortfolioAboutSection"
import PortfolioAppearanceSection from "../components/organisms/PortfolioAppearanceSection"
import PortfolioNav from "../components/organisms/PortfolioNav"
import PortfolioProjectsSection from "../components/organisms/PortfolioProjectsSection"

const CreatePortfolio = () => {
    return (
        <>
            <PortfolioNav />
            <PortfolioMain>
                <PortfolioAboutSection />
                <PortfolioProjectsSection />
                <PortfolioAppearanceSection />
            </PortfolioMain>
        </>
    )
}
export default CreatePortfolio
