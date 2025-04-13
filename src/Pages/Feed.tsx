import { useInfiniteQuery } from "@tanstack/react-query"
import PageWrapper from "../components/atoms/PageWrapper"
import CreatePostForm from "../components/molecules/CreatePostForm"
import { getFeedPosts, GetFeedPostsParams } from "../utils/getFeedPosts"
import { useEffect } from "react"
import PostsContainer from "../components/atoms/PostsContainer"
import { useInView } from "react-intersection-observer"

const Feed = () => {
    const { ref: scrollContainerRef, inView } = useInView({
        threshold: 0,
        triggerOnce: false
    })

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
        useInfiniteQuery({
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

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    return (
        <PageWrapper>
            <CreatePostForm />

            <PostsContainer status={status} data={data} />

            <div ref={scrollContainerRef} className="h-10">
                {/* {isFetchingNextPage && <LoadingSpinner />} */}
                {!hasNextPage && (
                    <p className="text-center text-gray-500">
                        No more posts to load
                    </p>
                )}
            </div>
        </PageWrapper>
    )
}
export default Feed
