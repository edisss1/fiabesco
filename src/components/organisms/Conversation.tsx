import { useEffect, useRef } from "react"
import { MessageType } from "../../types/Message"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageComposer from "../molecules/MessageComposer"
import MessageList from "../molecules/MessageList"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface ConversationProps {
    messages: MessageType[] | undefined
    participants: string[] | undefined
    names: string[] | undefined
    conversationID: string | undefined
}

const Conversation = ({
    messages,
    names,
    participants,
    conversationID
}: ConversationProps) => {
    const messageListRef = useRef<HTMLDivElement | null>(null)
    const { user } = useSelector((state: RootState) => state.auth)

    const recepientID = participants?.find((p) => p !== user?._id)
    const recipientName = names?.find(
        (p) => p !== `${user?.firstName} ${user?.lastName}`
    )

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight
        }
    }, [conversationID, user, names, messages])

    return (
        <div className="w-full relative flex flex-col h-[calc(100vh)] items-start">
            <RecipientInfo recipientID={recepientID} fullName={recipientName} />
            <MessageList ref={messageListRef} messages={messages} />
            <MessageComposer ref={messageListRef} recipientID={recepientID} />
        </div>
    )
}
export default Conversation
