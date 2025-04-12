import axios from "axios"
import { setStatus } from "../redux/slices/authSlice"
import { AppDispatch } from "../redux/store"

export const getProfileData = async (
    token: string | null,
    dispatch: AppDispatch,
    userID: string | undefined
) => {
    try {
        dispatch(setStatus("loading"))

        const res = await axios.get(
            import.meta.env.VITE_BASE_URL + `/users/profile/${userID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = res.data

        console.log(data)
        dispatch(setStatus("idle"))

        return data
    } catch (error) {
        console.error(error)
    }
}
