import { useState } from "react"
import Textarea from "../atoms/Textarea"
import CreatePortfolioSection from "../molecules/CreatePortfolioSection"

const PortfolioAboutSection = () => {
    return (
        <CreatePortfolioSection header="Tell us about yourself">
            <Textarea
                id="about"
                onChange={(e) => console.log(e.target.value)}
                maxLength={600}
                placeholder="Write here... (max 600 characters) "
                className="-full max-w-[500px] resize-none p-2 rounded-lg focus:outline-primary"
            />
        </CreatePortfolioSection>
    )
}
export default PortfolioAboutSection
