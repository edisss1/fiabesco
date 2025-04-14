import { FormEvent } from "react"
import { api } from "../services/api"

export const createPost = async (
    token: string | null,
    userID: string | undefined,
    caption: string,
    e: FormEvent
) => {
    e.preventDefault()
    if (!token || !userID) return

    try {
        const res = await api.post(`/users/${userID}/posts`, {
            caption
        })

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
