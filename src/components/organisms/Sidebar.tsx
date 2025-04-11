import SidebarLink from "../atoms/SidebarLink"
import UserInfo from "../atoms/UserInfo"

const Sidebar = () => {
    const links = [
        {
            text: "Feed",
            path: "/app/feed"
        },
        {
            text: "Inbox",
            path: "/app/inbox"
        },
        {
            text: "Following",
            path: "/app/following"
        },
        {
            text: "Settings",
            path: "/app/settings"
        },
        {
            text: "Portfolio",
            path: "/app/portfolio"
        }
    ]
    return (
        <aside className="flex flex-col gap-8 w-full max-w-[250px] p-4 h-screen border-r-2 border-black/70 ">
            <UserInfo />
            <div className="flex flex-col gap-2">
                {links.map((link) => (
                    <SidebarLink {...link} />
                ))}
            </div>
        </aside>
    )
}
export default Sidebar
