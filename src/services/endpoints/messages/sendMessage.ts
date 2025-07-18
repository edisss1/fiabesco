import { FormEvent } from "react"
import { MessageType } from "../../../types/Message"
import { api } from "../../api"

export const sendMessage = async (
    content: string,
    senderID: string | undefined,
    conversationID: string | undefined,
    e: FormEvent
) => {
    e.preventDefault()
    if (content.trim() === "" || !senderID || !conversationID) return

    const res = await api.post(
        `/conversations/${conversationID}/messages/${senderID}`,
        {
            content
        }
    )

    const newMessage = res.data.newMessage as MessageType

    return newMessage
}
