import { FormEvent } from "react"
import { api } from "../../api"

export const editMessage = async (
    messageID: string | undefined,
    content: string,
    e: FormEvent
) => {
    e.preventDefault()
    if (!messageID || content.trim() === "") return

    try {
        await api.patch(`/messages/${messageID}`, {
            newContent: content
        })
    } catch (error) {
        console.error(error)
    }
}
