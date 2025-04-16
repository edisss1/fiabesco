import ConversationsContainer from "../components/atoms/ConversationsContainer"
import ConversationPreview from "../components/atoms/ConversationPreview"
import InboxContainer from "../components/atoms/InboxContainer"
import PageWrapper from "../components/atoms/PageWrapper"
import { MessageType } from "../types/Message"

const Inbox = () => {
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

    return (
        <PageWrapper>
            <InboxContainer>
                <div className="flex flex-col gap-8">
                    <h1 className="text-lg font-bold">Messages</h1>
                    <ConversationsContainer>
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                        <ConversationPreview
                            recipientFullName="John Doe"
                            lastMessage={testMessage}
                        />
                    </ConversationsContainer>
                </div>
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
