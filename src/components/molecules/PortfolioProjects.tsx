import { Portfolio } from "../../types/Portfolio"
import PortfolioProjectCard from "../atoms/PortfolioProjectCard"

interface PortfolioProjectsProps {
    projects: Portfolio["projects"]
}

const PortfolioProjects = ({ projects }: PortfolioProjectsProps) => {
    return (
        <div className="portfolio-projects gap-4 w-full">
            {projects.map((project) => (
                <PortfolioProjectCard project={project} />
            ))}
        </div>
    )
}
export default PortfolioProjects
