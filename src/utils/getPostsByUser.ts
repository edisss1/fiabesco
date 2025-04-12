import axios from "axios"

export const getPostsByUser = async (
    userID: string | undefined,
    token: string | null
) => {
    try {
        const res = await axios.get(
            import.meta.env.VITE_BASE_URL + `/users/${userID}/post`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
