interface MessagePreviewProps {
    userName: string
    replyToMessage: string
}

const MessagePreview = ({ userName, replyToMessage }: MessagePreviewProps) => {
    return (
        <div className="py-0.5 px-1  bg-[#54BBE8]/60 border-l-4 border-[#54BBE8] rounded-sm flex flex-col gap-0.5 min-w-[150px] ">
            <p className="text-text-primary">{userName}</p>
            <p>{replyToMessage}</p>
        </div>
    )
}
export default MessagePreview
