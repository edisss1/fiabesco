import PageWrapper from "../components/atoms/PageWrapper"
import PortfolioFallback from "../components/molecules/PortfolioFallback"
import PortfolioNav from "../components/organisms/PortfolioNav"

const Portfolio = () => {
    return (
        <PageWrapper headerEnabled header="Portfolio">
            <PortfolioFallback />
        </PageWrapper>
    )
}
export default Portfolio
