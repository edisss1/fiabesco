import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loading from "./components/atoms/Loading"
import CreatePortfolio from "./Pages/CreatePortfolioPage"

const Portfolio = lazy(() => import("./Pages/PortfolioPage"))
const PostView = lazy(() => import("./Pages/PostViewPage"))
const PrivacySettings = lazy(() => import("./Pages/settings/PrivacySettings"))
const DataStorageSettings = lazy(
    () => import("./Pages/settings/DataStorageSettings")
)
const NonExistingPath = lazy(() => import("./components/atoms/NonExistingPath"))
const Settings = lazy(() => import("./Pages/settings/Settings"))
const GeneralSettings = lazy(() => import("./Pages/settings/GeneralSettings"))
const AccountSettings = lazy(() => import("./Pages/settings/AccountSettings"))
const InboxPage = lazy(() => import("./Pages/InboxPage"))
const ProfProfilePageile = lazy(() => import("./Pages/ProfilePage"))
const FollowingPage = lazy(() => import("./Pages/FollowingPage"))
const HomePage = lazy(() => import("./Pages/HomePage"))
const AuthPage = lazy(() => import("./Pages/AuthPage"))
const LoginPage = lazy(() => import("./Pages/LoginPage"))
const SignUpPage = lazy(() => import("./Pages/SignUpPage"))
const FeedPage = lazy(() => import("./Pages/FeedPage"))

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Route>
                <Route path="/app">
                    <Route path="feed" element={<FeedPage />} />
                    <Route path="inbox">
                        <Route index element={<InboxPage />} />
                        <Route path=":conversationID" element={<InboxPage />} />
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
                    <Route
                        path="profile/:userID"
                        element={<ProfProfilePageile />}
                    />
                    <Route path="following" element={<FollowingPage />} />
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
