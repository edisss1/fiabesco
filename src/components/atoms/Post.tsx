import CommentIcon from "../../assets/CommentIcon"
import HeartIcon from "../../assets/HeartIcon"
import RepostIcon from "../../assets/RepostIcon"
import Button from "./Button"
import UserInfo from "./UserInfo"

interface PostProps {
    caption: string
    images?: string[]
    userID: string
    userHandle: string
    userFirstName: string
    photoURL: string
    userLastName: string
    createdAt: string
}

const Post = ({
    caption,
    images,
    userID,
    userHandle,
    userFirstName,
    userLastName,
    photoURL,
    createdAt
}: PostProps) => {
    return (
        <div className="flex flex-col hover:bg-black/5 transition-colors duration-150 rounded-lg items-start mt-16 w-full gap-4 max-w-[600px] p-5 ">
            <div className="flex items-center gap-4">
                <UserInfo
                    userID={userID}
                    firstName={userFirstName}
                    lastName={userLastName}
                    handle={userHandle}
                    photoURL={photoURL}
                />
                <span>{createdAt}</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <p className="text-text-secondary">{caption}</p>
                {images &&
                    images.map((img) => <img src={img} loading="lazy" />)}
            </div>
            <div className="flex items-center gap-4 [&>*]:hover:bg-primary/30 [&>*]:rounded-full [&>*]:p-1 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:transition-all [&>*]:duration-200">
                <Button>
                    <HeartIcon />
                </Button>
                <Button>
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
