import { NavigateFunction } from "react-router-dom"
import { setToken, setUser } from "../../../redux/slices/authSlice"
import { AppDispatch } from "../../../redux/store"

export const logout = (navigate: NavigateFunction, dispatch: AppDispatch) => {
    localStorage.removeItem("token")
    dispatch(setUser(null))
    dispatch(setToken(null))
    navigate("/")
}
