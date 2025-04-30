import PageWrapper from "../components/atoms/PageWrapper"
import CreatePostForm from "../components/molecules/CreatePostForm"
import { useEffect } from "react"
import PostsContainer from "../components/atoms/PostsContainer"
import { useFeedData } from "../hooks/useFeedData"
import LoadingSpinner from "../components/atoms/LoadingSpinner"

const Feed = () => {
    const {
        scrollContainerRef,
        inView,
        hasNextPage,
        isFetchingNextPage,
        data,
        fetchNextPage
    } = useFeedData()

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    return (
        <PageWrapper>
            <CreatePostForm />
            {data === null && <LoadingSpinner />}
            {data !== null && <PostsContainer posts={data} />}
            <div ref={scrollContainerRef} className="h-10">
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
