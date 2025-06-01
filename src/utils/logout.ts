import { NavigateFunction } from "react-router-dom"
import { AppDispatch } from "../redux/store"
import { setUser } from "../redux/slices/authSlice"

export const logout = (navigate: NavigateFunction, dispatch: AppDispatch) => {
    localStorage.removeItem("token")
    localStorage.removeItem("dataEmail")
    dispatch(setUser(null))
    navigate("/")
}
