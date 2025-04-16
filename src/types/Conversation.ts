export interface ConversationType {
    _id?: string
    participants: string[]
    names: string[]
    lastMessage: string | null
    createdAt: string
    updatedAt: string
}
