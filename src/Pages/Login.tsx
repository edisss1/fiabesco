import { Link, useNavigate } from "react-router-dom"
import AuthWrapper from "../components/atoms/AuthWrapper"
import Button from "../components/atoms/Button"
import Form from "../components/atoms/Form"
import FormInput from "../components/atoms/FormInput"
import Arrow from "../assets/Arrow"
import Fiabesco from "../assets/Fiabesco"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/store"
import { login } from "../utils/login"

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login(email, password, dispatch)

        setEmail("")
        setPassword("")

        navigate("/app/feed")
    }

    return (
        <AuthWrapper>
            <Form
                x={100}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center w-full max-w-[400px]"
            >
                <div className="grid place-items-center gap-6">
                    <Fiabesco />
                    <h2 className="text-text-primary font-bold">
                        Welcome back
                    </h2>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-[400px] mx-auto">
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

                    <Button
                        type="submit"
                        className=" bg-primary py-2 rounded-lg cursor-pointer"
                    >
                        Join
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <p>Don't have an account?</p>
                    <Link
                        className="text-text-primary opacity-70 hover:opacity-100 transition-opacity duration-300"
                        to={"/auth/signup"}
                    >
                        Sign up
                    </Link>
                </div>
            </Form>
            <Link
                className="bg-primary hover:scale-105 transition-transform p-2 rounded-lg absolute top-4 left-4"
                to={"/"}
            >
                <Arrow />
            </Link>
        </AuthWrapper>
    )
}
export default Login
