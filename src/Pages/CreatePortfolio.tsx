import { useDispatch } from "react-redux"
import Button from "../components/atoms/Button"
import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioAboutSection from "../components/organisms/PortfolioAboutSection"
import PortfolioAppearanceSection from "../components/organisms/PortfolioAppearanceSection"
import PortfolioContactSection from "../components/organisms/PortfolioContactSection"
import PortfolioNav from "../components/organisms/PortfolioNav"
import PortfolioProjectsSection from "../components/organisms/PortfolioProjectsSection"
import { AppDispatch } from "../redux/store"
import { createPortfolio } from "../redux/slices/portfolioSlice"

const CreatePortfolio = () => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <PortfolioNav />
            <PortfolioMain>
                <PortfolioAboutSection />
                <PortfolioProjectsSection />
                <PortfolioAppearanceSection />
                <PortfolioContactSection />
                <Button
                    onClick={() => dispatch(createPortfolio())}
                    className="w-fit bg-secondary px-6 py-2 rounded-lg"
                >
                    Save changes & Preview
                </Button>
            </PortfolioMain>
        </>
    )
}
export default CreatePortfolio
