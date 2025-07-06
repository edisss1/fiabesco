interface PostImagesProps {
    images: string[]
}

const Image = ({ image }: { image: string }) => (
    <img src={image} alt="post" className="w-full max-h-[300px] object-cover" />
)

const PostImages = ({ images }: PostImagesProps) => {
    const count = images.length

    return (
        <div className="flex gap-2 overflow-hidden">
            {images.map((image) => (
                <Image key={image} image={image} />
            ))}
        </div>
    )
}
export default PostImages
