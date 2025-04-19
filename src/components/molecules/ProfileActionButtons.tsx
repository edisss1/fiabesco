import { useNavigate, useParams } from "react-router-dom"
import FollowIcon from "../../assets/FollowIcon"
import MessageIcon from "../../assets/MessageIcon"
import Button from "../atoms/Button"
import { startConversation } from "../../utils/startConversation"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const ProfileActionButtons = () => {
    const { userID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()

    return (
        <div className="flex items-center gap-4 [&>*]:cursor-pointer">
            <Button
                onClick={() => startConversation(user?._id, userID, navigate)}
                className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg"
            >
                <MessageIcon />
                Message
            </Button>
            <Button className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg">
                <FollowIcon />
                Follow
            </Button>
        </div>
    )
}
export default ProfileActionButtons
