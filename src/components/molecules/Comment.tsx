import { FormEvent, useRef, useState } from "react"
import { Comment as CommentType } from "../../types/Comment"
import { formatDate } from "../../utils/formatTime"
import Button from "../atoms/Button"
import ProfilePicture from "./ProfilePicture"
import { useTruncate } from "../../hooks/useTruncate"
import Popover from "../atoms/Popover"
import CommentActions from "./CommentActions"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { editComment } from "../../services/endpoints/comments/editComment"

interface CommentProps extends CommentType {
    userName: string | undefined
    currentUserID: string | undefined
}

const Comment = ({
    content,
    createdAt,
    userName,
    userID,
    currentUserID,
    _id
}: CommentProps) => {
    const contentRef = useRef<HTMLParagraphElement | null>(null)
    const { truncatedContent, showButton, isReadingMore, setIsReadingMore } =
        useTruncate(content)
    const { user } = useSelector((state: RootState) => state.auth)

    const isOwner = userID === currentUserID
    const client = useQueryClient()

    const [isEditing, setIsEditing] = useState(false)
    const [newContent, setNewContent] = useState(content)

    const inputRef = useRef<HTMLTextAreaElement | null>(null)

    const { mutate: edit } = useMutation({
        mutationKey: ["editComment"],
        mutationFn: (e: FormEvent) =>
            editComment(newContent, _id, user?._id, e),
        onSuccess: () => {
            setNewContent("")
            setIsEditing(false)
            client.invalidateQueries({ queryKey: ["comments"] })
        }
    })

    return (
        <div className="w-full relative p-2 hover:bg-text-primary/10 transition-colors duration-200 rounded-lg">
            <div className="flex items-start gap-2">
                <ProfilePicture url="" />
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
                    <Popover id={`comment-actions-${_id}`}>
                        <CommentActions
                            isOwner={isOwner}
                            setIsEditing={setIsEditing}
                            commentContent={content}
                            commentID={_id}
                        />
                    </Popover>
                </div>
                <span className="text-sm">{formatDate(createdAt)}</span>
            </div>
        </div>
    )
}
export default Comment
