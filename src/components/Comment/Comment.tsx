import { FormEvent, useRef, useState } from "react"
import { Comment as CommentType } from "../../types/Comment"
import { formatDate } from "../../utils/formatTime"
import Button from "../Common/Button"
import ProfilePicture from "../Profile/ProfilePicture"
import { useTruncate } from "../../hooks/useTruncate"
import Popover from "../Common/Popover"
import CommentActions from "./CommentActions"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { editComment } from "../../services/endpoints/comments/editComment"
import { Link } from "react-router-dom"

interface CommentProps {
    comment: CommentType
    userName: string
    photoURL: string
    currentUserID: string | undefined
}

const Comment = ({
    userName,
    comment,
    currentUserID,
    photoURL
}: CommentProps) => {
    const contentRef = useRef<HTMLParagraphElement | null>(null)
    const { truncatedContent, showButton, isReadingMore, setIsReadingMore } =
        useTruncate(comment.content ?? "")
    const { user } = useSelector((state: RootState) => state.auth)

    const isOwner = comment.userID === currentUserID
    const client = useQueryClient()

    const [isEditing, setIsEditing] = useState(false)
    const [newContent, setNewContent] = useState(comment.content)

    const inputRef = useRef<HTMLTextAreaElement | null>(null)

    const { mutate: edit } = useMutation({
        mutationKey: ["editComment"],
        mutationFn: (e: FormEvent) =>
            editComment(newContent, comment._id, user?._id, e),
        onSuccess: () => {
            setNewContent("")
            setIsEditing(false)
            client.invalidateQueries({ queryKey: ["comments"] })
        }
    })

    return (
        <div className="w-full relative p-2 hover:bg-text-primary/10 transition-colors duration-200 rounded-lg">
            <div className="flex items-start gap-2">
                <Link className="h-14" to={`/profile/${comment.userID}`}>
                    <ProfilePicture dimensions="w-14 h-14" url={photoURL} />
                </Link>
                <div className="flex flex-col gap-2 relative w-full">
                    <p>{userName}</p>

                    {!isEditing ? (
                        <p
                            ref={contentRef}
                            className={`wrap-normal text ${
                                !isReadingMore ? "line-clamp-2" : ""
                            } `}
                        >
                            {truncatedContent}
                        </p>
                    ) : (
                        <form onSubmit={edit} className="">
                            <textarea
                                className="resize-none focus:outline-none w-full min-h-[100px] overflow-y-visible"
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                                ref={inputRef}
                            />
                            <button>Save</button>
                        </form>
                    )}
                    {showButton && !isEditing && (
                        <Button
                            className="absolute bottom-0 right-2 bg-background px-2 z-10"
                            onClick={() => setIsReadingMore((prev) => !prev)}
                        >
                            {isReadingMore ? "Read less" : "Read more"}
                        </Button>
                    )}
                </div>
            </div>
            <div className="absolute top-2 right-2 flex flex-row-reverse items-center gap-2">
                <div className="flex items-center gap-4 ">
                    <Popover id={`comment-actions-${comment._id}`}>
                        <CommentActions
                            isOwner={isOwner}
                            setIsEditing={setIsEditing}
                            commentContent={comment.content}
                            commentID={comment._id}
                        />
                    </Popover>
                </div>
                <span className="text-sm">{formatDate(comment.createdAt)}</span>
            </div>
        </div>
    )
}
export default Comment
