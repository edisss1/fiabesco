import ConversationsContainer from "../components/atoms/ConversationsContainer"
import ConversationPreview from "../components/atoms/ConversationPreview"
import InboxContainer from "../components/atoms/InboxContainer"
import PageWrapper from "../components/atoms/PageWrapper"
import { MessageType } from "../types/Message"

import Conversation from "../components/organisms/Conversation"
import Arrow from "../assets/Arrow"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/atoms/Button"

const Inbox = () => {
    // const [conversationOpened, setConversationOpened] = useState(false)
    const navigate = useNavigate()

    const testMessage: MessageType = {
        content: "very very last message",
        conversationID: "",
        createdAt: "now",
        read: true,
        senderID: " frfrf",
        files: [],
        updatedAt: "tomorrow",
        _id: "121"
    }

    const testMessages: MessageType[] = [
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: "67f8152cb78b9b4fd6bb4e57",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: "67f8152cb78b9b4fd6bb4e57",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: "67f8152cb78b9b4fd6bb4e57",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: "67f8152cb78b9b4fd6bb4e57",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: "67f8152cb78b9b4fd6bb4e57",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: " frfrf",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: " frfrf",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: " frfrf",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        },
        {
            content: "very very last message",
            conversationID: "",
            createdAt: "now",
            read: true,
            senderID: " frfrf",
            files: [],
            updatedAt: "tomorrow",
            _id: "121"
        }
    ]

    return (
        <PageWrapper sidebarEnabled={false}>
            <InboxContainer>
                <div className="flex flex-col gap-8 p-4 ">
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-text-primary/30 rounded-full transition-colors duration-150 ease-in"
                        >
                            <Arrow />
                        </Button>
                        <h1 className="text-lg font-bold">Messages</h1>
                    </div>
                    <ConversationsContainer>
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                    </ConversationsContainer>
                </div>
                <Conversation messages={testMessages} />
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
