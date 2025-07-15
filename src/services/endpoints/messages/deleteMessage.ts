import { api } from "../../api"

export const deleteMessage = async (messageID: string | undefined) => {
    if (!messageID) return

    try {
        await api.delete(`/messages/delete`, {
            data: {
                id: messageID
            }
        })
    } catch (error) {
        console.error(error)
    }
}
