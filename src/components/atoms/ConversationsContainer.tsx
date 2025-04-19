interface ConversationsContainerProps {
    children: React.ReactNode
}

const ConversationsContainer = ({ children }: ConversationsContainerProps) => {
    return <div className="flex flex-col ">{children}</div>
}
export default ConversationsContainer
