import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loading from "./components/atoms/Loading"

const Home = lazy(() => import("./Pages/Home"))
const Auth = lazy(() => import("./Pages/Auth"))
const Login = lazy(() => import("./Pages/Login"))
const SignUp = lazy(() => import("./Pages/SignUp"))
const Feed = lazy(() => import("./Pages/Feed"))

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="/app">
                    <Route path="feed" element={<Feed />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Router
