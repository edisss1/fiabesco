import { useState } from "react"
import PlaneIcon from "../../assets/PlaneIcon"
import Button from "../atoms/Button"
import Form from "../atoms/Form"
import FormInput from "../atoms/FormInput"

const CreateCommentForm = () => {
    const [comment, setComment] = useState("")

    return (
        <Form className="w-full flex items-center border-b-2 px-5 py-2 focus-within:border-b-primary transition-colors duration-300">
            <FormInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment"
                className="border-0 focus:outline-0"
            />
            <Button type="submit" className="cursor-pointer">
                <PlaneIcon />
            </Button>
        </Form>
    )
}
export default CreateCommentForm
