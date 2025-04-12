import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router-dom"

interface UserInfoProps {
    firstName: string | undefined
    lastName: string | undefined
    handle?: string | undefined
    photoURL: string | undefined
    userID: string | undefined
    bio?: string | undefined
    isBio?: boolean
    hover?: string
    hoverEnabled?: boolean
}

const UserInfo = ({
    firstName,
    lastName,
    handle,
    photoURL,
    userID,
    bio,
    isBio = false,
    hover = "hover:bg-black/5 transition-colors duration-150 p-1 rounded-lg",
    hoverEnabled = true
}: UserInfoProps) => {
    return (
        <Link
            to={`/app/profile/${userID}`}
            className={`flex items-center gap-4 ${hoverEnabled && hover}`}
        >
            <ProfilePicture url={photoURL} />
            <div className="flex flex-col gap-2">
                <p>
                    {firstName} {lastName}
                </p>
                {isBio ? (
                    <span>{bio}</span>
                ) : (
                    <span className="text-text-primary/70 truncate max-w-[100px]">
                        @{handle}
                    </span>
                )}
            </div>
        </Link>
    )
}
export default UserInfo
