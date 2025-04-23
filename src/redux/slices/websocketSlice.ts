import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WebsocketState {
    socket: WebSocket | null
}

const initialState: WebsocketState = {
    socket: null
}

const websocketSlice = createSlice({
    name: "websocket",
    initialState,
    reducers: {
        setSocket: (state, action: PayloadAction<WebSocket>) => {
            state.socket = action.payload
        }
    }
})

export const { setSocket } = websocketSlice.actions
export default websocketSlice.reducer
