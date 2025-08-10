import { Link, useNavigate } from "react-router-dom"
import Fiabesco from "../assets/Fiabesco"
import AuthWrapper from "../components/Auth/AuthWrapper"
import Button from "../components/Common/Button"
import Form from "../components/Common/Form"
import FormInput from "../components/Common/FormInput"
import Arrow from "../assets/Arrow"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { signUp } from "../services/endpoints/auth/signUp"
import PasswordStrengthRequirements from "../components/Auth/PasswordStrengthRequirements"
import { checkPasswordStrength } from "../utils/checkPasswordStrength"
import { PasswordStrength } from "../types/PasswordStrength"

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { status } = useSelector((state: RootState) => state.auth)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
        longEnough: false,
        hasNumber: false,
        hasSpecialChar: false
    })

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await signUp(
            firstName,
            lastName,
            email,
            password,
            confirmedPassword,
            dispatch
        )

        if (status !== "loading") {
            navigate("/app/feed")
        }

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmedPassword("")
    }

    useEffect(() => {
        const passwordStrength = checkPasswordStrength(password)

        setPasswordStrength(passwordStrength)
    }, [password])

    return (
        <AuthWrapper>
            <Form
                x={-100}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center"
            >
                <div className="grid place-items-center gap-6">
                    <Fiabesco />
                    <h2 className="text-text-primary dark:text-text-primary-dark font-bold">
                        Connect, create, and share your art with the world.
                        Let's bring your vision to life.
                    </h2>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-[400px] mx-auto">
                    <FormInput
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="first-name"
                        label="First name"
                        placeholder="e.g. John"
                    />
                    <FormInput
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="last-name"
                        label="Last name"
                        placeholder="e.g. Doe"
                    />
                    <FormInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        label="Email"
                        placeholder="e.g. you@example.com"
                    />
                    <FormInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="pwd"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <PasswordStrengthRequirements
                        longEnough={passwordStrength.longEnough}
                        hasNumber={passwordStrength.hasNumber}
                        hasSpecialChar={passwordStrength.hasSpecialChar}
                    />
                    <FormInput
                        value={confirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        id="confirmed-pwd"
                        label="Confirmed password"
                        placeholder="Confirmed your password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        className=" bg-primary py-2 rounded-lg cursor-pointer text-text-primary"
                    >
                        Join
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <p>Already have an account? </p>
                    <Link
                        className="text-text-primary dark:text-text-primary-dark opacity-70 hover:opacity-100 transition-opacity duration-300"
                        to={"/auth/login"}
                    >
                        Login
                    </Link>
                </div>
            </Form>
            <Link
                className="bg-primary  hover:scale-105 transition-transform  p-2 rounded-lg absolute top-4 left-4"
                to={"/"}
            >
                <Arrow />
            </Link>
        </AuthWrapper>
    )
}
export default SignUp
