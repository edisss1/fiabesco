import { api } from "../services/api"

export const getPostsByUser = async (userID: string | undefined) => {
    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/users/${userID}/post`
        )

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
