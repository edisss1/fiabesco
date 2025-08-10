import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router-dom"

interface UserInfoProps {
    userName: string | undefined
    handle?: string | undefined
    photoURL: string | undefined
    userID: string | undefined
    lastSeen?: string
}

const UserInfo = ({
    userName,
    handle,
    photoURL,
    userID,
    lastSeen
}: UserInfoProps) => {
    return (
        <Link
            to={`/app/profile/${userID}`}
            className={`flex items-center gap-4  hover:bg-black/5 transition-colors duration-150 p-1 rounded-lg`}
        >
            <ProfilePicture dimensions="w-9 h-9" url={photoURL} />
            <div className="flex flex-col justify-start gap-1">
                <p className="text-lg">{userName}</p>
                {handle && (
                    <span className="max-w-[120px] truncate text-sm">
                        @{handle}
                    </span>
                )}
                {lastSeen && (
                    <span className="text-sm">Last seen at {lastSeen}</span>
                )}
            </div>
        </Link>
    )
}
export default UserInfo
