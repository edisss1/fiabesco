import { useSelector } from "react-redux"
import { MessageType } from "../../types/Message"
import { RootState } from "../../redux/store"
import { formatRelativeDate } from "../../utils/formatRelativeDate"

interface MessageProps {
    message: MessageType
}

const Message = ({ message }: MessageProps) => {
    const { user: currentUser } = useSelector((state: RootState) => state.auth)
    console.log(message)
    return (
        <div
            className={`flex  gap-2 rounded-lg text-white ${
                currentUser?._id === message.senderID
                    ? "self-end rounded-br-none"
                    : "self-start rounded-bl-none"
            } bg-message-bg w-max p-4 max-w-[50%] `}
        >
            <p>{message.content}</p>
            <div className="flex items-center justify-end translate-y-2">
                <span>{formatRelativeDate(message.createdAt)}</span>
            </div>
        </div>
    )
}
export default Message
