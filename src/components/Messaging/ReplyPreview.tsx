import CrossIcon from "../../assets/CrossIcon"
import ReplyIcon from "../../assets/ReplyIcon"
import { MessageType } from "../../types/Message"
import Button from "../Common/Button"

interface ReplyPreviewProps {
    message: MessageType | undefined
    userName: string | undefined
    onClear: () => void
}

const ReplyPreview = ({ message, userName, onClear }: ReplyPreviewProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 py-2 px-3">
                <ReplyIcon />
                <div className="flex flex-col items-start">
                    <p>{userName}</p>
                    <p>{message?.content}</p>
                </div>
            </div>
            <Button onClick={onClear}>
                <CrossIcon className="w-10 h-10 [&>*]:fill-[#54BBE8]" />
            </Button>
        </div>
    )
}
export default ReplyPreview
