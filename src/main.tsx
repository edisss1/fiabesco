import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Router from "./Router"
import AuthCheck from "./components/atoms/AuthCheck"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HashRouter } from "react-router-dom"
import { injectStore } from "./services/api"
injectStore(store)

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <AuthCheck>
                        <Router />
                    </AuthCheck>
                </Provider>
            </QueryClientProvider>
        </HashRouter>
    </StrictMode>
)
