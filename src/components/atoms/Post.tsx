import { useSelector } from "react-redux"
import CommentIcon from "../../assets/CommentIcon"
import HeartIcon from "../../assets/HeartIcon"
import RepostIcon from "../../assets/RepostIcon"
import Button from "./Button"
import UserInfo from "./UserInfo"
import { RootState } from "../../redux/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likePost } from "../../utils/likePost"
import { User } from "../../types/User"
import PostActions from "./PostActions"

interface PostProps {
    caption: string
    images?: string[]
    userID: string
    createdAt: string
    likesCount: number
    commentsCount: number
    _id?: string
    postedBy: User
}

const Post = ({
    caption,
    images,
    userID,
    createdAt,
    likesCount,
    commentsCount,
    _id,
    postedBy
}: PostProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const created = new Date(createdAt)
    const client = useQueryClient()

    const isOwner = userID === user?._id

    const { mutate: like, data: likes } = useMutation({
        mutationKey: ["like"],
        mutationFn: () => likePost(user?._id, _id),
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["post"]
            })
        }
    })

    return (
        <div className="flex flex-col bg-black/5 transition-colors duration-150 rounded-lg items-start  w-full gap-4 max-w-[800px] p-5 ">
            <div className="flex items-start gap-4">
                <UserInfo
                    userID={userID}
                    firstName={postedBy?.firstName}
                    lastName={postedBy?.lastName}
                    handle={postedBy?.handle}
                    photoURL={postedBy?.bannerURL}
                />
                <span className="p-1">{created.toLocaleDateString()}</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <p className="text-text-secondary">{caption}</p>
                {images &&
                    images.map((img) => <img src={img} loading="lazy" />)}
            </div>
            <div className="flex items-center gap-4 ">
                <PostActions
                    type="button"
                    count={likesCount}
                    icon={<HeartIcon />}
                    onClick={() => {
                        like()
                        console.log(
                            `Post liked, likesCount: ${likesCount} likes: ${likes} `
                        )
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
