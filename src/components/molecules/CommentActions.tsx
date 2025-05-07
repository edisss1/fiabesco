import { useState } from "react"
import Button from "../atoms/Button"

interface CommentActionsProps {
    isOwner: boolean
    commentContent: string
    commentID: string | undefined
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const CommentActions = ({
    isOwner,
    commentContent,
    setIsEditing
}: CommentActionsProps) => {
    const [isCopying, setIsCopying] = useState(false)

    const copyComment = () => {
        setIsCopying(true)
        navigator.clipboard.writeText(commentContent)
        setTimeout(() => setIsCopying(false), 2000)
    }

    return (
        <div className="flex flex-col items-start gap-2 text-sm text-white">
            <Button onClick={copyComment}>Copy</Button>
            {isOwner && (
                <>
                    <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button>Delete</Button>
                </>
            )}
            <p
                className={`fixed left-1/2 transform -translate-x-1/2 ${
                    isCopying
                        ? "opacity-100 bottom-4"
                        : "opacity-0 -bottom-4 pointer-events-none select-none"
                } transition-all duration-300 p-2 rounded-lg bg-primary text-white`}
            >
                Comment copied to clipboard
            </p>
        </div>
    )
}
export default CommentActions
