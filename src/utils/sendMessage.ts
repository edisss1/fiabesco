import { FormEvent } from "react"
import { api } from "../services/api"

export const sendMessage = async (
    content: string,
    senderID: string | undefined,
    conversationID: string | undefined,
    e: FormEvent
) => {
    e.preventDefault()
    if (content.trim() === "" || !senderID || !conversationID) return

    await api.post(`/conversations/${conversationID}/messages/${senderID}`, {
        content
    })
}
