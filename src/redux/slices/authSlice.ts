import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/User"

interface AuthState {
    token: string | null
    user: User | null
    emailForData: string | null
    status: "loading" | "idle"
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: null,
    emailForData: localStorage.getItem("dataEmail") || null,
    status: "idle"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        setEmailForData: (state, action: PayloadAction<string>) => {
            state.emailForData = action.payload
            localStorage.setItem("dataEmail", action.payload)
        },
        setStatus: (state, action: PayloadAction<"idle" | "loading">) => {
            state.status = action.payload
        },
        updatePhotoURL: (state, action: PayloadAction<string>) => {
            state.user!.photoURL = action.payload
        }
    }
})

export const { setUser, setToken, setEmailForData, setStatus, updatePhotoURL } =
    authSlice.actions

export default authSlice.reducer
