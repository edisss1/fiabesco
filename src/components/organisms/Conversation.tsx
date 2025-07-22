import { useEffect, useRef } from "react"
import { MessageType } from "../../types/Message"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageComposer from "../molecules/MessageComposer"
import MessageList from "../molecules/MessageList"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Participant } from "../../types/Conversation"

interface ConversationProps {
    messages: MessageType[] | undefined
    participants: Participant[] | undefined
    conversationID: string | undefined
    onClick?: () => void
}

const Conversation = ({
    messages,
    participants,
    conversationID,
    onClick
}: ConversationProps) => {
    const messageListRef = useRef<HTMLDivElement | null>(null)
    const { user } = useSelector((state: RootState) => state.auth)

    const recipient = participants?.find((p) => p._id !== user?._id)

    const recipientID = recipient?._id
    const recipientName = recipient?.userName
    const recipientPhotoURL = recipient?.photoURL

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight
        }
    }, [conversationID, user, messages])

    return (
        <div className="w-full relative flex flex-col h-[calc(100vh)] items-start">
            <RecipientInfo
                photoURL={recipientPhotoURL}
                onClick={onClick}
                recipientID={recipientID}
                fullName={recipientName}
            />
            <MessageList ref={messageListRef} messages={messages} />
            <MessageComposer ref={messageListRef} recipientID={recipientID} />
        </div>
    )
}
export default Conversation
