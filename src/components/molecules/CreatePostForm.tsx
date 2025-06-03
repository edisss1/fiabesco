import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "../atoms/Button"
import Form from "../atoms/Form"
import { createPost } from "../../utils/createPost"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useState } from "react"
import FileInput from "../atoms/FileInput"
import PhotoIcon from "../../assets/PhotoIcon"
import FileIcon from "../../assets/FileIcon"

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
        <Form
            useMotion={false}
            onSubmit={post}
            className="w-full max-w-[500px] mx-auto text-white mt-6"
        >
            <div className="flex items-center gap-4 w-full">
                <input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="border-b-2 text-text-primary p-2 focus:border-primary focus:outline-none transition-all duration-300  border-text-primary w-full max-w-[400px]"
                    type="text"
                    placeholder="Share your art..."
                />
                <Button type="submit" variant="primary">
                    Post
                </Button>
            </div>
            <div className="flex items-center gap-4 text-text-primary mt-3">
                <FileInput
                    id="photo_upload"
                    name="photo"
                    label={
                        <div className="flex items-center gap-2">
                            <PhotoIcon />
                            <span>Photo</span>
                        </div>
                    }
                />
                <FileInput
                    id="file_upload"
                    name="file"
                    label={
                        <div className="flex items-center gap-2">
                            <FileIcon />
                            <span>File</span>
                        </div>
                    }
                />
            </div>
        </Form>
    )
}
export default CreatePostForm
