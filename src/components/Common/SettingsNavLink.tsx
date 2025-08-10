import { NavLink } from "react-router-dom"

interface SettingsNavLinkProps {
    path: string
    text: string
}

const SettingsNavLink = ({ path, text }: SettingsNavLinkProps) => {
    return (
        <li className="py-1 px-2 text-lg relative after:scale-x-0 hover:after:scale-x-100   after:content-[''] after:block after:w-[calc(100%+5px)] after:h-1 after:bg-primary  after:rounded-full after:absolute after:bottom-0 after:right-1/2  after:translate-x-1/2 transition-all duration-200">
            <NavLink
                className={({ isActive }) =>
                    `${isActive && "font-bold"}
                    `
                }
                to={path}
            >
                {text}
            </NavLink>
        </li>
    )
}
export default SettingsNavLink
