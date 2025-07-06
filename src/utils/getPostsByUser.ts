import { api } from "../services/api"
import { FeedItem } from "../types/FeedItem"

export interface GetPostsByUserRes {
    feedItems: FeedItem[]
}

export interface GetPostsByUserParams {
    page: number
}

export const getPostsByUser = async (
    userID: string | undefined,
    params: GetPostsByUserParams
) => {
    const { page } = params
    const res = await api.get(`/users/${userID}/post?page=${page}`)

    const posts = (res.data as FeedItem[]) ?? []

    return { posts }
}
