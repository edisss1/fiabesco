import { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

interface SettingsNavLinkProps {
    path: string
    text: string
}

const SettingsNavLink = ({ path, text }: SettingsNavLinkProps) => {
    const location = useLocation()
    const isActive = location.pathname === path

    useEffect(() => {
        console.log("Path", path, "Current Path", location.pathname)
        console.log("isActive", isActive, "From Link", text)
    }, [isActive, path, location.pathname])

    return (
        <li className="py-1 px-2 text-lg relative after:scale-x-0 hover:after:scale-x-100 after:origin-left font-bold after:content-[''] after:block after:w-[calc(100%+5px)] after:h-1 after:bg-primary  after:rounded-full after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2">
            <NavLink
                className={({ isActive }) =>
                    `${
                        isActive &&
                        "after:content-[''] after:block after:w-[calc(100%+5px)] after:h-1 after:bg-primary  after:rounded-full after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2"
                    }
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
