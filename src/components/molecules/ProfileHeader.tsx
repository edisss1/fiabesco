import { FormEvent, useEffect, useState } from "react"
import { User } from "../../types/User"
import ProfileActionButtons from "./ProfileActionButtons"
import Button from "../atoms/Button"
import PencilIcon from "../../assets/PencilIcon"
import CheckMarkIcon from "../../assets/CheckMarkIcon"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../services/api"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Link from "../atoms/Link"
import ProfilePicture from "./ProfilePicture"

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

    useEffect(() => {
        console.log(user)
    })

    return (
        <div className="px-4 flex items-center justify-between gap-4 flex-wrap text-text-primary ">
            <div className="flex items-start gap-2">
                <ProfilePicture
                    updateEnabled
                    userID={userID}
                    url={profileData?.photoURL}
                />

                <div className="flex flex-col gap-1">
                    <p className="text-lg font-medium">
                        {profileData?.firstName} {profileData?.lastName}
                    </p>
                    <div className="flex items-center gap-2">
                        {!isEditing && (
                            <span className="text-sm">
                                {profileData?.bio
                                    ? profileData.bio
                                    : "No bio yet"}
                            </span>
                        )}
                        {isOwner && isEditing && (
                            <form
                                onSubmit={updateBio}
                                className="flex items-center gap-2"
                            >
                                <input
                                    className="border-b-2 focus:outline-none focus:border-secondary transition-all"
                                    placeholder="Enter your new bio"
                                    type="text"
                                    value={newBio}
                                    onChange={(e) => setNewBio(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    className="cursor-pointer hover:bg-black/30 rounded-lg p-1 transition-all"
                                >
                                    <CheckMarkIcon />
                                </Button>
                            </form>
                        )}
                        {isOwner && !isEditing && (
                            <Button
                                onClick={() => setIsEditing(true)}
                                className="cursor-pointer hover:bg-black/30 rounded-lg transition-all"
                            >
                                <PencilIcon />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {!isOwner && <ProfileActionButtons />}
                <Link
                    className="mt-4 border-2 border-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-text-primary transition-colors duration-200"
                    path={`/app/${userID}/portfolio`}
                >
                    View portfolio
                </Link>
            </div>
        </div>
    )
}
export default ProfileHeader
