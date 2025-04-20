interface InboxContainerProps {
    children: React.ReactNode
}

const InboxContainer = ({ children }: InboxContainerProps) => {
    return <main className="flex w-full justify-start ">{children}</main>
}
export default InboxContainer
