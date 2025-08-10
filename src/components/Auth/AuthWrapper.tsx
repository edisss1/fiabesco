interface AuthWrapperProps {
    children: React.ReactNode
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {children}
        </div>
    )
}
export default AuthWrapper
