import UploadPhotoIcon from "../../assets/UploadPhotoIcon"
import Button from "./Button"

interface BannerProps {
    bannerURL: string | undefined
    isOwner: boolean
}

const Banner = ({ bannerURL, isOwner }: BannerProps) => {
    return (
        <div
            className={`w-full h-[200px] group relative  rounded-b-xl after:z-40 border-b-2 border-text-secondary ${
                isOwner &&
                "after:inset-0 after:absolute after:bg-none hover:after:bg-black/50 after:transition-all after:duration-200 after:w-full after:content-['']  after:rounded-b-xl"
            }`}
        >
            {bannerURL ? (
                <img
                    className="h-[200px] w-full object-cover rounded-b-xl"
                    src={bannerURL}
                />
            ) : (
                <div className="bg-text-primary/40 rounded-b-xl h-full"></div>
            )}
            {isOwner && (
                <div className="absolute z-[100] text-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <Button className="cursor-pointer text-lg font-medium flex flex-col items-center gap-2">
                        <UploadPhotoIcon />
                        {bannerURL ? "Update" : "Upload"} banner
                    </Button>
                </div>
            )}
        </div>
    )
}
export default Banner
