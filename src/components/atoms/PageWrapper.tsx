import { useEffect, useState } from "react"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import Sidebar from "../organisms/Sidebar"
import Button from "./Button"
import HamburgerIcon from "../../assets/HamburgerIcon"

interface PageWrapperProps {
    children: React.ReactNode
    sidebarEnabled?: boolean
    headerEnabled?: boolean
    header?: string
    bannerPresent?: boolean
}

const PageWrapper = ({
    children,
    sidebarEnabled = true,
    headerEnabled = false,
    header,
    bannerPresent = false
}: PageWrapperProps) => {
    const isSmall = useMediaQuery("(max-width: 768px)")
    const [sidebarOpened, setSidebarOpened] = useState(!isSmall)

    useEffect(() => {
        setSidebarOpened(!isSmall)
    }, [isSmall])
    return (
        <div className="flex min-h-screen px-2">
            {sidebarEnabled && (
                <Sidebar
                    isSmall={isSmall}
                    onClose={() => setSidebarOpened(false)}
                    sidebarOpened={sidebarOpened}
                />
            )}
            <Button
                ariaLabel="Open/close sidebar"
                aria-expanded={sidebarOpened}
                ariaControls="sidebar"
                onClick={() => setSidebarOpened(!sidebarOpened)}
                className="absolute top-2 left-2 z-41 md:hidden"
            >
                <HamburgerIcon />
            </Button>
            <div
                className={`flex flex-col ${
                    sidebarEnabled && !bannerPresent && "px-8 py-4"
                } items-start w-full overflow-y-auto `}
            >
                {headerEnabled && (
                    <h1 className=" text-xl font-bold">{header}</h1>
                )}
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
