import { useState } from "react"
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

    const [openedContextMenu, setOpenedContextMenu] = useState("")

    const handleShow = (id: string) => setOpenedContextMenu(id)

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
                <Message
                    setOpenedContextMenu={setOpenedContextMenu}
                    openedContextMenu={openedContextMenu === message._id}
                    key={message._id}
                    message={message}
                    onShowContextMenu={() => handleShow(message._id || "")}
                />
            ))}
            <div ref={ref} />
        </div>
    )
}
export default MessageList
