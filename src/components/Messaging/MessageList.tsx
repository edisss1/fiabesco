import { useState } from "react"
import { MessageType } from "../../types/Message"
import Message from "../Messaging/Message"
import Reply from "./Reply"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"

interface MessageListProps {
    messages: MessageType[] | undefined
    ref: React.RefObject<HTMLDivElement | null>
    recipientName?: string
}

const MessageList = ({ messages, ref, recipientName }: MessageListProps) => {
    const { user: currentUser } = useSelector((state: RootState) => state.auth)
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
            {sortedMessages.map((message) => {
                if (message.isReply) {
                    const repliedMessage = sortedMessages.find(
                        (m) => m._id === message.replyTo
                    )
                    const repliedUserName = repliedMessage
                        ? repliedMessage.senderID === currentUser?._id
                            ? currentUser?.firstName +
                              " " +
                              currentUser?.lastName
                            : recipientName
                        : "Message unavailable"

                    return (
                        <Reply
                            key={message._id}
                            message={message}
                            onShowContextMenu={() =>
                                handleShow(message._id || "")
                            }
                            openedContextMenu={
                                openedContextMenu === message._id
                            }
                            setOpenedContextMenu={setOpenedContextMenu}
                            userName={
                                repliedUserName
                                    ? repliedUserName
                                    : "Message unavailable"
                            }
                            replyToMessage={
                                repliedMessage ? repliedMessage.content : ""
                            }
                        />
                    )
                }

                return (
                    <Message
                        key={message._id}
                        message={message}
                        onShowContextMenu={() => handleShow(message._id || "")}
                        openedContextMenu={openedContextMenu === message._id}
                        setOpenedContextMenu={setOpenedContextMenu}
                    />
                )
            })}

            <div ref={ref} />
        </div>
    )
}
export default MessageList
