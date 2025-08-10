import { Comment } from "../../../types/Comment"
import { api } from "../../api"

type CommentItem = {
    comment: Comment
    userName: string
    photoURL: string
}

export interface CommentsResponse {
    comments: CommentItem[]
}

export interface GetCommentsParams {
    page: number
}

export const getComments = async (
    postID: string | undefined,
    params: GetCommentsParams
): Promise<CommentsResponse> => {
    const { page } = params

    const res = await api.get(
        import.meta.env.VITE_BASE_URL + `/posts/${postID}/comments?page=${page}`
    )

    const data = res.data

    const comments = (data as CommentItem[]) ?? []

    return { comments }
}
