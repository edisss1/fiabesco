import { Portfolio } from "../../types/Portfolio"
import PortfolioProjectCard from "../atoms/PortfolioProjectCard"
import PortfolioSectionHeader from "../atoms/PortfolioSectionHeader"

interface PortfolioProjectsProps {
    projects: Portfolio["projects"]
}

const PortfolioProjects = ({ projects }: PortfolioProjectsProps) => {
    return (
        <>
            <PortfolioSectionHeader header="Latest projects" />

            <div className="portfolio-projects grid w-full gap-4 max-w-[1100px]">
                {projects.map((project) => (
                    <PortfolioProjectCard project={project} />
                ))}
            </div>
        </>
    )
}
export default PortfolioProjects
