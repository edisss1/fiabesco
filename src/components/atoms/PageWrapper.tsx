import Sidebar from "../organisms/Sidebar"

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
    return (
        <div className="flex min-h-screen">
            {sidebarEnabled && <Sidebar />}
            <div
                className={`flex flex-col items-start ${
                    sidebarEnabled && "px-8 pt-4"
                }  w-full overflow-y-auto `}
            >
                {headerEnabled && (
                    <h1 className="text-xl font-bold">{header}</h1>
                )}
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
