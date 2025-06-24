import { Portfolio } from "../../types/Portfolio"

interface PortfolioProjectCardProps {
    project: Portfolio["projects"][number]
}

const PortfolioProjectCard = ({ project }: PortfolioProjectCardProps) => {
    return (
        <a
            href={project.link}
            target="_blank"
            aria-label={`View project: ${project.title}`}
            className="w-full max-w-[250px]"
        >
            <img
                src={project.img as string}
                alt={`Screenshot of ${project.title}`}
                className="w-full object-cover aspect-square rounded-lg bg-text-primary/40"
            />
            <h3 className="text-lg mt-2">{project.title}</h3>
        </a>
    )
}
export default PortfolioProjectCard
