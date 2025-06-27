import { Portfolio } from "../../types/Portfolio"
import PortfolioProjectCard from "../atoms/PortfolioProjectCard"
import PortfolioSectionHeader from "../atoms/PortfolioSectionHeader"

interface PortfolioProjectsProps {
    projects: Portfolio["projects"]
    textColor: string
}

const PortfolioProjects = ({ projects, textColor }: PortfolioProjectsProps) => {
    return (
        <>
            <PortfolioSectionHeader
                textColor={textColor}
                header="Latest projects"
            />

            <div className="portfolio-projects place-items-center  max-w-[1100px]">
                {projects.map((project) => (
                    <PortfolioProjectCard project={project} />
                ))}
            </div>
        </>
    )
}
export default PortfolioProjects
