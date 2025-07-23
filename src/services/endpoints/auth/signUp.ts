import axios from "axios"
import { login } from "./login"
import { AppDispatch } from "../../../redux/store"

export const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmedPassword: string,
    dispatch: AppDispatch
) => {
    if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        password !== confirmedPassword
    )
        return

    try {
        const res = await axios.post(
            import.meta.env.VITE_BASE_URL + "/auth/signup",
            {
                firstName,
                lastName,
                email,
                password,
                photoURL: "",
                bannerURL: "",
                followersCount: 0,
                followingCount: 0,
                bio: "",
                followedBy: [],
                followedUsers: []
            }
        )

        const data = res.data

        if (data) {
            await login(email, password, dispatch)
        }

        if (res.status !== 200) {
            throw new Error(res.data.error)
        }
    } catch (error) {
        console.error(error)
    }
}
