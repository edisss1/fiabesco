import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Router from "./Router"
import AuthCheck from "./components/atoms/AuthCheck"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AuthCheck>
                    <Router />
                </AuthCheck>
            </Provider>
        </QueryClientProvider>
    </StrictMode>
)
