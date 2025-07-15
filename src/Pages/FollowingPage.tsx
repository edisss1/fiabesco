import { useQuery } from "@tanstack/react-query"
import PageWrapper from "../components/atoms/PageWrapper"
import { User } from "../types/User"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import FollowedWrapper from "../components/molecules/FollowedWrapper"
import SearchBar from "../components/atoms/SearchBar"
import { getFollowing } from "../services/endpoints/relations/getFollowing"

const Following = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    const { data: following } = useQuery<User[] | undefined>({
        queryKey: ["following"],
        queryFn: () => getFollowing(user?._id),
        enabled: !!user?._id
    })

    return (
        <PageWrapper header="Following" headerEnabled>
            <div className="w-full max-w-[600px] mx-auto flex flex-col gap-8 px-2">
                <SearchBar />
                <FollowedWrapper following={following} />
            </div>
        </PageWrapper>
    )
}
export default Following
