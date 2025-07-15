import { useQuery } from "@tanstack/react-query"
import { Conversation } from "../types/Conversation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { getConversationData } from "../services/endpoints/messages/getConversationData"

export function useConversations(
    userID: string | undefined,
    conversationID: string | undefined
) {
    const [conversations, setConversations] = useState<Conversation[]>([])
    const { socket } = useSelector((state: RootState) => state.socket)

    useEffect(() => {
        if (!userID || !socket) return

        const sendMessage = () => {
            const payload = {
                type: "get_conversations",
                data: {
                    userID
                }
            }
            socket.send(JSON.stringify(payload))
            console.log("Sent message")
        }

        if (socket.readyState === WebSocket.OPEN) {
            sendMessage()
        } else {
            socket.addEventListener("open", sendMessage)
        }

        return () => {
            socket.removeEventListener("open", sendMessage)
        }
    }, [userID, socket])

    useEffect(() => {
        if (!socket) return
        const handleUpdate = (e: MessageEvent) => {
            const data = JSON.parse(e.data)
            if (data.type === "conversations_update") {
                const payload = {
                    type: "get_conversations",
                    data: {
                        userID
                    }
                }
                socket.send(JSON.stringify(payload))
            }

            if (data.type === "conversations") {
                setConversations(data.conversations)
            }
        }

        socket.addEventListener("message", handleUpdate)

        return () => {
            socket.removeEventListener("message", handleUpdate)
        }
    }, [socket, userID])

    useEffect(() => {
        console.log(conversations)
    }, [conversations])

    const { data: conversationData } = useQuery({
        queryKey: ["conversationData", conversationID],
        queryFn: () => getConversationData(conversationID),
        enabled: !!conversationID
    })

    return { conversations, conversationData }
}
