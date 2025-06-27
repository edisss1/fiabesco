interface CreatePortfolioSectionHeaderProps {
    header: string
    textColor: string
}
const PortfolioSectionHeader = ({
    header,
    textColor
}: CreatePortfolioSectionHeaderProps) => {
    return (
        <h2 style={{ color: textColor }} className="text-2xl font-bold">
            {header}
        </h2>
    )
}
export default PortfolioSectionHeader
