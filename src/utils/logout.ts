import { NavigateFunction } from "react-router-dom"

// Temporary logout function
export const logout = (navigate: NavigateFunction) => {
    localStorage.removeItem("token")
    localStorage.removeItem("dataEmail")
    navigate("/")
}
