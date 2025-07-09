import { useEffect, useState } from "react"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import Sidebar from "../organisms/Sidebar"
import Button from "./Button"
import HamburgerIcon from "../../assets/HamburgerIcon"
import PageHeader from "./PageHeader"

interface PageWrapperProps {
    children: React.ReactNode
    sidebarEnabled?: boolean
    headerEnabled?: boolean
    header?: string
    bannerPresent?: boolean
    background?: string
}

const PageWrapper = ({
    children,
    sidebarEnabled = true,
    headerEnabled = false,
    header,
    bannerPresent = false,
    background
}: PageWrapperProps) => {
    const isSmall = useMediaQuery("(max-width: 768px)")
    const [sidebarOpened, setSidebarOpened] = useState(!isSmall)

    useEffect(() => {
        setSidebarOpened(!isSmall)
    }, [isSmall])
    return (
        <div
            style={{
                backgroundColor: background ? background : undefined
            }}
            className="flex min-h-screen "
        >
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
                } items-start w-full `}
            >
                {sidebarEnabled && (
                    <div
                        className={`sticky top-0 flex items-center justf  bg-background dark:bg-background-dark w-full z-20  ps-3`}
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
                        {headerEnabled && <PageHeader header={header} />}
                    </div>
                )}
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
