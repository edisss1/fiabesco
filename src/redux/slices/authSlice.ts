import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/User"

interface AuthState {
    token: string | null
    user: User | null
    emailForData: string | null
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: null,
    emailForData: localStorage.getItem("dataEmail") || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            console.log(state.user)
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        setEmailForData: (state, action: PayloadAction<string>) => {
            state.emailForData = action.payload
            console.log(state.emailForData, action.payload)
            localStorage.setItem("dataEmail", action.payload)
        }
    }
})

export const { setUser, setToken, setEmailForData } = authSlice.actions

export default authSlice.reducer
