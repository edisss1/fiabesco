import FollowIcon from "../../assets/FollowIcon"
import MessageIcon from "../../assets/MessageIcon"
import Button from "../atoms/Button"

const ProfileActionButtons = () => {
    return (
        <div className="flex items-center gap-4 [&>*]:cursor-pointer">
            <Button className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg">
                <MessageIcon />
                Message
            </Button>
            <Button className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg">
                <FollowIcon />
                Message
            </Button>
        </div>
    )
}
export default ProfileActionButtons
