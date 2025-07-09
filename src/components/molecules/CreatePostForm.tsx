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
import PostImagePreview from "../atoms/PostImagePreview"
import { AnimatePresence, motion } from "framer-motion"

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
            className="w-full max-w-[500px] mx-auto text-white  mt-6"
        >
            <div className="flex items-center gap-4 w-full">
                <input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="border-b-2 text-text-primary dark:text-text-primary-dark p-2 focus:border-primary focus:outline-none transition-all duration-300  border-text-primary w-full max-w-[400px]"
                    type="text"
                    placeholder="Share your art..."
                />
                <Button type="submit" variant="primary">
                    Post
                </Button>
            </div>
            <div className="flex items-center gap-4 text-text-primary dark:text-text-primary-dark mt-3">
                <FileInput
                    onChange={handlePictureChange}
                    accept="image/*"
                    allowMultiple
                    name="photo"
                    label={
                        <div className="flex items-center gap-2">
                            <PhotoIcon className="dark:[&>*]:stroke-text-primary-dark" />
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
                    <AnimatePresence mode="popLayout">
                        {previews.map((url, index) => (
                            <motion.div
                                key={url}
                                layout
                                initial={{
                                    display: "none",
                                    opacity: 0,
                                    x: -10,
                                    scale: 0.9
                                }}
                                animate={{
                                    display: "block",
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                }}
                                exit={{
                                    display: "none",
                                    opacity: 0,
                                    x: 10,
                                    scale: 0
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                            >
                                <PostImagePreview
                                    key={`${url}-img-${index}`}
                                    onClick={() => removeImage(index)}
                                    url={url}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </Form>
    )
}
export default CreatePostForm
