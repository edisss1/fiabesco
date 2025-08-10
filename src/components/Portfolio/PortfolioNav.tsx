import { Link } from "react-router-dom"
import PageHeader from "../Layout/PageHeader"
import Arrow from "../../assets/Arrow"
import PencilIcon from "../../assets/PencilIcon"

interface PortfolioNavProps {
    editLinkEnabled?: boolean
}

const PortfolioNav = ({ editLinkEnabled = false }: PortfolioNavProps) => {
    return (
        <nav className="flex items-center justify-between p-4 dark:bg-primary dark:m-2 dark:rounded-lg dark:text-text-primary">
            <div className="flex items-center gap-2">
                <Link to={"/app/feed"}>
                    <Arrow className="dark:[&>*]:stroke-text-primary!" />
                </Link>
                <PageHeader header="Portfolio" />
            </div>
            {editLinkEnabled && (
                <div className="flex items-center gap-">
                    <PencilIcon />
                    <Link
                        className="relative after:w-full after:h-0.5 after:bg-text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 hover:after:scale-x-0 after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                        to={""}
                    >
                        Edit portfolio
                    </Link>
                </div>
            )}
        </nav>
    )
}
export default PortfolioNav
