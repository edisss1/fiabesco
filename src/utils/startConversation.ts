import { NavigateFunction } from "react-router-dom"
import { api } from "../services/api"

export const startConversation = async (
    userID: string | undefined,
    recipientID: string | undefined,
    navigate: NavigateFunction
) => {
    if (!userID || !recipientID) throw new Error("Missing ID")

    const body = {
        senderID: userID,
        recipientID: recipientID
    }

    const res = await api.post("/conversations/start", {
        body
    })

    const conversationID = res.data

    navigate(`/inbox/${conversationID}`)
}
