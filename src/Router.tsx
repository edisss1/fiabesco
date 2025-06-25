import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loading from "./components/atoms/Loading"
import CreatePortfolio from "./Pages/CreatePortfolio"

const Portfolio = lazy(() => import("./Pages/Portfolio"))
const PostView = lazy(() => import("./Pages/PostView"))
const PrivacySettings = lazy(() => import("./Pages/settings/PrivacySettings"))
const DataStorageSettings = lazy(
    () => import("./Pages/settings/DataStorageSettings")
)
const NonExistingPath = lazy(() => import("./components/atoms/NonExistingPath"))
const Settings = lazy(() => import("./Pages/settings/Settings"))
const GeneralSettings = lazy(() => import("./Pages/settings/GeneralSettings"))
const AccountSettings = lazy(() => import("./Pages/settings/AccountSettings"))
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
                    <Route path="settings" element={<Settings />}>
                        <Route path="general" element={<GeneralSettings />} />
                        <Route path="account" element={<AccountSettings />} />
                        <Route path="privacy" element={<PrivacySettings />} />
                        <Route
                            path="data-storage"
                            element={<DataStorageSettings />}
                        />
                    </Route>
                    <Route path="profile/:userID" element={<Profile />} />
                    <Route path="following" element={<Following />} />
                    <Route path="post/:postID" element={<PostView />} />
                    <Route path=":userID/portfolio" element={<Portfolio />} />
                    <Route
                        path="create-portfolio"
                        element={<CreatePortfolio />}
                    />
                </Route>
                <Route path="*" element={<NonExistingPath />} />
            </Routes>
        </Suspense>
    )
}

export default Router
