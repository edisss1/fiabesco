export interface MessageType {
    _id?: string
    conversationID: string
    senderID: string
    content: string
    files: string[]
    read: boolean
    createdAt: string
    updatedAt: string
    isReply: boolean
    replyTo: string
}
