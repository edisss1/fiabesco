interface PortfolioHeaderProps {
    userName: string
    textColor: string
}

const PortfolioHeader = ({ userName, textColor }: PortfolioHeaderProps) => {
    return (
        <h1
            style={{ color: textColor }}
            className="text-[clamp(2rem,10vw,4rem)] font-bold"
        >
            {userName}'s portfolio
        </h1>
    )
}
export default PortfolioHeader
