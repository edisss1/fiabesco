import { useInView } from "react-intersection-observer"
import { getFeedPosts, GetFeedPostsParams } from "../utils/getFeedPosts"
import { useInfiniteQuery } from "@tanstack/react-query"

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

    console.log("posts", posts)
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
