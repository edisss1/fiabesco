import { NavigateFunction } from "react-router-dom"
import { setUser } from "../../../redux/slices/authSlice"
import { AppDispatch } from "../../../redux/store"

export const logout = (navigate: NavigateFunction, dispatch: AppDispatch) => {
    localStorage.removeItem("token")
    localStorage.removeItem("dataEmail")
    dispatch(setUser(null))
    navigate("/")
}
