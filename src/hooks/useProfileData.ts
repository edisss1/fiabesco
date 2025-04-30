import { useQuery } from "@tanstack/react-query"
import { User } from "../types/User"
import { AppDispatch } from "../redux/store"
import { getProfileData } from "../utils/getProfileData"
import { Post } from "../types/Post"
import { getPostsByUser } from "../utils/getPostsByUser"
import { FeedItem } from "../types/FeedItem"
interface res {
    posts: {
        post: Post
        user: User
    }[]
}

export function useProfileData(
    userID: string | undefined,
    token: string | null,
    dispatch: AppDispatch
) {
    const { data: profileData } = useQuery<User>({
        queryKey: ["profileData", userID],
        queryFn: () => getProfileData(token, dispatch, userID),
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        enabled: !!token
    })

    const { data } = useQuery<res>({
        queryKey: ["postsByUser", userID],
        queryFn: () => getPostsByUser(userID),
        enabled: !!userID
    })

    const posts = data?.posts

    return { profileData, posts }
}
