import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface MessagesState {
    isEditing: boolean
    messageToEdit: string | undefined // message's content
    messageID: string | undefined
}

const initialState: MessagesState = {
    isEditing: false,
    messageToEdit: undefined,
    messageID: undefined
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
        }
    }
})

export const { setEditing, setMessageToEdit, setMessageID } =
    messagesSlice.actions
export default messagesSlice.reducer
