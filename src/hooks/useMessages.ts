import { useEffect, useState } from "react"
import { MessageType } from "../types/Message"
import { Conversation } from "../types/Conversation"

export function useMessages(
    socket: WebSocket | null,
    conversationID: string | undefined,
    conversationData:
        | {
              conversation: Conversation
              messages: MessageType[]
          }
        | undefined
) {
    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data)
                if (data.type === "conversations_update") {
                    const data = JSON.parse(event.data)

                    const incoming = data.message

                    if (incoming && incoming.conversationID !== conversationID)
                        return

                    setMessages((prev) => {
                        const index = prev.findIndex(
                            (m) => m._id === incoming._id
                        )
                        if (index !== -1) {
                            const updated = [...prev]

                            updated[index] = incoming
                            return updated
                        }
                        return [...prev, incoming]
                    })
                }
            }
        }
    }, [socket, conversationID])

    useEffect(() => {
        setMessages(conversationData?.messages ? conversationData.messages : [])
    }, [conversationData, conversationID])

    return { messages }
}
