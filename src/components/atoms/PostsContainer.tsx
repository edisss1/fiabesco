import Post from "./Post"
import { FeedItem } from "../../types/FeedItem"

interface PostsContainerProps {
    posts?: FeedItem[]
    ref?: (node?: Element | null) => void
}

const PostsContainer = ({ posts, ref }: PostsContainerProps) => {
    return (
        <div
            ref={ref}
            className="flex flex-col px-2 gap-4 items-center mt-16 w-full mx-auto max-w-[800px]"
        >
            {posts &&
                posts.map((post) => (
                    <Post
                        postedBy={post.userName}
                        key={post.post._id}
                        caption={post.post.caption}
                        images={post.post.images}
                        userID={post.post.userID}
                        createdAt={post.post.createdAt}
                        likesCount={post.post.likesCount}
                        commentsCount={post.post.commentsCount}
                        _id={post.post._id}
                        photoURL={post.photoURL}
                        handle={post.handle}
                    />
                ))}
        </div>
    )
}
export default PostsContainer
