import { FeedItem } from "../../../types/FeedItem"
import { api } from "../../api"

export const getPost = async (postID: string | undefined) => {
    if (!postID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/posts/${postID}`
        )

        const data = res.data as FeedItem

        return data
    } catch (error) {
        console.error(error)
    }
}
