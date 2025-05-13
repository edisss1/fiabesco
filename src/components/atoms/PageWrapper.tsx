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
}

const PageWrapper = ({
    children,
    sidebarEnabled = true,
    headerEnabled = false,
    header
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
            {headerEnabled && (
                <h1 className="mt-4 ml-8 text-xl font-bold">{header}</h1>
            )}
            <div className="flex flex-col items-center w-full overflow-y-auto ">
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
