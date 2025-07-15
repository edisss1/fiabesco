import { api } from "../../api"

export const likePost = async (
    userID: string | undefined,
    postID: string | undefined
) => {
    if (!userID || !postID) throw new Error("Missing fields")

    try {
        const res = await api.post(
            import.meta.env.VITE_BASE_URL + `/posts/like`,
            {
                userID: userID,
                postID: postID
            }
        )

        const data = res.data.likesCount

        return data
    } catch (error) {
        console.error(error)
    }
}
