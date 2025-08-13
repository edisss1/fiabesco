import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { MemoryRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
export function renderWithProvider(ui: React.ReactElement) {
    return render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <MemoryRouter>{ui}</MemoryRouter>
            </Provider>
        </QueryClientProvider>
    )
}
