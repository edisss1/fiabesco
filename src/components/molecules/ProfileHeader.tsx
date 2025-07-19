import { FormEvent, useState } from "react"
import { User } from "../../types/User"
import ProfileActionButtons from "./ProfileActionButtons"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../services/api"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Link from "../atoms/Link"
import ProfilePicture from "./ProfilePicture"
import Bio from "../atoms/Bio"
import { compactNumber } from "../../utils/compactNumber"
import Button from "../atoms/Button"
import InfoIcon from "../../assets/InfoIcon"
import LocationIcon from "../../assets/LocationIcon"
import PortfolioIcon from "../../assets/PortfolioIcon"

interface ProfileHeaderProps {
    profileData: User | undefined
    isOwner: boolean
    userID: string | undefined
}

const ProfileHeader = ({
    profileData,
    isOwner,
    userID
}: ProfileHeaderProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const [isEditing, setIsEditing] = useState(false)
    const [newBio, setNewBio] = useState(profileData?.bio)
    const queryClient = useQueryClient()

    const { mutate: updateBio } = useMutation({
        mutationKey: ["updateBio"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (!user?._id) return
            try {
                const res = await api.put(`/users/${user._id}/bio`, {
                    bio: newBio
                })

                const data = res.data

                return data
            } catch (error) {
                console.error(error)
            }
        },
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["profileData", "userData"]
            })
    })

    return (
        <div className="px-4 flex items-center justify-between gap-4 flex-wrap text-text-primary dark:text-text-primary-dark ">
            <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                    <ProfilePicture
                        isOwner={userID === user?._id}
                        updateEnabled
                        userID={userID}
                        url={profileData?.photoURL}
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-2xl font-medium">
                            {profileData?.firstName} {profileData?.lastName}
                        </p>
                        <Bio
                            bio={profileData?.bio}
                            updateBio={updateBio}
                            isEditing={isEditing}
                            isOwner={isOwner}
                            handleBioChange={(e) => setNewBio(e.target.value)}
                            handleIsEditingChange={() =>
                                setIsEditing(!isEditing)
                            }
                            newBio={newBio}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="flex items-center gap-1.5">
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
            </div>
            <div className="flex flex-col items-center">
                {!isOwner && <ProfileActionButtons />}
            </div>
        </div>
    )
}
export default ProfileHeader
