import { FeedItem } from "../../../types/FeedItem"
import { api } from "../../api"

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
