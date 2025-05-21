import SettingsNavLink from "../atoms/SettingsNavLink"

const links = [
    {
        text: "General",
        path: "/app/settings/general"
    },
    {
        text: "Account",
        path: "/app/settings/account"
    },
    {
        text: "Privacy",
        path: "/app/settings/privacy"
    },
    {
        text: "Data & Storage",
        path: "/app/settings/data-storage"
    }
]

const SettingsNav = () => {
    return (
        <nav className="mt-9 mb-6 ">
            <ul className="flex items-center settings-nav-links max-sm:justify-center max-sm:flex-wrap">
                {links.map((link, index) => (
                    <SettingsNavLink key={index} {...link} />
                ))}
            </ul>
        </nav>
    )
}
export default SettingsNav
