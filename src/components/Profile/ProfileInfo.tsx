import { useRef } from "react"
import InfoIcon from "../../assets/InfoIcon"
import LocationIcon from "../../assets/LocationIcon"
import PortfolioIcon from "../../assets/PortfolioIcon"
import Button from "../Common/Button"
import Dialog from "../Common/Dialog"
import Link from "../Common/Link"
import ProfileDetails from "./ProfileDetails"
import { openModal } from "../../utils/openModal"
import { User } from "../../types/User"

interface ProfileInfoProps {
    userID: string | undefined
    profileData: User | undefined
}

const ProfileInfo = ({ userID, profileData }: ProfileInfoProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    return (
        <>
            <div className="flex items-center gap-3">
                <Button
                    onClick={() => openModal(dialogRef)}
                    className="flex items-center gap-1.5 cursor-pointer"
                >
                    <InfoIcon />
                    <span>Profile details</span>
                </Button>
                <Button className="flex items-center gap-1.5">
                    <LocationIcon />
                    <span>Location</span>
                </Button>
                <Link
                    path={`/app/${userID}/portfolio`}
                    className="flex items-center gap-1.5"
                >
                    <PortfolioIcon />
                    <span className="bg-linear-to-tr from-[#BC39EF] to-[#DE0463] bg-clip-text text-transparent">
                        Portfolio
                    </span>
                </Link>
            </div>
            <Dialog header="Profile details" dialogRef={dialogRef}>
                <ProfileDetails
                    handle={profileData?.handle}
                    followersCount={profileData?.followersCount}
                    followingCount={profileData?.followingCount}
                />
            </Dialog>
        </>
    )
}
export default ProfileInfo
