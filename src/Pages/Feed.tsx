import PageWrapper from "../components/atoms/PageWrapper"
import CreatePostForm from "../components/molecules/CreatePostForm"
import { useEffect } from "react"
import PostsContainer from "../components/atoms/PostsContainer"
import { useFeedData } from "../hooks/useFeedData"
import PostSkeleton from "../components/atoms/PostSkeleton"

const Feed = () => {
    const {
        scrollContainerRef,
        inView,
        hasNextPage,
        isFetchingNextPage,
        data,
        fetchNextPage,
        isFetching
    } = useFeedData()

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    return (
        <PageWrapper>
            <CreatePostForm />
            {data !== null && <PostsContainer posts={data} />}
            <div ref={scrollContainerRef} className="h-10"></div>
            {isFetching && <PostSkeleton />}
        </PageWrapper>
    )
}
export default Feed
