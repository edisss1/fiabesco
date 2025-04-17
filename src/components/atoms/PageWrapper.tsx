import Sidebar from "../organisms/Sidebar"

interface PageWrapperProps {
    children: React.ReactNode
    sidebarEnabled?: boolean
}

const PageWrapper = ({ children, sidebarEnabled = true }: PageWrapperProps) => {
    return (
        <div className="flex min-h-screen">
            {sidebarEnabled && <Sidebar />}
            <div className="flex flex-col items-center w-full overflow-y-auto ">
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
