import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import ProfilePicture from "./ProfilePicture"
const UserInfo = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <div className="flex items-center gap-4">
            <ProfilePicture url={user?.photoURL} />
            <div className="flex flex-col gap-2">
                <p>
                    {user?.firstName} {user?.lastName}
                </p>
                <span className="text-text-primary/70 truncate max-w-[100px]">
                    @{user?.handle}
                </span>
            </div>
        </div>
    )
}
export default UserInfo
