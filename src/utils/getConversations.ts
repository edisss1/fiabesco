import { api } from "../services/api"
import { Conversation } from "../types/Conversation"

export const getConversations = async (userID: string | undefined) => {
    const res = await api.get(`/conversations/${userID}`)

    const conversations = res.data as Conversation[]

    return conversations
}
