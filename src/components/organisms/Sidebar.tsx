import { useDispatch, useSelector } from "react-redux"
import SidebarLink from "../atoms/SidebarLink"
import UserInfo from "../atoms/UserInfo"
import { AppDispatch, RootState } from "../../redux/store"
import Button from "../atoms/Button"
import { useNavigate } from "react-router-dom"
import { logout } from "../../utils/logout"

const Sidebar = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

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
            path: "/app/settings/general"
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
            <Button
                onClick={() => logout(navigate, dispatch)}
                variant="secondary"
            >
                temporary logout
            </Button>
            <div className="flex flex-col gap-2">
                {links.map((link) => (
                    <SidebarLink key={link.path} {...link} />
                ))}
            </div>
        </aside>
    )
}
export default Sidebar
