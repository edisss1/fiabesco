import CrossIcon from "../../assets/CrossIcon"
import Button from "./Button"

interface PostImagePreviewProps {
    url: string
    onClick: () => void
}

const PostImagePreview = ({ url, onClick }: PostImagePreviewProps) => {
    return (
        <div className="group relative w-fit shrink-0 ">
            <img
                className="w-14 h-14 aspect-square rounded-md object-cover"
                src={url}
                alt=""
            />
            <Button
                onClick={onClick}
                className="p-0.5 bg-text-primary rounded-full cursor-pointer absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
                <CrossIcon className="w-5 h-5  [&>*]:fill-white" />
            </Button>
        </div>
    )
}
export default PostImagePreview
