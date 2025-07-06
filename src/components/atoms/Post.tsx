import { useSelector } from "react-redux"
import CommentIcon from "../../assets/CommentIcon"
import HeartIcon from "../../assets/HeartIcon"
import RepostIcon from "../../assets/RepostIcon"
import Button from "./Button"
import UserInfo from "./UserInfo"
import { RootState } from "../../redux/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likePost } from "../../utils/likePost"
import PostActions from "./PostActions"
import { useRef } from "react"
import { useTruncate } from "../../hooks/useTruncate"
import PostImages from "./PostImages"

interface PostProps {
    caption: string
    images?: string[]
    userID: string
    createdAt: string
    likesCount: number
    commentsCount: number
    _id?: string
    postedBy: string
    photoURL: string
    handle: string
}

const Post = ({
    caption,
    images,
    userID,
    createdAt,
    likesCount,
    commentsCount,
    _id,
    postedBy,
    handle,
    photoURL
}: PostProps) => {
    const contentRef = useRef<HTMLParagraphElement | null>(null)
    const { user } = useSelector((state: RootState) => state.auth)
    const created = new Date(createdAt)
    const client = useQueryClient()
    const { truncatedContent, showButton, isReadingMore, setIsReadingMore } =
        useTruncate(caption)

    const isOwner = userID === user?._id

    const { mutate: like } = useMutation({
        mutationKey: ["like"],
        mutationFn: () => likePost(user?._id, _id),
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["post"]
            })
        }
    })

    return (
        <div className="flex flex-col bg-black/5 transition-colors duration-150 rounded-lg items-start  w-full gap-4 max-w-[800px] p-4 ">
            <div className="flex items-start gap-4">
                <UserInfo
                    userID={userID}
                    userName={postedBy}
                    handle={handle}
                    photoURL={photoURL}
                />
                <span className="p-1">{created.toLocaleDateString()}</span>
            </div>
            <div className="flex flex-col gap-4 mt-2 relative">
                <p
                    ref={contentRef}
                    className={`break-words ${
                        !isReadingMore ? "line-clamp-2" : ""
                    } `}
                >
                    {truncatedContent}
                </p>
                {showButton && (
                    <Button
                        className="absolute bottom-0 right-0 bg-background rounded-md  px-2 "
                        onClick={() => setIsReadingMore((prev) => !prev)}
                    >
                        {isReadingMore ? "Read less" : "Read more"}
                    </Button>
                )}
                {images && (
                    <div className="w-full">
                        <PostImages images={images} />
                    </div>
                )}
            </div>
            <div className="flex items-center gap-4 ">
                <PostActions
                    type="button"
                    count={likesCount}
                    icon={<HeartIcon />}
                    onClick={() => {
                        like()
                    }}
                />

                <PostActions
                    type="link"
                    to={`/app/post/${_id}`}
                    count={commentsCount}
                    icon={<CommentIcon />}
                />

                {/* TODO: add reposts and repost count */}
                <Button>
                    <RepostIcon />
                </Button>
            </div>
        </div>
    )
}
export default Post
