import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loading from "./components/atoms/Loading"

const Inbox = lazy(() => import("./Pages/Inbox"))
const Profile = lazy(() => import("./Pages/Profile"))
const Following = lazy(() => import("./Pages/Following"))
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
                    <Route path="inbox">
                        <Route index element={<Inbox />} />
                        <Route path=":conversationID" element={<Inbox />} />
                    </Route>
                    <Route path="profile/:userID" element={<Profile />} />
                    <Route path="following" element={<Following />} />
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    )
}

export default Router
