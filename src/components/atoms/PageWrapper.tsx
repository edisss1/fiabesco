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
        <div className="flex min-h-screen sm:px-2">
            {sidebarEnabled && (
                <Sidebar
                    setSidebarOpened={setSidebarOpened}
                    isSmall={isSmall}
                    onClose={() => setSidebarOpened(false)}
                    sidebarOpened={sidebarOpened}
                />
            )}

            <div
                className={`flex flex-col ${
                    sidebarEnabled && !bannerPresent && "md:px-8  py-4"
                } items-start w-full overflow-y-auto `}
            >
                {sidebarEnabled && (
                    <div
                        className={`sticky top-0 flex items-center justf bg-background w-full z-20  ps-3`}
                    >
                        {isSmall && (
                            <Button
                                ariaLabel="Open sidebar"
                                aria-expanded={sidebarOpened}
                                ariaControls="sidebar"
                                onClick={() => setSidebarOpened(!sidebarOpened)}
                            >
                                <HamburgerIcon />
                            </Button>
                        )}
                        {headerEnabled && (
                            <h1 className=" text-xl font-bold">{header}</h1>
                        )}
                    </div>
                )}
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
