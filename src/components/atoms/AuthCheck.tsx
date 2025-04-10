import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../../types/User"
import { setStatus, setUser } from "../../redux/slices/authSlice"

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { token, emailForData, status } = useSelector(
        (state: RootState) => state.auth
    )

    const { data: userData } = useQuery<User>({
        queryKey: ["userData"],
        queryFn: async () => {
            try {
                if (emailForData) {
                    dispatch(setStatus("loading"))
                    const res = await axios.post(
                        import.meta.env.VITE_BASE_URL + `/users/me`,
                        { email: emailForData },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "application/json"
                            }
                        }
                    )

                    const data = res.data
                    console.log(data)

                    dispatch(setStatus("idle"))

                    return data
                }
            } catch (error) {
                console.error(error)
            }
        }
    })

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData as User))
        }
    }, [userData])

    if (status === "loading") {
        return <div>Loading...</div>
    }

    return <>{children}</>
}
export default AuthCheck
