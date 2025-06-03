import { useNavigate, useParams } from "react-router-dom"
import FollowIcon from "../../assets/FollowIcon"
import MessageIcon from "../../assets/MessageIcon"
import Button from "../atoms/Button"
import { startConversation } from "../../utils/startConversation"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { followUser } from "../../utils/followUser"

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

    const isFollowing = user?.followedUsers?.includes(userID!)

    return (
        <div className="flex items-center [&>*]:cursor-pointerflex-wrap max-lg:gap-2 ">
            <Button
                onClick={() => startConversation(user?._id, userID, navigate)}
                className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg"
            >
                <MessageIcon />
                Message
            </Button>
            <Button
                onClick={follow}
                className="flex items-center gap-2 p-2 hover:bg-black/5 transition-colors duration-200 ease-in rounded-lg"
            >
                <FollowIcon />
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        </div>
    )
}
export default ProfileActionButtons
