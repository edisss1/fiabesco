import { Link } from "react-router-dom"
import { MessageType } from "../../types/Message"
import ProfilePicture from "./ProfilePicture"

interface ConversationPreviewProps {
    recipientFullName: string
    lastMessage: MessageType
    id?: string
}

const ConversationPreview = ({
    recipientFullName,
    lastMessage,
    id
}: ConversationPreviewProps) => {
    return (
        <Link
            to={`/app/inbox/${id}`}
            className="p-2  rounded-lg w-full max-w-[300px] flex gap-2 items-start justify-between text-text-secondary"
        >
            <div className="flex gap-2 items-center">
                {/* <ProfilePicture url={recipientPhotoURL} /> */}
                <div className="flex flex-col items-start gap-1">
                    <p className="font-semibold text-lg">{recipientFullName}</p>
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
