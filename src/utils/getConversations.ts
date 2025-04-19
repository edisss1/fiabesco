import { api } from "../services/api"
import { Conversation } from "../types/Conversation"

export const getConversations = async (userID: string | undefined) => {
    if (userID) {
        const res = await api.get(`/conversations/${userID}`)

        const conversations = res.data as Conversation[]
        console.log(conversations)

        return conversations
    } else {
        return []
    }
}
