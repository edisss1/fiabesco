import { Portfolio } from "../../types/Portfolio"
import PortfolioProjectCard from "./PortfolioProjectCard"
import PortfolioSectionHeader from "./PortfolioSectionHeader"

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

            <div className="flex items-center gap-4 flex-wrap justify-center  max-w-[1100px]">
                {projects.map((project) => (
                    <PortfolioProjectCard
                        textColor={textColor}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}
export default PortfolioProjects
