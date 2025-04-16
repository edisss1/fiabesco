interface InboxContainerProps {
    children: React.ReactNode
}

const InboxContainer = ({ children }: InboxContainerProps) => {
    return <main className="flex w-full justify-start p-4">{children}</main>
}
export default InboxContainer
