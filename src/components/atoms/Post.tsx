import { useSelector } from "react-redux"
import CommentIcon from "../../assets/CommentIcon"
import HeartIcon from "../../assets/HeartIcon"
import RepostIcon from "../../assets/RepostIcon"
import Button from "./Button"
import UserInfo from "./UserInfo"
import { RootState } from "../../redux/store"

interface PostProps {
    caption: string
    images?: string[]
    userID: string
    userHandle: string
    userFirstName: string
    photoURL: string
    userLastName: string
    createdAt: string
    likesCount: number
    commentsCount: number
}

const Post = ({
    caption,
    images,
    userID,
    userHandle,
    userFirstName,
    userLastName,
    photoURL,
    createdAt,
    likesCount,
    commentsCount
}: PostProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const created = new Date(createdAt)

    const isOwner = userID === user?._id

    return (
        <div className="flex flex-col bg-black/5 transition-colors duration-150 rounded-lg items-start  w-full gap-4 max-w-[800px] p-5 ">
            <div className="flex items-start gap-4">
                <UserInfo
                    userID={userID}
                    firstName={userFirstName}
                    lastName={userLastName}
                    handle={userHandle}
                    photoURL={photoURL}
                />
                <span className="p-1">{created.toLocaleDateString()}</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <p className="text-text-secondary">{caption}</p>
                {images &&
                    images.map((img) => <img src={img} loading="lazy" />)}
            </div>
            <div className="flex items-center gap-4 [&>*]:hover:bg-primary/30 [&>*]:rounded-full [&>*]:p-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:justify-center [&>*]:transition-all [&>*]:duration-200">
                <Button>
                    {likesCount}
                    <HeartIcon />
                </Button>
                <Button>
                    {commentsCount}
                    <CommentIcon />
                </Button>
                <Button>
                    <RepostIcon />
                </Button>
            </div>
        </div>
    )
}
export default Post
