import { MessageType } from "../../types/Message"
import { User } from "../../types/User"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageList from "../molecules/MessageList"

interface ConversationProps {
    messages: MessageType[]
}

const Conversation = ({ messages }: ConversationProps) => {
    const testRecipient: Partial<User> = {
        firstName: "Jane",
        lastName: "Doe"
    }

    return (
        <div className="w-full  border-x-2 border-text-secondary p-2 h-screen">
            <RecipientInfo recipient={testRecipient as User} />
            <MessageList messages={messages} />
        </div>
    )
}
export default Conversation
