import { api } from "../services/api"
import { Post } from "../types/Post"

export interface GetFeedPostsRes {
    posts: Post[]
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

    return {
        posts: res.data.posts,
        hasMore: res.data.hasMore,
        nextSkip: res.data.nextSkip
    }
}
