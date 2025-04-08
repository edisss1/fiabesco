import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default Router
