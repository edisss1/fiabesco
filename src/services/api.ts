import axios from "axios"
import { RootState, store } from "../redux/store"

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use((config) => {
    const state = store.getState() as RootState
    const token = state.auth.token || localStorage.getItem("token")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
