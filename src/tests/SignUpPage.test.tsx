import { screen } from "@testing-library/react"
import SignUp from "../Pages/SignUpPage"
import { renderWithProvider } from "../utils/renderWithProvider"
import * as authModule from "../services/endpoints/auth/signUp"
import { vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { checkPasswordStrength } from "../utils/checkPasswordStrength"

vi.spyOn(console, "warn")

vi.mock("../services/endpoints/auth/signUp", () => ({
    signUp: vi.fn()
}))

describe("SignUpPage", () => {
    it("renders the sign up form", () => {
        renderWithProvider(<SignUp />)

        const firstNameInput = screen.getByLabelText("First name")
        const lastNameInput = screen.getByLabelText("Last name")
        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("First name")
        const confirmedPasswordInput =
            screen.getByLabelText("Confirmed password")

        expect(firstNameInput).toBeInTheDocument()
        expect(lastNameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(confirmedPasswordInput).toBeInTheDocument()
    })

    it("submits the form", async () => {
        renderWithProvider(<SignUp />)

        const mockSignUp = authModule.signUp as jest.Mock
        mockSignUp.mockResolvedValue(true)

        const firstNameInput = screen.getByLabelText("First name")
        const lastNameInput = screen.getByLabelText("Last name")
        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Password")
        const confirmedPasswordInput =
            screen.getByLabelText("Confirmed password")
        const signUpButton = screen.getByRole("button", { name: "Join" })

        await userEvent.type(firstNameInput, "John")
        await userEvent.type(lastNameInput, "Doe")
        await userEvent.type(emailInput, "132132132@gmail.com")
        await userEvent.type(passwordInput, "password")
        await userEvent.type(confirmedPasswordInput, "password")
        await userEvent.click(signUpButton)

        expect(mockSignUp).toHaveBeenCalledWith(
            "John",
            "Doe",
            "132132132@gmail.com",
            "password",
            "password",
            expect.anything()
        )
    })

    it("checks password strength (not enough characters, no number, no special char)", async () => {
        expect(checkPasswordStrength("password")).toEqual({
            longEnough: false,
            hasNumber: false,
            hasSpecialChar: false
        })
    })

    it("checks password strength (long enough, has number, has special char)", async () => {
        expect(checkPasswordStrength("password123!")).toEqual({
            longEnough: true,
            hasNumber: true,
            hasSpecialChar: true
        })
    })
})
