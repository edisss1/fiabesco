import { screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { expect } from "vitest"
import LoginPage from "../Pages/LoginPage"
import { renderWithProvider } from "../utils/renderWithProvider"
import userEvent from "@testing-library/user-event"
import * as authModule from "../services/endpoints/auth/login"
import { vi } from "vitest"

vi.mock("../services/endpoints/auth/login", () => ({
    login: vi.fn()
}))

const mockNavigate = vi.fn()
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom")
    return {
        ...actual,
        useNavigate: () => mockNavigate
    }
})

describe("LoginPage", () => {
    it("renders the login form", () => {
        renderWithProvider(<LoginPage />)
        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Password")
        const loginButton = screen.getByRole("button", { name: "Log in" })

        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()
    })

    it("submits the form", async () => {
        renderWithProvider(<LoginPage />)

        const mockLogin = authModule.login as jest.Mock
        mockLogin.mockResolvedValue(true)

        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Password")
        const loginButton = screen.getByRole("button", { name: "Log in" })

        await userEvent.type(emailInput, "xG2w2@example.com")
        await userEvent.type(passwordInput, "password")
        await userEvent.click(loginButton)

        expect(mockLogin).toHaveBeenCalledWith(
            "xG2w2@example.com",
            "password",
            expect.anything()
        )
    })

    it("redirects to feed after submitting the form", async () => {
        renderWithProvider(<LoginPage />)

        const mockLogin = authModule.login as jest.Mock
        mockLogin.mockResolvedValue(true)

        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Password")
        const loginButton = screen.getByRole("button", { name: "Log in" })

        await userEvent.type(emailInput, "xG2w2@example.com")
        await userEvent.type(passwordInput, "password")
        await userEvent.click(loginButton)

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith("/app/feed")
        })
    })
})
