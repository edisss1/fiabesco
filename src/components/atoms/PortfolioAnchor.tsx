interface PortfolioAnchorProps {
    url: string
    icon: React.ReactNode
}

const PortfolioAnchor = ({ url, icon }: PortfolioAnchorProps) => {
    return (
        <a href={url} target="_blank">
            {icon}
        </a>
    )
}
export default PortfolioAnchor
