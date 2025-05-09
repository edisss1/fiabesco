import { FormEvent } from "react"
import { api } from "../services/api"

export const commentPost = async (
    comment: string,
    postID: string | undefined,
    e: FormEvent,
    userID: string | undefined
) => {
    e.preventDefault()
    if (comment.trim() === "" || !postID) throw new Error("Missing fields")

    try {
        const res = await api.post(`/posts/${postID}/comment`, {
            userID: userID,
            content: comment
        })

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
