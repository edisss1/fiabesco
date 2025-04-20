import { useRef } from "react"
import { MessageType } from "../../types/Message"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageComposer from "../molecules/MessageComposer"
import MessageList from "../molecules/MessageList"

interface ConversationProps {
    messages: MessageType[] | undefined
    fullName: string
}

const Conversation = ({ messages, fullName }: ConversationProps) => {
    const messageListRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="w-full relative  py-2 h-screen conversation">
            <RecipientInfo fullName={fullName} />
            <MessageList ref={messageListRef} messages={messages} />
            <MessageComposer ref={messageListRef} />
        </div>
    )
}
export default Conversation
