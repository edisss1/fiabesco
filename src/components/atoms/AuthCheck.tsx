import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../../types/User"
import { setStatus, setUser } from "../../redux/slices/authSlice"
import Loading from "./Loading"
import { useLocation, useNavigate } from "react-router-dom"

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { token, user, status } = useSelector(
        (state: RootState) => state.auth
    )
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
        const isDark = storedTheme === "dark" || (!storedTheme && prefersDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const { data: userData, refetch } = useQuery<User>({
        queryKey: ["userData", user?._id],
        queryFn: async () => {
            if (!token) return null
            try {
                dispatch(setStatus("loading"))
                const res = await axios.get(
                    import.meta.env.VITE_BASE_URL + `/users/me`,
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
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!token,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })

    useEffect(() => {
        if (token) {
            refetch()
            console.log("refetching")
        }
    }, [token])

    useEffect(() => {
        if (token && !location.pathname.startsWith("/app")) {
            navigate("/app/feed")
            console.log("redirecting")
            console.log("redirecting")
        }
    }, [dispatch, location.pathname, token])

    useEffect(() => {
        if (!userData) {
            if (user !== null) {
                dispatch(setUser(null))
                console.log("clearing user")
            }
        } else if (!user || user._id !== userData._id) {
            dispatch(setUser(userData))
            console.log("setting user")
        }
    }, [userData, user, dispatch])

    if (status === "loading") {
        return <Loading />
    }

    return <>{children}</>
}
export default AuthCheck
