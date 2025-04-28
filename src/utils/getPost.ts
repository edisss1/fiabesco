import { api } from "../services/api"

export const getPost = async (postID: string | undefined) => {
    if (!postID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/posts/${postID}`
        )

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
