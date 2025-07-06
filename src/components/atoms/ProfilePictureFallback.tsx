import UserIcon from "../../assets/UserIcon"

const ProfilePictureFallback = ({
    updateEnabled = false
}: {
    updateEnabled?: boolean
}) => {
    return (
        <div
            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-text-primary ${
                updateEnabled ? "group-hover:border-transparent" : ""
            }`}
        >
            <UserIcon />
        </div>
    )
}
export default ProfilePictureFallback
