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
        <>
            <div className="flex flex-col items-start gap-2 text-sm text-white dark:text-text-primary">
                <Button onClick={copyComment}>
                    {isCopying ? "Copied!" : "Copy"}
                </Button>
                {isOwner && (
                    <>
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                        <Button>Delete</Button>
                    </>
                )}
            </div>
        </>
    )
}
export default CommentActions
