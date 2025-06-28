import { FormEvent } from "react"
import FormInput from "../atoms/FormInput"
import Button from "../atoms/Button"
import Textarea from "../atoms/Textarea"

interface PortfolioContactFormProps {
    onSubmit: (e: FormEvent) => void
    textColor: string
    primaryColor: string
}

const PortfolioContactForm = ({
    onSubmit,
    textColor,
    primaryColor
}: PortfolioContactFormProps) => {
    return (
        <form
            className="w-full md:min-w-[400px] max-md:w-full grid gap-4"
            onSubmit={onSubmit}
        >
            <FormInput textColor={textColor} label="Name" />
            <FormInput textColor={textColor} label="Email" />
            <Textarea
                textColor={textColor}
                label="Message"
                className="border-2 rounded-lg min-h-[150px] resize-none"
            />
            <Button
                style={{ backgroundColor: primaryColor }}
                className="bg-primary px-6 py-2 rounded-lg place-self-start cursor-pointer "
                type="submit"
            >
                Send
            </Button>
        </form>
    )
}
export default PortfolioContactForm
