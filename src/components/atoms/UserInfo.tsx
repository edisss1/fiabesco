import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router-dom"

interface UserInfoProps {
    firstName: string | undefined
    lastName: string | undefined
    handle?: string | undefined
    photoURL: string | undefined
    userID: string | undefined
}

const UserInfo = ({
    firstName,
    lastName,
    handle,
    photoURL,
    userID
}: UserInfoProps) => {
    return (
        <Link
            to={`/app/profile/${userID}`}
            className={`flex items-center gap-4 hover:bg-black/5 transition-colors duration-150 p-1 rounded-lg`}
        >
            <ProfilePicture url={photoURL} />
            <div className="flex flex-col justify-start gap-2">
                <p className="text-lg">
                    {firstName} {lastName}
                </p>
                <span className="max-w-[120px] truncate text-sm">
                    @{handle}
                </span>
            </div>
        </Link>
    )
}
export default UserInfo
