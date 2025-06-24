import { useSelector } from "react-redux"
import AddPortfolioProject from "../atoms/AddPortfolioProject"
import { RootState } from "../../redux/store"
import ProjectsListCard from "../atoms/ProjectsListCard"

const PortfolioProjectsList = () => {
    const { projects } = useSelector(
        (state: RootState) => state.portfolio.portfolioData
    )
    return (
        <div className="flex items-start gap-4">
            <AddPortfolioProject />
            <div className="flex items-center gap-4">
                {projects &&
                    projects.map((project, index) => (
                        <ProjectsListCard
                            key={`${project.title}-${index}` as string}
                            {...project}
                        />
                    ))}
            </div>
        </div>
    )
}
export default PortfolioProjectsList
