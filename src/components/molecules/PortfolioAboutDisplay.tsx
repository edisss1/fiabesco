import { useSelector } from "react-redux"
import PortfolioHeader from "../atoms/PortfolioHeader"
import { RootState } from "../../redux/store"

interface PortfolioAboutDisplayProps {
    userName: string
    aboutText: string
    textColor: string
}

const PortfolioAboutDisplay = ({
    userName,
    aboutText,
    textColor
}: PortfolioAboutDisplayProps) => {
    return (
        <div className="flex flex-col gap-5 w-full max-w-[800px]">
            <PortfolioHeader textColor={textColor} userName={userName} />
            <p style={{ color: textColor }}>{aboutText}</p>
        </div>
    )
}
export default PortfolioAboutDisplay
