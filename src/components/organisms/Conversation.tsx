import { useEffect, useRef } from "react"
import { MessageType } from "../../types/Message"
import RecipientInfo from "../atoms/RecipientInfo"
import MessageComposer from "../molecules/MessageComposer"
import MessageList from "../molecules/MessageList"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface ConversationProps {
    messages: MessageType[] | undefined
    fullName: string
    participants: string[] | undefined
}

const Conversation = ({
    messages,
    fullName,
    participants
}: ConversationProps) => {
    const messageListRef = useRef<HTMLDivElement | null>(null)
    const { user } = useSelector((state: RootState) => state.auth)

    const recepientID = participants?.find((p) => p !== user?._id)

    useEffect(() => {
        messageListRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <div className="w-full relative   h-screen conversation">
            <RecipientInfo fullName={fullName} />
            <MessageList ref={messageListRef} messages={messages} />
            <MessageComposer ref={messageListRef} recipientID={recepientID} />
        </div>
    )
}
export default Conversation
