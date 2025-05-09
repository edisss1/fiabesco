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
            console.log("Is editing: ", state.isEditing)
        },
        setMessageToEdit: (
            state,
            action: PayloadAction<string | undefined>
        ) => {
            state.messageToEdit = action.payload
            console.log("Message to edit: ", state.messageToEdit)
        },
        setMessageID: (state, action: PayloadAction<string | undefined>) => {
            state.messageID = action.payload
            console.log("Message ID: ", state.messageID)
        }
    }
})

export const { setEditing, setMessageToEdit, setMessageID } =
    messagesSlice.actions
export default messagesSlice.reducer
