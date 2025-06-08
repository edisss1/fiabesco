import { api } from "../services/api"
import { User } from "../types/User"

export const getBlockedUsers = async (userID: string | undefined) => {
    if (!userID) return

    try {
        const res = await api.get(
            import.meta.env.VITE_BASE_URL + `/users/${userID}/blocked`
        )

        const data = res.data as User[]

        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}
