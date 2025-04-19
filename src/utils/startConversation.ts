import { NavigateFunction } from "react-router-dom"
import { api } from "../services/api"

export const startConversation = async (
    userID: string | undefined,
    recipientID: string | undefined,
    navigate: NavigateFunction
) => {
    if (!userID || !recipientID) throw new Error("Missing ID")

    const res = await api.post("/conversations/start", {
        senderID: userID,
        recipientID: recipientID
    })

    const conversationID = res.data

    navigate(`/app/inbox/${conversationID}`)
}
