import { Link } from "react-router-dom"
import Fiabesco from "../assets/Fiabesco"
import AuthWrapper from "../components/atoms/AuthWrapper"
import Button from "../components/atoms/Button"
import Form from "../components/atoms/Form"
import FormInput from "../components/atoms/FormInput"
import Arrow from "../assets/Arrow"

const SignUp = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <AuthWrapper>
            <Form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center"
            >
                <div className="grid place-items-center gap-6">
                    <Fiabesco />
                    <h2 className="text-text-primary font-bold">
                        Connect, create, and share your art with the world.
                        Let's bring your vision to life.
                    </h2>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-[400px] mx-auto">
                    <FormInput
                        id="name"
                        label="Name"
                        placeholder="e.g. John Doe"
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        placeholder="e.g. you@example.com"
                    />
                    <FormInput
                        id="pwd"
                        label="Password"
                        placeholder="Enter your password"
                    />
                    <FormInput
                        id="confirmed-pwd"
                        label="Confirmed password"
                        placeholder="Confirmed your password"
                    />
                    <Button
                        type="submit"
                        className=" bg-primary py-2 rounded-lg cursor-pointer"
                    >
                        Join
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <p>Already have an account? </p>
                    <Link
                        className="text-text-secondary opacity-70 hover:opacity-100 transition-opacity duration-300"
                        to={"/auth/login"}
                    >
                        Login
                    </Link>
                </div>
            </Form>
            <Link
                className="bg-primary hover:scale-105 transition-transform  p-2 rounded-lg absolute top-4 left-4"
                to={"/"}
            >
                <Arrow />
            </Link>
        </AuthWrapper>
    )
}
export default SignUp
