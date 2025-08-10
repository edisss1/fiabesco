import PhotoIcon from "../../assets/PhotoIcon"
import ProfilePictureFallback from "./ProfilePictureFallback"

import Dialog from "../Common/Dialog"
import Button from "../Common/Button"
import { openModal } from "../../utils/openModal"
import PfpUpdate from "./PfpUpdate"
import { useRef } from "react"

interface ProfilePictureProps {
    url: string | undefined
    updateEnabled?: boolean
    userID?: string
    dimensions?: "w-9 h-9" | "w-14 h-14"
    isOwner?: boolean
}

const ProfilePicture = ({
    url,
    updateEnabled = false,
    userID,
    dimensions = "w-14 h-14",
    isOwner
}: ProfilePictureProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    return (
        <>
            <div
                className={`relative inline-block group ${dimensions} ${
                    updateEnabled && isOwner
                        ? "after:h-1/2 after:top-1/2 after:rounded-b-full after:opacity-50 after:absolute after:bg-none hover:after:bg-black after:transition-all after:duration-200 after:w-full after:content-['']  after:z-40"
                        : ""
                }`}
            >
                {url ? (
                    <img
                        className={`${dimensions} rounded-full object-cover `}
                        src={url}
                        key={url}
                    />
                ) : (
                    <ProfilePictureFallback updateEnabled={false} />
                )}

                {updateEnabled && isOwner && (
                    <Button
                        onClick={() => openModal(dialogRef)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-100 cursor-pointer"
                    >
                        <PhotoIcon className="[&>path]:stroke-background" />
                    </Button>
                )}
            </div>
            <Dialog dialogRef={dialogRef}>
                <PfpUpdate dialogRef={dialogRef} userID={userID} />
            </Dialog>
        </>
    )
}
export default ProfilePicture

//
