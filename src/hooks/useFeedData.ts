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
                limit: 10,
                skip: pageParam as number
            }

            return getFeedPosts(params)
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.hasMore ? lastPage.nextSkip : undefined
        }
    })

    const posts = data?.pages.flatMap((page) =>
        page.feedItems.map((item) => ({
            post: item.post,
            user: item.user
        }))
    )

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
