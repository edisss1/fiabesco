import { MessageType } from "../../types/Message"
import Message from "../atoms/Message"

interface MessageListProps {
    messages: MessageType[] | undefined
    ref: React.RefObject<HTMLDivElement | null>
}

const MessageList = ({ messages, ref }: MessageListProps) => {
    const sortedMessages = messages
        ? [...messages].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        : []

    return (
        <div
            ref={ref}
            aria-label="Message List"
            className="flex flex-col-reverse gap-2 px-1 py-4 w-full grow  overflow-y-scroll message-list "
        >
            {messages?.length === 0 && (
                <span className="text-center">No messages yet</span>
            )}
            {sortedMessages?.map((message) => (
                <Message message={message} />
            ))}
            <div ref={ref} />
        </div>
    )
}
export default MessageList
