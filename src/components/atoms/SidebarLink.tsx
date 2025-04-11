import { NavLink } from "react-router-dom"

interface SidebarLinkProps {
    path: string
    text: string
}

const SidebarLink = ({ path, text }: SidebarLinkProps) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex items-center  gap-2 ${
                    isActive
                        ? "[&>svg]:fill-text-secondary text-text-secondary"
                        : ""
                } `
            }
            to={path}
        >
            {text}
        </NavLink>
    )
}
export default SidebarLink
