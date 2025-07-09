import { useNavigate } from "react-router-dom"
import Button from "../atoms/Button"
import Arrow from "../../assets/Arrow"
import ConversationsContainer from "../atoms/ConversationsContainer"
import { Conversation } from "../../types/Conversation"
import ConversationPreview from "../atoms/ConversationPreview"
import { useMediaQuery } from "../../hooks/useMediaQuery"

interface InboxSidebarProps {
    conversations: Conversation[]
    conversationID: string | undefined
    onClick?: () => void
    isConversationOpened: boolean
}

const InboxSidebar = ({
    conversations,
    conversationID,
    onClick,
    isConversationOpened
}: InboxSidebarProps) => {
    const navigate = useNavigate()
    const isSmall = useMediaQuery("(max-width: 768px)")

    return (
        <div
            className={`flex flex-col gap-8 ${
                isConversationOpened && isSmall
                    ? "-translate-x-full"
                    : "translate-x-0"
            } p-4 border-r-2 w-full lg:max-w-[300px] max-lg:absolute h-screen inset-0 bg-background dark:bg-background-dark z-[100] transition-transform duration-[450ms]`}
        >
            <div className="flex items-center gap-2">
                <Button
                    onClick={() => navigate("/app/feed")}
                    className="p-2 hover:bg-text-primary/30 rounded-full transition-colors duration-150 ease-in"
                >
                    <Arrow />
                </Button>
                <h1 className="text-lg font-bold">Messages</h1>
            </div>
            <ConversationsContainer>
                {conversations?.map((conversation) => (
                    <ConversationPreview
                        onClick={onClick}
                        conversationID={conversationID}
                        key={conversation._id}
                        names={conversation.names}
                        id={conversation._id}
                        lastMessage={conversation.lastMessage}
                    />
                ))}
            </ConversationsContainer>
        </div>
    )
}
export default InboxSidebar
