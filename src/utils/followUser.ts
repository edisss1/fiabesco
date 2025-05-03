import { api } from "../services/api"

export const followUser = async (
    userID: string | undefined,
    userToFollowID: string | undefined
) => {
    if (!userID || !userToFollowID) throw new Error("Missing ID")

    try {
        const res = await api.post(
            import.meta.env.VITE_BASE_URL + `/users/${userID}/follow`,
            {
                id: userToFollowID
            }
        )

        return res.data
    } catch (error) {
        console.error(error)
    }
}
