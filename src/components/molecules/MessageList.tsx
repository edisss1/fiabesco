import { MessageType } from "../../types/Message"
import Message from "../atoms/Message"

interface MessageListProps {
    messages: MessageType[] | undefined
}

const MessageList = ({ messages }: MessageListProps) => {
    const sortedMessages = messages?.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt)
    )

    return (
        <div className=" flex  flex-col gap-2 px-1 w-full ">
            {messages?.length === 0 && <div>No messages yet</div>}
            {messages?.map((message) => (
                <Message message={message} />
            ))}
        </div>
    )
}
export default MessageList
