import { MessageType } from "./Message"
import { User } from "./User"

export interface Participant {
    _id?: string
    userName: string
    photoURL: string
}

export interface Conversation {
    _id?: string
    participants: Participant[]
    isGroup: boolean
    name: string
    lastMessage: MessageType
    createdAt: string
    updatedAt: string
    recipient: User // just for 1 on 1 conversations, todo: implement logic like this for group chats
}
