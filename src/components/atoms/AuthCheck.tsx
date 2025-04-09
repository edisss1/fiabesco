import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../../types/User"
import { setUser } from "../../redux/slices/authSlice"

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { token, user } = useSelector((state: RootState) => state.auth)

    const { data: userData } = useQuery<User>({
        queryKey: ["userData"],
        queryFn: async () => {
            if (!user) throw new Error("User is not defined")

            try {
                const res = await axios.post(
                    import.meta.env.VITE_BASE_URL + `/users/${user._id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                )

                const data = res.data

                return data
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!user && !!token
    })

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData as User))
            console.log(user)
        }
    }, [])

    return <>{children}</>
}
export default AuthCheck
