import { Link } from "react-router-dom"
import MoreIcon from "../../assets/MoreIcon"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"

interface FollowingCardProps {
    userName: string | undefined
    id: string | undefined
    bio: string | undefined
    photoURL: string | undefined
}

const FollowingCard = ({ userName, id, bio, photoURL }: FollowingCardProps) => {
    return (
        <div className="flex  items-center justify-between hover:bg-text-secondary/10 transition-colors duration-200 px-3 py-2 rounded-lg">
            <div className="flex items-center gap-2">
                <ProfilePicture url={photoURL} />
                <div className="flex flex-col">
                    <Link to={`/app/profile/${id}`}>{userName}</Link>
                    <p>{bio}</p>
                </div>
            </div>
            <Button className="self-start">
                <MoreIcon />
            </Button>
        </div>
    )
}
export default FollowingCard
