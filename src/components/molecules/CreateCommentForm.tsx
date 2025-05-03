import { FormEvent, useState } from "react"
import PlaneIcon from "../../assets/PlaneIcon"
import Button from "../atoms/Button"
import Form from "../atoms/Form"
import FormInput from "../atoms/FormInput"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { commentPost } from "../../utils/commentPost"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const CreateCommentForm = () => {
    const { postID } = useParams()
    const [content, setContent] = useState("")
    const client = useQueryClient()
    const { user } = useSelector((state: RootState) => state.auth)

    const { mutate: comment } = useMutation({
        mutationKey: ["commentPost"],
        mutationFn: (e: FormEvent) =>
            commentPost(content, postID, e, user?._id),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["comments"] })
            setContent("")
        }
    })

    return (
        <Form
            onSubmit={comment}
            className="w-full flex items-center border-b-2 px-5 py-2 focus-within:border-b-primary transition-colors duration-200"
        >
            <FormInput
                id="comment"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a comment"
                className="border-0 focus:outline-0"
            />
            <Button
                type="submit"
                className="cursor-pointer hover:bg-primary/50 p-1 rounded-lg transition-colors duration-200"
            >
                <PlaneIcon />
            </Button>
        </Form>
    )
}
export default CreateCommentForm
