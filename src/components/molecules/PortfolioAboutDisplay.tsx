import PortfolioHeader from "../atoms/PortfolioHeader"

interface PortfolioAboutDisplayProps {
    userName: string
    aboutText: string
}

const PortfolioAboutDisplay = ({
    userName,
    aboutText
}: PortfolioAboutDisplayProps) => {
    return (
        <div className="flex flex-col gap-5 w-full max-w-[800px]">
            <PortfolioHeader userName={userName} />
            <p>{aboutText}</p>
        </div>
    )
}
export default PortfolioAboutDisplay
