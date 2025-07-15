import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { User } from "../types/User"
import { AppDispatch } from "../redux/store"
import { FeedItem } from "../types/FeedItem"
import { useInView } from "react-intersection-observer"
import { getProfileData } from "../services/endpoints/users/getProfileData"
import {
    getPostsByUser,
    GetPostsByUserParams
} from "../services/endpoints/posts/getPostsByUser"

export function useProfileData(
    userID: string | undefined,
    token: string | null,
    dispatch: AppDispatch
) {
    const { data: profileData, isLoading } = useQuery<User>({
        queryKey: ["profileData", userID],
        queryFn: () => getProfileData(token, dispatch, userID),
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        enabled: !!token
    })

    const { ref: scrollContainerRef, inView } = useInView({
        threshold: 0,
        triggerOnce: false
    })

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isFetching
    } = useInfiniteQuery({
        queryKey: ["feedPosts"],
        queryFn: async ({ pageParam = 0 }) => {
            const params: GetPostsByUserParams = {
                page: pageParam
            }

            return getPostsByUser(userID, params)
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (!Array.isArray(lastPage.posts) || lastPage.posts.length === 0) {
                return undefined
            }
            return allPages.length + 1
        }
    })

    // const { data } = useQuery<res>({
    //     queryKey: ["postsByUser", userID],
    //     queryFn: () => getPostsByUser(userID),
    //     enabled: !!userID
    // })

    const posts = data?.pages.flatMap((page) => page.posts) as FeedItem[]

    return {
        scrollContainerRef,
        inView,
        data: posts,
        profileData,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isFetching
    }
}
