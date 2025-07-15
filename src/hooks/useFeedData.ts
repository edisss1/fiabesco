import { useInView } from "react-intersection-observer"

import { useInfiniteQuery } from "@tanstack/react-query"
import {
    getFeedPosts,
    GetFeedPostsParams
} from "../services/endpoints/posts/getFeedPosts"

export function useFeedData() {
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
            const params: GetFeedPostsParams = {
                page: pageParam
            }

            return getFeedPosts(params)
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (
                !Array.isArray(lastPage.feedItems) ||
                lastPage.feedItems.length === 0
            ) {
                return undefined
            }
            return allPages.length + 1
        },
        refetchOnWindowFocus: false
    })

    const posts = data?.pages.flatMap((page) => page.feedItems)

    return {
        scrollContainerRef,
        inView,
        data: posts,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isFetching
    }
}
