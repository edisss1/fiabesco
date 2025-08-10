import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Common/Button"
import PortfolioMain from "../components/Portfolio/PortfolioMain"
import PortfolioAboutSection from "../components/Portfolio/PortfolioAboutSection"
import PortfolioAppearanceSection from "../components/Portfolio/PortfolioAppearanceSection"
import PortfolioContactSection from "../components/Portfolio/PortfolioContactSection"
import PortfolioNav from "../components/Portfolio/PortfolioNav"
import PortfolioProjectsSection from "../components/Portfolio/PortfolioProjectsSection"
import { AppDispatch, RootState } from "../redux/store"
import { createPortfolio } from "../redux/slices/portfolioSlice"

const CreatePortfolio = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <>
            <PortfolioNav />
            <PortfolioMain>
                <PortfolioAboutSection />
                <PortfolioProjectsSection />
                <PortfolioAppearanceSection />
                <PortfolioContactSection />
                <Button
                    onClick={() => dispatch(createPortfolio(user?._id))}
                    className="w-fit bg-secondary px-6 py-2 rounded-lg"
                >
                    Save changes & Preview
                </Button>
            </PortfolioMain>
        </>
    )
}
export default CreatePortfolio
