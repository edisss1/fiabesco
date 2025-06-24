import axios from "axios"
import { AppStore } from "../redux/store"

let store: AppStore

export const injectStore = (_store: typeof store) => {
    store = _store
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use((config) => {
    if (store) {
        const token = store.getState().auth.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
})
