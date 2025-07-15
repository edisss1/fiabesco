import { FormEvent } from "react"
import { api } from "../../api"

export const createPost = async (
    token: string | null,
    userID: string | undefined,
    caption: string,
    e: FormEvent,
    images?: File[] | null
) => {
    e.preventDefault()
    if (!token || !userID) return

    try {
        const formData = new FormData()

        images?.forEach((img, index) => {
            formData.append(`post-img-${index}`, img)
        })

        const post = {
            caption,
            images: images?.map(() => "") || []
        }

        formData.append("post", JSON.stringify(post))

        const res = await api.post(`/users/${userID}/posts`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        return res.data
    } catch (error) {}
}
