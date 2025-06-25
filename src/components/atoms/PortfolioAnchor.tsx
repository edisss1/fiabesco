interface PortfolioAnchorProps {
    url: string
    icon: React.ReactNode
}

const PortfolioAnchor = ({ url, icon }: PortfolioAnchorProps) => {
    const subString = "https://www."

    const contains = url.includes(subString)
    if (!contains) {
        url = subString + url
    }

    return (
        <a href={url} target="_blank">
            {icon}
        </a>
    )
}
export default PortfolioAnchor
