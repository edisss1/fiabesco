import { MessageType } from "../../types/Message"
import Message from "../atoms/Message"

interface MessageListProps {
    messages: MessageType[] | undefined
    ref: React.RefObject<HTMLDivElement | null>
}

const MessageList = ({ messages, ref }: MessageListProps) => {
    const sortedMessages = messages?.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt)
    )

    return (
        <div className=" flex  flex-col gap-2 px-1 py-4 w-full overflow-y-scroll message-list">
            {messages?.length === 0 && <div>No messages yet</div>}
            {sortedMessages?.map((message) => (
                <Message message={message} />
            ))}
            <div ref={ref} />
        </div>
    )
}
export default MessageList
