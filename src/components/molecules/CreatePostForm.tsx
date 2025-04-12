import Button from "../atoms/Button"
import Form from "../atoms/Form"

const CreatePostForm = () => {
    return (
        <Form className="w-full max-w-[400px] text-white">
            <div className="flex items-center gap-4 w-full">
                <input
                    className="border-b-2 text-text-secondary p-2 focus:border-primary focus:outline-none transition-all duration-300  border-text-secondary w-full max-w-[300px]"
                    type="text"
                    placeholder="Share your art..."
                />
                <Button variant="primary">Post</Button>
            </div>
            <div className="flex items-center gap-4 text-text-secondary mt-2">
                <Button>Photo</Button>
                <Button>File</Button>
            </div>
        </Form>
    )
}
export default CreatePostForm
