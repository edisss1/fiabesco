import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageType } from "../../types/Message"

interface MessagesState {
    isEditing: boolean
    messageToEdit: string | undefined // message's content
    messageID: string | undefined
    messageToReply: MessageType | null
}

const initialState: MessagesState = {
    isEditing: false,
    messageToEdit: undefined,
    messageID: undefined,
    messageToReply: null
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setEditing: (state, action: PayloadAction<boolean>) => {
            state.isEditing = action.payload
        },
        setMessageToEdit: (
            state,
            action: PayloadAction<string | undefined>
        ) => {
            state.messageToEdit = action.payload
        },
        setMessageID: (state, action: PayloadAction<string | undefined>) => {
            state.messageID = action.payload
        },
        setMessageToReply: (
            state,
            action: PayloadAction<MessageType | null>
        ) => {
            state.messageToReply = action.payload
        }
    }
})

export const { setEditing, setMessageToEdit, setMessageID, setMessageToReply } =
    messagesSlice.actions
export default messagesSlice.reducer
