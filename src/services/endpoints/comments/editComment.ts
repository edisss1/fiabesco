import { FormEvent } from "react"
import { api } from "../../api"

export const editComment = async (
    newContent: string,
    commentID: string | undefined,
    userID: string | undefined,
    e: FormEvent
) => {
    e.preventDefault()
    if (newContent.trim() === "" || !commentID || !userID)
        throw new Error("Missing fields")

    api.patch(import.meta.env.VITE_BASE_URL + `/posts/${commentID}/edit`, {
        userID: userID,
        newContent: newContent
    })
}
