import axios from "axios"
import { AppDispatch } from "../redux/store"
import { setEmailForData, setToken } from "../redux/slices/authSlice"

export const login = async (
    email: string,
    password: string,
    dispatch: AppDispatch
) => {
    if (!email || !password) return

    try {
        const res = await axios.post(
            import.meta.env.VITE_BASE_URL + "/auth/login",
            {
                email: email,
                password: password
            }
        )

        const data = res.data

        if (data) {
            dispatch(setEmailForData(email))
            dispatch(setToken(data.token as string))
            return true
        }
    } catch (error) {
        console.error(error)
        return false
    }
}
