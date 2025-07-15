import { Comment } from "../../../types/Comment"
import { User } from "../../../types/User"
import { api } from "../../api"

export interface CommentsResponse {
    comment: Comment
    user: User
}

export const getComments = async (postID: string | undefined) => {
    if (!postID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/posts/${postID}/comments`
        )

        const data = res.data as CommentsResponse[]

        return data
    } catch (error) {
        console.error(error)
    }
}
