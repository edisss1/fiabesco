import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import websocketReducer from "./slices/websocketSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        socket: websocketReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
