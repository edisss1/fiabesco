import { User } from "../../types/User"
import ProfileActionButtons from "./ProfileActionButtons"

interface ProfileHeaderProps {
    profileData: User | undefined
    isOwner: boolean
}

const ProfileHeader = ({ profileData, isOwner }: ProfileHeaderProps) => {
    return (
        <div className="px-4 flex items-center justify-between gap-4 text-text-secondary ">
            <div className="flex items-start gap-2">
                {profileData?.photoURL ? (
                    <img src={profileData.photoURL} />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-white" />
                )}
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-medium">
                        {profileData?.firstName} {profileData?.lastName}
                    </p>
                    <span className="text-sm">
                        {profileData?.bio ? profileData.bio : "No bio yet"}
                    </span>
                </div>
            </div>
            {!isOwner && <ProfileActionButtons />}
        </div>
    )
}
export default ProfileHeader
