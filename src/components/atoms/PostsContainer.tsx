import Post from "./Post"
import { Post as PostType } from "../../types/Post"
import { User } from "../../types/User"

interface PostsContainerProps {
    posts?: { post: PostType; user: User }[]
    ref?: (node?: Element | null) => void
}

const PostsContainer = ({ posts, ref }: PostsContainerProps) => {
    return (
        <div
            ref={ref}
            className="flex flex-col gap-4 items-center mt-16 w-full mx-auto max-w-[800px]"
        >
            {posts &&
                posts.map((post) => (
                    <Post
                        postedBy={post.user}
                        key={post.post._id}
                        {...post.post}
                    />
                ))}
        </div>
    )
}
export default PostsContainer
