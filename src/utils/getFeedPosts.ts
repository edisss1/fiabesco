import { api } from "../services/api"
import { FeedItem } from "../types/FeedItem"

export interface GetFeedPostsRes {
    feedItems: FeedItem[]
}

export interface GetFeedPostsParams {
    page: number
}

export const getFeedPosts = async (
    params: GetFeedPostsParams
): Promise<GetFeedPostsRes> => {
    const { page } = params

    const res = await api.get(`/posts/feed?page=${page}`)

    const feedItems = (res.data as FeedItem[]) ?? []
    return {
        feedItems
    }
}
