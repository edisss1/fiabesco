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
