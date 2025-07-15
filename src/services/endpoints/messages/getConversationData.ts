import { Conversation } from "../../../types/Conversation"
import { MessageType } from "../../../types/Message"
import { api } from "../../api"

export const getConversationData = async (
    conversationID: string | undefined
) => {
    if (!conversationID) return

    const res = await api.get(`/conversations/${conversationID}`)

    const conversation = res.data.conversation as Conversation
    const messages = res.data.messages as MessageType[]

    return { conversation, messages }
}
