interface CreatePortfolioSectionHeaderProps {
    header: string
}
const CreatePortfolioSectionHeader = ({
    header
}: CreatePortfolioSectionHeaderProps) => {
    return <h2 className="text-2xl font-bold">{header}</h2>
}
export default CreatePortfolioSectionHeader
