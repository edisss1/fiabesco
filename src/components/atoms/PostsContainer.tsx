import { InfiniteData } from "@tanstack/react-query"
import Post from "./Post"
import { GetFeedPostsRes } from "../../utils/getFeedPosts"

interface PostsContainerProps {
    data: InfiniteData<GetFeedPostsRes, unknown> | undefined
    ref?: (node?: Element | null) => void
    status: string
}

const PostsContainer = ({ data, ref, status }: PostsContainerProps) => {
    const posts = data?.pages.flatMap((page) => page.posts)

    return (
        <div
            ref={ref}
            className="flex flex-col gap-4 items-center mt-16 w-full max-w-[600px]"
        >
            {posts?.map((post) => (
                <Post {...post} />
            ))}
        </div>
    )
}
export default PostsContainer
