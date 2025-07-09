import { User } from "../../types/User"
import FollowingCard from "../atoms/FollowingCard"

interface FollowedWrapperProps {
    following: User[] | undefined
}

const FollowedWrapper = ({ following }: FollowedWrapperProps) => {
    return (
        <div className="flex flex-col gap-4 dark:text-text-primary-dark">
            {following?.length === 0 && (
                <span>You're not following anyone yet</span>
            )}
            {following?.map((user) => (
                <FollowingCard
                    photoURL={user.photoURL}
                    key={user._id}
                    userName={`${user.firstName} ${user.lastName}`}
                    bio={user.bio}
                    id={user._id}
                />
            ))}
        </div>
    )
}
export default FollowedWrapper
