import { MessageType } from "../../types/Message"
import ProfilePicture from "./ProfilePicture"

interface ConversationPreviewProps {
    recipientFullName: string
    lastMessage: MessageType
}

const ConversationPreview = ({
    recipientFullName,
    lastMessage
}: ConversationPreviewProps) => {
    return (
        <div className="p-2  rounded-lg w-full max-w-[300px] flex gap-2 items-start justify-between text-text-secondary">
            <div className="flex gap-2 items-center">
                {/* <ProfilePicture url={recipientPhotoURL} /> */}
                <div className="flex flex-col items-start gap-1">
                    <p className="font-semibold text-lg">{recipientFullName}</p>
                    <span className="text-sm">{lastMessage.content}</span>
                </div>
            </div>
            <span>18:07</span>
        </div>
    )
}
export default ConversationPreview
