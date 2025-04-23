import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../../types/User"
import { setStatus, setUser } from "../../redux/slices/authSlice"
import Loading from "./Loading"
import { useLocation, useNavigate } from "react-router-dom"
import { setSocket } from "../../redux/slices/websocketSlice"

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { token, user, emailForData, status } = useSelector(
        (state: RootState) => state.auth
    )
    const navigate = useNavigate()
    const location = useLocation()

    const { data: userData } = useQuery<User>({
        queryKey: ["userData", emailForData],
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

                    dispatch(setStatus("idle"))

                    return data
                }
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!emailForData,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })

    useEffect(() => {
        if (user?._id) {
            const socket = new WebSocket(
                `ws://localhost:3000/ws?userID=${user?._id}`
            )
            socket.onopen = () => {
                console.log(`Connected to socket - ${socket.url}`)
            }

            dispatch(setSocket(socket))
        }
    }, [user?._id])

    useEffect(() => {
        if (user && !location.pathname.startsWith("/app")) {
            navigate("/app/feed")
        }
    }, [user, dispatch, location.pathname])

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData as User))
        }
    }, [userData])

    if (status === "loading") {
        return <Loading />
    }

    return <>{children}</>
}
export default AuthCheck
