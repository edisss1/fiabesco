import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import websocketReducer from "./slices/websocketSlice"
import messageReducer from "./slices/messagesSlice"
import portfolioReducer from "./slices/portfolioSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        socket: websocketReducer,
        messages: messageReducer,
        portfolio: portfolioReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["websocket/setSocket"],
                ignoredPaths: ["websocket.socket"]
            }
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
