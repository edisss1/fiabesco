import { MessageType } from "../../types/Message"
import Message from "../atoms/Message"

interface MessageListProps {
    messages: MessageType[]
}

const MessageList = ({ messages }: MessageListProps) => {
    return (
        <div className=" flex  flex-col gap-2  w-full ">
            {messages.map((message) => (
                <Message message={message} />
            ))}
        </div>
    )
}
export default MessageList
