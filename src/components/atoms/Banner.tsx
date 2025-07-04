import { useEffect, useState } from "react"
import UploadPhotoIcon from "../../assets/UploadPhotoIcon"
import FileInput from "./FileInput"
import Button from "./Button"
import { useMutation } from "@tanstack/react-query"
import { uploadBanner } from "../../utils/uploadBanner"

interface BannerProps {
    bannerURL: string | undefined
    isOwner: boolean
    userID: string | undefined
}

const Banner = ({ bannerURL, isOwner, userID }: BannerProps) => {
    const [showButton, setShowButton] = useState(false)
    const [previewURL, setPreviewURL] = useState<string | null>(null)
    const [selectedImg, setSelectedImg] = useState<File | null>(null)

    const { mutate: updateBanner } = useMutation({
        mutationKey: ["updateBanner"],
        mutationFn: async () => {
            if (selectedImg) {
                uploadBanner(userID, selectedImg)
                setShowButton(false)
            }
        }
    })

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const url = URL.createObjectURL(e.target.files[0])

            setSelectedImg(e.target.files[0])
            setPreviewURL(url)
            setShowButton(true)
        }
    }

    useEffect(() => {
        return () => {
            if (previewURL) {
                URL.revokeObjectURL(previewURL)
                setPreviewURL(null)
                setShowButton(false)
            }
        }
    }, [previewURL])

    return (
        <div
            className={`w-full h-[200px] group relative after:z-40 ${
                isOwner &&
                !previewURL &&
                "after:inset-0 after:absolute after:bg-none hover:after:bg-black/50 after:transition-all after:duration-200 after:w-full after:content-['']  "
            }`}
        >
            {bannerURL || previewURL ? (
                <img
                    className="h-[200px] w-full object-cover "
                    src={previewURL ? previewURL : bannerURL}
                />
            ) : (
                <div className="bg-text-primary/40  h-full"></div>
            )}
            {isOwner && !previewURL && (
                <div className="absolute z-[100] text-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <FileInput
                        onChange={handleFileUpload}
                        accept="image/*"
                        name="banner"
                        label={
                            <div className="flex flex-col items-center">
                                <UploadPhotoIcon />
                                <p>{bannerURL ? "Update" : "Upload"} banner</p>
                            </div>
                        }
                    />
                </div>
            )}
            {showButton && (
                <Button
                    onClick={updateBanner}
                    className="absolute bottom-4 right-4 z-[100] bg-secondary px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-100"
                >
                    Save
                </Button>
            )}
        </div>
    )
}
export default Banner
