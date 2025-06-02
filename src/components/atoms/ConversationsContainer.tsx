interface ConversationsContainerProps {
    children: React.ReactNode
}

const ConversationsContainer = ({ children }: ConversationsContainerProps) => {
    return <div className="flex flex-col max-lg:items-center ">{children}</div>
}
export default ConversationsContainer
