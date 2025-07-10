import { NavLink } from "react-router-dom"

interface SidebarLinkProps {
    path: string
    text: string
    icon: React.ReactNode
}

const SidebarLink = ({ path, text, icon }: SidebarLinkProps) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg gap-2 hover:bg-secondary dark:hover:bg-secondary-dark dark:hover:text-text-primary hover:font-bold transition-all duration-200 dark:hover:[&>svg>*]:stroke-text-primary ${
                    isActive
                        ? "bg-secondary font-bold dark:text-text-primary dark:[&>svg>*]:stroke-text-primary"
                        : "dark:[&>svg>*]:stroke-text-primary-dark [&>svg>*]:stroke-text-primary "
                } `
            }
            to={path}
        >
            {icon}
            <span> {text}</span>
        </NavLink>
    )
}
export default SidebarLink
