interface ConversationsContainerProps {
    children: React.ReactNode
}

const ConversationsContainer = ({ children }: ConversationsContainerProps) => {
    return <div className="flex flex-col gap-2">{children}</div>
}
export default ConversationsContainer
