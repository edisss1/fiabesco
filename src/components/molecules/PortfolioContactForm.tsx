import { FormEvent } from "react"
import FormInput from "../atoms/FormInput"
import Button from "../atoms/Button"
import Textarea from "../atoms/Textarea"

interface PortfolioContactFormProps {
    onSubmit: (e: FormEvent) => void
}

const PortfolioContactForm = ({ onSubmit }: PortfolioContactFormProps) => {
    return (
        <form className="w-full max-w-1/2 grid gap-4" onSubmit={onSubmit}>
            <FormInput label="Name" />
            <FormInput label="Email" />
            <Textarea
                label="Message"
                className="border-2 rounded-lg min-h-[150px]"
            />
            <Button className="bg-primary px-6 py-2 rounded-lg place-self-start">
                Send
            </Button>
        </form>
    )
}
export default PortfolioContactForm
