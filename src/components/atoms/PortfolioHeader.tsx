interface PortfolioHeaderProps {
    userName: string
}

const PortfolioHeader = ({ userName }: PortfolioHeaderProps) => {
    return (
        <h1 className="text-[clamp(2rem,10vw,4rem)] font-bold">
            {userName}'s portfolio
        </h1>
    )
}
export default PortfolioHeader
