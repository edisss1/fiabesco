import { useEffect } from "react"
import Textarea from "../atoms/Textarea"
import CreatePortfolioSection from "../molecules/CreatePortfolioSection"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { updateAbout } from "../../redux/slices/portfolioSlice"

const PortfolioAboutSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { about } = useSelector(
        (state: RootState) => state.portfolio.portfolioData
    )
    useEffect(() => {
        console.log(about)
    }, [about])

    return (
        <CreatePortfolioSection header="Tell us about yourself">
            <Textarea
                value={about}
                id="about"
                onChange={(e) => dispatch(updateAbout(e.target.value))}
                maxLength={600}
                placeholder="Write here... (max 600 characters) "
                className="-full max-w-[500px] resize-none p-2 rounded-lg focus:outline-primary"
            />
        </CreatePortfolioSection>
    )
}
export default PortfolioAboutSection
