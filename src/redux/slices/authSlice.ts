import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/User"

interface AuthState {
    token: string | null
    user: User | null
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        }
    }
})

export const { setUser, setToken } = authSlice.actions

export default authSlice.reducer
