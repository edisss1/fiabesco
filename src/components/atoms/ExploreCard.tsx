interface ExploreCardProps {
    header: string
    text: string
}

const ExploreCard = ({ header, text }: ExploreCardProps) => {
    return (
        <div className="flex text-text-primary flex-col items-center gap-4 max-w-[300px]">
            <h3 className="text-xl font-medium">{header}</h3>
            <p className="text-center">{text}</p>
        </div>
    )
}
export default ExploreCard
