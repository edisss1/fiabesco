import { useDispatch, useSelector } from "react-redux"
import SidebarLink from "../atoms/SidebarLink"
import UserInfo from "../atoms/UserInfo"
import { AppDispatch, RootState } from "../../redux/store"
import Button from "../atoms/Button"
import { useNavigate } from "react-router-dom"
import { logout } from "../../utils/logout"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"

interface SidebarProps {
    sidebarOpened: boolean
    isSmall: boolean
    onClose: () => void
}

const Sidebar = ({ sidebarOpened, isSmall, onClose }: SidebarProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const sidebarRef = useRef<HTMLDivElement>(null)

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
        <>
            <motion.aside
                id="sidebar"
                inert={!sidebarOpened}
                aria-hidden={!sidebarOpened}
                ref={sidebarRef}
                initial={{ x: sidebarOpened ? 0 : -250 }}
                animate={{ x: sidebarOpened ? 0 : -250 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                className={`flex flex-col  ${
                    isSmall ? "fixed left-0 top-0 bg-white z-40" : "sticky"
                } top-0 gap-8 w-full max-w-[250px] p-4 h-screen border-r-2 border-black/70 `}
            >
                <div className="mt-4">
                    <UserInfo
                        firstName={user?.firstName}
                        lastName={user?.lastName}
                        handle={user?.handle}
                        photoURL={user?.photoURL}
                        userID={user?._id}
                    />
                </div>
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
            </motion.aside>
            <AnimatePresence mode="wait">
                {isSmall && sidebarOpened && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeIn" }}
                        className="fixed inset-0 z-30 bg-black/30"
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
export default Sidebar
