import { User } from "./User"

export interface Conversation {
    _id?: string
    participants: string[]
    names: string[]
    isGroup: boolean
    name: string
    lastMessage: string | null
    createdAt: string
    updatedAt: string
    recipient: User // just for 1 on 1 conversations, todo: implement logic like this for group chats
}
