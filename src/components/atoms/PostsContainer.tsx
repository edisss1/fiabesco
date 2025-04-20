import { InfiniteData } from "@tanstack/react-query"
import Post from "./Post"
import { GetFeedPostsRes } from "../../utils/getFeedPosts"
import { Post as PostType } from "../../types/Post"

interface PostsContainerProps {
    data?: InfiniteData<GetFeedPostsRes, unknown> | undefined
    posts?: PostType[]
    ref?: (node?: Element | null) => void
}

const PostsContainer = ({ data, posts, ref }: PostsContainerProps) => {
    const dataPosts = data?.pages.flatMap((page) => page.posts)

    return (
        <div
            ref={ref}
            className="flex flex-col gap-4 items-center mt-16 w-full mx-auto max-w-[800px]"
        >
            {dataPosts && dataPosts?.map((post) => <Post {...post} />)}
            {posts && posts.map((post) => <Post {...post} />)}
        </div>
    )
}
export default PostsContainer
