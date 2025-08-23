import { useMutation } from "@tanstack/react-query"
import { FormEvent } from "react"
import { setEditing, setMessageToReply } from "../redux/slices/messagesSlice"
import { AppDispatch } from "../redux/store"
import { MessageType } from "../types/Message"

interface MessageActionsProps {
    senderID: string | undefined
    recipientID: string | undefined
    conversationID: string
    content: string
    newContent: string
    messageID: string | undefined
    socket: WebSocket | null
    setContent: React.Dispatch<React.SetStateAction<string>>
    setNewContent: React.Dispatch<React.SetStateAction<string>>
    dispatch: AppDispatch
    messageToReply: MessageType | null
}

export function useMessageActions({
    senderID,
    recipientID,
    conversationID,
    messageID,
    content,
    newContent,
    messageToReply,
    socket,
    setContent,
    setNewContent,
    dispatch
}: MessageActionsProps) {
    const { mutate: send } = useMutation({
        mutationKey: ["send"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (!content || !senderID || !content || !recipientID) return

            const payload = {
                type: "send_message",
                data: {
                    senderID,
                    recipientID,
                    conversationID,
                    content
                }
            }
            socket?.send(JSON.stringify(payload))
        },

        onSuccess: () => {
            setContent("")
        }
    })

    const { mutate: edit } = useMutation({
        mutationKey: ["edit"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (!newContent || !senderID || !messageID) return
            const payload = {
                type: "edit_message",
                data: {
                    messageID,
                    content: newContent,
                    conversationID,
                    senderID
                }
            }

            socket?.send(JSON.stringify(payload))
        },

        onSuccess: () => {
            setNewContent("")
            dispatch(setEditing(false))
        }
    })

    const { mutate: reply } = useMutation({
        mutationKey: ["reply"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (content.trim() === "" || !conversationID || !messageToReply)
                return

            const payload = {
                type: "send_reply",
                data: {
                    senderID,
                    conversationID,
                    content,
                    replyTo: messageToReply._id
                }
            }
            socket?.send(JSON.stringify(payload))
        },
        onSuccess: () => {
            dispatch(setMessageToReply(null))
            setContent("")
            setNewContent("")
        }
    })

    return { send, edit, reply }
}
