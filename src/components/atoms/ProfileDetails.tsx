import AtIcon from "../../assets/AtIcon"
import { compactNumber } from "../../utils/compactNumber"

interface ProfileDetailsProps {
    handle: string | undefined
    followersCount: number | undefined
    followingCount: number | undefined
}

const ProfileDetails = ({
    handle,
    followersCount,
    followingCount
}: ProfileDetailsProps) => {
    return (
        <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-4">
                <AtIcon />
                <p>{handle}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <span className="text-xl">
                        {compactNumber(followersCount)}
                    </span>
                    <p>followers</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl">
                        {compactNumber(followingCount)}
                    </span>
                    <p>following</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails
