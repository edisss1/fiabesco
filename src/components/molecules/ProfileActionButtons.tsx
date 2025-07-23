import { useNavigate, useParams } from "react-router-dom"
import FollowIcon from "../../assets/FollowIcon"
import MessageIcon from "../../assets/MessageIcon"
import Button from "../atoms/Button"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { followUser } from "../../services/endpoints/relations/followUser"
import { startConversation } from "../../services/endpoints/messages/startConversation"

const ProfileActionButtons = () => {
    const { userID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    const client = useQueryClient()

    const { mutate: follow } = useMutation({
        mutationKey: ["follow"],
        mutationFn: () => followUser(user?._id, userID),
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["profileData", userID]
            })
            client.invalidateQueries({
                queryKey: ["userData", userID]
            })
        }
    })

    return (
        <div className="flex items-center [&>*]:cursor-pointer flex-wrap max-lg:gap-2 gap-4 ">
            <Button
                onClick={follow}
                className="flex items-center gap-2 p-2 bg-secondary hover:scale-105 text-text-primary transition-all duration-200 ease-in rounded-lg"
            >
                <FollowIcon />
                Follow
            </Button>
            <Button
                onClick={() => startConversation(user?._id, userID, navigate)}
                className="flex items-center gap-2 p-2 bg-secondary hover:scale-105 transition-all duration-200 ease-in rounded-lg"
            >
                <MessageIcon />
            </Button>
        </div>
    )
}
export default ProfileActionButtons
