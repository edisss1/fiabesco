import { useQuery } from "@tanstack/react-query"
import BlockedUserCard from "../../components/atoms/BlockedUserCard"
import Select from "../../components/atoms/Select"
import { profileVisibilityOptions } from "../../constants/profileVisibilityOptions"
import { getBlockedUsers } from "../../utils/getBlockedUsers"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const PrivacySettings = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    const { data: blocked } = useQuery({
        queryKey: ["blocked"],
        queryFn: () => getBlockedUsers(user?._id),
        enabled: !!user?._id
    })

    return (
        <div className="min-w-[300px] grid gap-6">
            <Select
                label="Profile visibility"
                options={profileVisibilityOptions}
            />

            <div className="grid gap-4">
                <h2 className="text-lg">Blocked users</h2>
                {blocked?.map((user) => (
                    <BlockedUserCard
                        key={user._id}
                        photoURL={user.photoURL}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        id={user?._id}
                    />
                ))}
                {!blocked && (
                    <span className="text-sm text-text-primary">
                        No blocked users
                    </span>
                )}
            </div>
        </div>
    )
}
export default PrivacySettings
