interface InboxContainerProps {
    children: React.ReactNode
}

const InboxContainer = ({ children }: InboxContainerProps) => {
    return (
        <main className="flex w-full justify-start gap-4 overflow-hidden">
            {children}
        </main>
    )
}
export default InboxContainer
