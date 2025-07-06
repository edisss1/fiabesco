import { useMutation, useQueryClient } from "@tanstack/react-query"
import Button from "../atoms/Button"
import Form from "../atoms/Form"
import { createPost } from "../../utils/createPost"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useEffect, useState } from "react"
import FileInput from "../atoms/FileInput"
import PhotoIcon from "../../assets/PhotoIcon"
import FileIcon from "../../assets/FileIcon"
import PostImagePreview from "../atoms/PostImagePreview"

const CreatePostForm = () => {
    const [caption, setCaption] = useState("")
    const [images, setImages] = useState<File[]>([])
    const [previews, setPreviews] = useState<string[]>([])
    const { user, token } = useSelector((state: RootState) => state.auth)
    const queryClient = useQueryClient()

    const { mutate: post } = useMutation({
        mutationKey: ["post"],
        mutationFn: (e: FormEvent) =>
            createPost(token, user?._id, caption, e, images),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["feedPosts"]
            })
    })

    const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        const filePreviews = files.map((file) => URL.createObjectURL(file))

        setImages((prev) => [...prev, ...files])
        setPreviews((prev) => [...prev, ...filePreviews])
    }

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
        setPreviews((prev) => prev.filter((_, i) => i !== index))
    }

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
                    onChange={handlePictureChange}
                    accept="image/*"
                    allowMultiple
                    name="photo"
                    label={
                        <div className="flex items-center gap-2">
                            <PhotoIcon />
                            <span>Picture</span>
                        </div>
                    }
                />
                <FileInput
                    name="file"
                    allowMultiple
                    label={
                        <div className="flex items-center gap-2">
                            <FileIcon />
                            <span>File</span>
                        </div>
                    }
                />
            </div>
            {previews.length > 0 && (
                <div className="mt-4 flex gap-3 items-center max-w-full overflow-x-auto scrollbar-thin post-images py-2">
                    {previews.map((url, index) => (
                        <PostImagePreview
                            onClick={() => removeImage(index)}
                            key={index}
                            url={url}
                        />
                    ))}
                </div>
            )}
        </Form>
    )
}
export default CreatePostForm
