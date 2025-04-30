import { useSelector } from "react-redux"
import { MessageType } from "../../types/Message"
import { RootState } from "../../redux/store"
import { formatDate } from "../../utils/formatDate"

interface MessageProps {
    message: MessageType
}

const Message = ({ message }: MessageProps) => {
    const { user: currentUser } = useSelector((state: RootState) => state.auth)
    return (
        <div
            className={`flex flex-col gap-1 rounded-xl min-w-[100px] text-white relative ${
                currentUser?._id === message.senderID
                    ? "self-end rounded-br-none"
                    : "self-start rounded-bl-none"
            } bg-message-bg w-max px-4 pt-3 pb-6 max-w-[50%]`}
        >
            <p className="break-words">{message.content}</p>

            <span className="absolute bottom-1 right-2 text-sm text-gray-300">
                {formatDate(message.createdAt)}
            </span>
        </div>
    )
}
export default Message
