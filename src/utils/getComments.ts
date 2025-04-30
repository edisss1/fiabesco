import { api } from "../services/api"
import { Comment } from "../types/Comment"

export const getComments = async (postID: string | undefined) => {
    if (!postID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/posts/${postID}/comments`
        )

        const data = res.data as Comment[]

        return data
    } catch (error) {
        console.error(error)
    }
}
