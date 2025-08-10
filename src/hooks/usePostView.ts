import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { getPost } from "../services/endpoints/posts/getPost"
import {
    getComments,
    GetCommentsParams
} from "../services/endpoints/comments/getComments"
import { useInView } from "react-intersection-observer"

export function usePostView(postID: string | undefined) {
    const { user } = useSelector((state: RootState) => state.auth)

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
        queryKey: ["comments"],
        queryFn: async ({ pageParam = 0 }) => {
            const params: GetCommentsParams = {
                page: pageParam
            }

            return getComments(postID, params)
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (
                !Array.isArray(lastPage?.comments) ||
                lastPage.comments.length === 0
            ) {
                return undefined
            }
            return allPages.length + 1
        },
        refetchOnWindowFocus: false
    })

    const comments = data?.pages.flatMap((page) => page?.comments)

    const currentUserID = user?._id

    const { data: post } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPost(postID),
        refetchOnWindowFocus: false
    })

    return {
        scrollContainerRef,
        inView,
        hasNextPage,
        isFetchingNextPage,
        comments,
        postData: post,
        fetchNextPage,
        isFetching,
        currentUserID,
        status
    }
}
