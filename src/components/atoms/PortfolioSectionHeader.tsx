interface CreatePortfolioSectionHeaderProps {
    header: string
}
const PortfolioSectionHeader = ({
    header
}: CreatePortfolioSectionHeaderProps) => {
    return <h2 className="text-2xl font-bold">{header}</h2>
}
export default PortfolioSectionHeader
