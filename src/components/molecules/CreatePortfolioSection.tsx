import CreatePortfolioSectionHeader from "../atoms/PortfolioSectionHeader"

interface CreatePortfolioSectionProps {
    header: string
    children: React.ReactNode
}

const CreatePortfolioSection = ({
    header,
    children
}: CreatePortfolioSectionProps) => {
    return (
        <div className="flex flex-col gap-2">
            <CreatePortfolioSectionHeader header={header} />
            {children}
        </div>
    )
}
export default CreatePortfolioSection
