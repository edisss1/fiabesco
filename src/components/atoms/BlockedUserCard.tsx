import CrossIcon from "../../assets/CrossIcon"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"

interface BlockedUserCardProps {
    photoURL: string
    firstName: string
    lastName: string
    id: string | undefined
}

const BlockedUserCard = ({
    photoURL,
    firstName,
    lastName,
    id
}: BlockedUserCardProps) => {
    return (
        <div className="w-full max-w-[300px] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <ProfilePicture url={photoURL} />
                <p className="text-lg">
                    {firstName} {lastName}
                </p>
            </div>
            <div className="relative group">
                <Button
                    ariaLabel="unblock user"
                    className="cursor-pointer p-1 rounded-lg"
                >
                    <CrossIcon />
                </Button>
                <span className="absolute bottom-full mb-1  left-1/2 -translate-x-1/2 bg-text-primary text-sm text-white px-2 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100  transition-all duration-200 ">
                    Unblock
                </span>
            </div>
        </div>
    )
}
export default BlockedUserCard
