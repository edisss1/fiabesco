import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "../atoms/Button"
import Form from "../atoms/Form"
import { createPost } from "../../utils/createPost"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useState } from "react"

const CreatePostForm = () => {
    const [caption, setCaption] = useState("")
    const { user, token } = useSelector((state: RootState) => state.auth)
    const queryClient = useQueryClient()

    const { mutate: post } = useMutation({
        mutationKey: ["post"],
        mutationFn: (e: FormEvent) => createPost(token, user?._id, caption, e),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["feedPosts"]
            })
    })

    return (
        <Form onSubmit={post} className="w-full max-w-[400px] text-white mt-6">
            <div className="flex items-center gap-4 w-full">
                <input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="border-b-2 text-text-primary p-2 focus:border-primary focus:outline-none transition-all duration-300  border-text-primary w-full max-w-[300px]"
                    type="text"
                    placeholder="Share your art..."
                />
                <Button type="submit" variant="primary">
                    Post
                </Button>
            </div>
            <div className="flex items-center gap-4 text-text-primary mt-2">
                <Button type="button">Photo</Button>
                <Button type="button">File</Button>
            </div>
        </Form>
    )
}
export default CreatePostForm
