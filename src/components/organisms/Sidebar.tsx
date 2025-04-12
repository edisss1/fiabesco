import { useSelector } from "react-redux"
import SidebarLink from "../atoms/SidebarLink"
import UserInfo from "../atoms/UserInfo"
import { RootState } from "../../redux/store"

const Sidebar = () => {
    const { user } = useSelector((state: RootState) => state.auth)

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
        <aside className="flex flex-col sticky top-0 gap-8 w-full max-w-[250px] p-4 h-screen border-r-2 border-black/70 ">
            <UserInfo
                firstName={user?.firstName}
                lastName={user?.lastName}
                handle={user?.handle}
                photoURL={user?.photoURL}
                userID={user?._id}
            />
            <div className="flex flex-col gap-2">
                {links.map((link) => (
                    <SidebarLink {...link} />
                ))}
            </div>
        </aside>
    )
}
export default Sidebar
