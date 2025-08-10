import { useEffect, useRef, useState } from "react"
import ProjectImgUpload from "../../assets/ProjectImgUpload"
import FileInput from "../atoms/FileInput"
import Button from "../atoms/Button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePhotoURL } from "../../redux/slices/authSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { changePFP } from "../../services/endpoints/users/changePFP"
import { User } from "../../types/User"

interface PFPUpdateProps {
    userID: string | undefined
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

const PfpUpdate = ({ userID, dialogRef }: PFPUpdateProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const [profilePicture, setProfilePicture] = useState<File | null>(null)
    const [previewURL, setPreviewURL] = useState<string | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const client = useQueryClient()
    const dispatch = useDispatch<AppDispatch>()

    const { mutate: updatePFP } = useMutation({
        mutationKey: ["changePFP"],
        mutationFn: async () => {
            if (profilePicture) {
                changePFP(userID, profilePicture)
            }
        },
        onSuccess: () => {
            client.setQueryData(
                ["profileData", userID],
                (oldData: User | undefined) => {
                    dialogRef.current?.close()
                    if (!oldData) return oldData
                    const imgURL = URL.createObjectURL(profilePicture!)
                    dispatch(updatePhotoURL(imgURL))
                    return {
                        ...oldData,
                        photoURL: imgURL
                    }
                }
            )
        }
    })

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfilePicture(e.target.files[0])
            const url = URL.createObjectURL(e.target.files[0])
            setPreviewURL(url)
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (e.dataTransfer.files) {
            setProfilePicture(e.dataTransfer.files[0])
            const url = URL.createObjectURL(e.dataTransfer.files[0])
            setPreviewURL(url)
        }
    }
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    useEffect(() => {
        if (previewURL) {
            URL.revokeObjectURL(previewURL)
        }
    }, [previewURL])

    const clearImg = () => {
        setPreviewURL(null)
        setProfilePicture(null)
        setIsDragging(false)
    }

    return (
        <div className="w-full flex flex-col items-center gap-4 dark:text-text-primary-dark">
            <FileInput
                name="profile-picture"
                onChange={handleFileChange}
                label={
                    <div className="flex items-center gap-2 justify-center text-text-primary">
                        <ProjectImgUpload />
                        <p>Choose local file</p>
                    </div>
                }
                className="bg-primary w-full block text-center py-3 rounded-full"
                accept="image/jpeg, image/png, image/jpg"
            />
            <span>or</span>
            <div
                style={{
                    backgroundImage: previewURL ? `url(${previewURL})` : "",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={() => setIsDragging(true)}
                onDragLeave={() => setIsDragging(false)}
                onDragEnd={() => setIsDragging(false)}
                className={`w-full cursor-pointer grid place-items-center rounded-lg   min-h-[200px] ${
                    isDragging
                        ? "bg-secondary"
                        : "border-secondary border-dashed border-2"
                }`}
            >
                {!previewURL && <p className="text-2xl">Drop an image here</p>}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    className="hidden"
                />
            </div>
            {previewURL && (
                <div className="flex items-center gap-4">
                    <Button onClick={clearImg} variant="secondary">
                        Delete selected image
                    </Button>
                    <Button onClick={updatePFP} variant="secondary">
                        Change profile picture
                    </Button>
                </div>
            )}
        </div>
    )
}
export default PfpUpdate
