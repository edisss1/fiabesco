import { MessageType } from "../../types/Message"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageComposer from "../molecules/MessageComposer"
import MessageList from "../molecules/MessageList"

interface ConversationProps {
    messages: MessageType[] | undefined
    fullName: string
}

const Conversation = ({ messages, fullName }: ConversationProps) => {
    return (
        <div className="w-full relative  py-2 h-screen">
            <RecipientInfo fullName={fullName} />
            <MessageList messages={messages} />
            <MessageComposer />
        </div>
    )
}
export default Conversation
