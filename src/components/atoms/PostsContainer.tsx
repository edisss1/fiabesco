import { Post as PostType } from "../../types/Post"
import Post from "./Post"

interface PostsContainerProps {
    posts: PostType[] | undefined
    isOwner: boolean
}

const PostsContainer = ({ posts, isOwner }: PostsContainerProps) => {
    return (
        <div className="flex flex-col gap-4 items-center mt-16">
            {posts && posts.length > 0 ? (
                posts.map((post) => <Post {...post} />)
            ) : (
                <h1>
                    {isOwner
                        ? "You haven't posted anything"
                        : "User has no posts"}
                </h1>
            )}
        </div>
    )
}
export default PostsContainer
