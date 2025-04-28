import { api } from "../services/api"
import { FeedItem } from "../types/FeedItem"

export interface GetFeedPostsRes {
    feedItems: FeedItem[]
    nextSkip?: number
    hasMore: boolean
}

export interface GetFeedPostsParams {
    sampleSize?: number
    limit?: number
    skip?: number
}

export const getFeedPosts = async (
    params: GetFeedPostsParams
): Promise<GetFeedPostsRes> => {
    const { sampleSize, limit, skip } = params

    const res = await api.get("/posts/feed", {
        params: {
            sample: sampleSize,
            limit,
            skip
        }
    })

    const feedItems = res.data.feedItems as FeedItem[]

    return {
        feedItems: feedItems,
        hasMore: res.data.hasMore,
        nextSkip: res.data.nextSkip
    }
}
