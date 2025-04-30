import MoreIcon from "../../assets/MoreIcon"
import { Comment as CommentType } from "../../types/Comment"
import { formatDate } from "../../utils/formatDate"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"

const Comment = ({ _id, postID, userID, content, createdAt }: CommentType) => {
    return (
        <div className="w-full relative  p-2 hover:bg-text-secondary/10 transition-colors duration-200 rounded-lg">
            <div className="flex items-start gap-2">
                <ProfilePicture url="" />
                <div className="flex flex-col gap-2 ">
                    <p>{"User Name"}</p>
                    <p>{content}</p>
                </div>
            </div>
            <div className="absolute top-2 right-2 flex flex-row-reverse items-center gap-2">
                <Button className="rotate-90">
                    <MoreIcon />
                </Button>
                <span className="">{formatDate(createdAt)}</span>
            </div>
        </div>
    )
}
export default Comment
