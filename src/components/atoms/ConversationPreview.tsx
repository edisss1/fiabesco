import { Link } from "react-router-dom"
import { MessageType } from "../../types/Message"
import ProfilePicture from "../molecules/ProfilePicture"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface ConversationPreviewProps {
    lastMessage: MessageType
    id?: string
    conversationID: string | undefined
    names: string[] | undefined
    onClick?: () => void
}

const ConversationPreview = ({
    lastMessage,
    id,
    conversationID,
    names,
    onClick
}: ConversationPreviewProps) => {
    const { user } = useSelector((state: RootState) => state.auth)

    const recipientName = names?.find(
        (p) => p !== `${user?.firstName} ${user?.lastName}`
    )

    return (
        <Link
            to={`/app/inbox/${id}`}
            onClick={onClick}
            className={`${
                conversationID === id && "bg-secondary"
            } p-2  rounded-lg w-full max-w-[300px] flex gap-2 items-start justify-between text-text-primary dark:text-text-primary-dark transition-colors duration-150`}
        >
            <div className="flex gap-2 items-center">
                <ProfilePicture
                    url={
                        "https://images.unsplash.com/photo-1734772307171-fa1ee9640c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                />
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
