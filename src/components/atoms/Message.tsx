import { useSelector } from "react-redux"
import { MessageType } from "../../types/Message"
import { RootState } from "../../redux/store"

interface MessageProps {
    message: MessageType
}

const Message = ({ message }: MessageProps) => {
    const { user: currentUser } = useSelector((state: RootState) => state.auth)

    return (
        <div
            className={`flex  gap-2 text-white ${
                currentUser?._id === message.senderID ? "self-end" : ""
            } bg-message-bg w-max p-4 max-w-[50%] rounded-lg rounded-bl-none`}
        >
            <p>{message.content}</p>
            <div className="flex items-center justify-end translate-y-2">
                <span>{message.createdAt}</span>
            </div>
        </div>
    )
}
export default Message
