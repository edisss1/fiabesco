import { Link } from "react-router-dom"
import { MessageType } from "../../types/Message"
import ProfilePicture from "../Profile/ProfilePicture"

interface ConversationPreviewProps {
    lastMessage: MessageType
    id?: string
    conversationID: string | undefined
    onClick?: () => void
    recipientName?: string
    photoURL?: string
}

const ConversationPreview = ({
    lastMessage,
    id,
    conversationID,
    onClick,
    recipientName,
    photoURL
}: ConversationPreviewProps) => {
    return (
        <Link
            to={`/app/inbox/${id}`}
            onClick={onClick}
            className={`${
                conversationID === id && "bg-secondary text-text-primary!"
            } p-2  rounded-lg w-full max-w-[300px] flex gap-2 items-start justify-between text-text-primary dark:text-text-primary-dark transition-colors duration-150`}
        >
            <div className="flex gap-2 items-center">
                <ProfilePicture url={photoURL} />
                <div className="flex flex-col items-start gap-1">
                    <p className="font-semibold text-lg">{recipientName}</p>
                    <span className="text-sm max-w-[100px] truncate">
                        {lastMessage.content}
                    </span>
                </div>
            </div>
            <span>18:07</span>
        </Link>
    )
}
export default ConversationPreview
