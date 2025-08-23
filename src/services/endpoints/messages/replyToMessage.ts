import { api } from "../../api"

export async function replyToMessage(
    content: string,
    replyToID: string,
    conversationID: string | undefined
) {
    if (content.trim() === "" || !replyToID || !conversationID) return

    try {
        const res = await api.post(`/messages/reply/${conversationID}`, {
            content: content,
            replyTo: replyToID
        })

        const data = res.data
        return data
    } catch (error) {
        throw error
    }
}
