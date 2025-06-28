import { useMutation, useQueryClient } from "@tanstack/react-query"
import PhotoIcon from "../../assets/PhotoIcon"
import FileInput from "../atoms/FileInput"
import ProfilePictureFallback from "../atoms/ProfilePictureFallback"
import { useState } from "react"
import { changePFP } from "../../utils/changePFP"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { updatePhotoURL } from "../../redux/slices/authSlice"

interface ProfilePictureProps {
    url: string | undefined
    updateEnabled?: boolean
    userID?: string
}

const ProfilePicture = ({
    url,
    updateEnabled = false,
    userID
}: ProfilePictureProps) => {
    const [selectedImg, setSelectedImg] = useState<File | null>(null)
    const client = useQueryClient()
    const dispatch = useDispatch<AppDispatch>()

    const { mutate: updatePFP } = useMutation({
        mutationKey: ["changePFP"],
        mutationFn: async () => {
            if (selectedImg) {
                changePFP(userID, selectedImg)
            }
        },
        onSuccess: () => {
            client.setQueryData(["profileData", userID], (oldData: any) => {
                if (!oldData) return oldData
                const imgURL = URL.createObjectURL(selectedImg!)
                dispatch(updatePhotoURL(imgURL))
                return {
                    ...oldData,
                    photoURL: imgURL
                }
            })
        }
    })

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedImg(e.target.files[0])
            updatePFP()
        }
    }

    return (
        <>
            <div
                className={`relative group ${
                    updateEnabled
                        ? "after:inset-0 after:absolute after:bg-none hover:after:bg-white after:transition-all after:duration-200 after:w-full after:content-[''] after:rounded-full"
                        : ""
                }
`}
            >
                {url ? (
                    <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={url}
                        key={url}
                    />
                ) : (
                    <ProfilePictureFallback />
                )}
                {updateEnabled && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-40">
                        <FileInput
                            onChange={onFileChange}
                            accept="image/png, image/jpeg"
                            name="pfp"
                            label={<PhotoIcon />}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
export default ProfilePicture

//
