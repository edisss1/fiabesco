import Sidebar from "../organisms/Sidebar"

interface PageWrapperProps {
    children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col items-center w-full overflow-y-auto p-6">
                {children}
            </div>
        </div>
    )
}
export default PageWrapper
