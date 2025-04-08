interface SectionHeaderProps {
    children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
    return (
        <h2 className="text-2xl text-text-primary font-semibold">{children}</h2>
    )
}
export default SectionHeader
