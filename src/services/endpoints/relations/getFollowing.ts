import { User } from "../../../types/User"
import { api } from "../../api"

export const getFollowing = async (userID: string | undefined) => {
    if (!userID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/users/${userID}/following`
        )

        const data = res.data as User[]

        return data || []
    } catch (error) {
        console.error(error)
    }
}
