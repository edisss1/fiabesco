import { FormEvent, useState } from "react"
import FormInput from "../Common/FormInput"
import Button from "../Common/Button"
import Textarea from "../Common/Textarea"
import { sendEmail } from "../../services/endpoints/mail/sendEmail"

interface PortfolioContactFormProps {
    textColor: string
    primaryColor: string
    ownerEmail: string
}

const PortfolioContactForm = ({
    textColor,
    primaryColor,
    ownerEmail
}: PortfolioContactFormProps) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = await sendEmail(name, email, subject, message, ownerEmail)

        console.log(data)

        // cleanup
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <form
            className="w-full md:min-w-[400px] max-md:w-full grid gap-4"
            onSubmit={handleSubmit}
        >
            <FormInput
                id="name"
                value={name}
                onChange={handleNameChange}
                textColor={textColor}
                label="Name"
            />
            <FormInput
                id="email"
                value={email}
                onChange={handleEmailChange}
                textColor={textColor}
                label="Email"
            />
            <FormInput
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                textColor={textColor}
                label="Subject"
            />
            <Textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                textColor={textColor}
                label="Message"
                className="border-2 rounded-lg min-h-[150px] resize-none p-2"
            />
            <Button
                style={{
                    backgroundColor: primaryColor,
                    color: textColor,
                    width: "fit-content"
                }}
                className="px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                type="submit"
                disabled={!name || !email || !subject || !message}
            >
                Send
            </Button>
        </form>
    )
}
export default PortfolioContactForm
