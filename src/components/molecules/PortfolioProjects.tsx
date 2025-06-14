import { Portfolio } from "../../types/Portfolio"
import PortfolioProjectCard from "../atoms/PortfolioProjectCard"
import PortfolioSectionHeader from "../atoms/PortfolioSectionHeader"

interface PortfolioProjectsProps {
    projects: Portfolio["projects"]
}

const PortfolioProjects = ({ projects }: PortfolioProjectsProps) => {
    return (
        <div className="flex flex-col items-center gap-9  mx-auto">
            <PortfolioSectionHeader header="Latest projects" />

            <div className="portfolio-projects grid w-full gap-4 max-w-[1100px]">
                {projects.map((project) => (
                    <PortfolioProjectCard project={project} />
                ))}
            </div>
        </div>
    )
}
export default PortfolioProjects
