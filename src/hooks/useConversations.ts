import { useQuery } from "@tanstack/react-query"
import { Conversation } from "../types/Conversation"
import { getConversationData } from "../utils/getConversationData"
import { getConversations } from "../utils/getConversations"

export function useConversations(
    userID: string | undefined,
    conversationID: string | undefined
) {
    const { data: conversations } = useQuery<Conversation[]>({
        queryKey: ["conversations"],
        queryFn: () => getConversations(userID),
        enabled: !!userID
    })

    const { data: conversationData } = useQuery({
        queryKey: ["conversationData", conversationID],
        queryFn: () => getConversationData(conversationID),
        enabled: !!conversationID
    })

    return { conversations, conversationData }
}
