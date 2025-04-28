import { InfiniteData } from "@tanstack/react-query"
import Post from "./Post"
import { GetFeedPostsRes } from "../../utils/getFeedPosts"
import { Post as PostType } from "../../types/Post"
import { User } from "../../types/User"

interface PostsContainerProps {
    data?: InfiniteData<GetFeedPostsRes, unknown> | undefined
    posts?: PostType[]
    ref?: (node?: Element | null) => void
    postedBy?: User
}

const PostsContainer = ({
    data,
    posts,
    ref,
    postedBy
}: PostsContainerProps) => {
    const dataFeedItems = data?.pages.flatMap((page) => page.feedItems)

    return (
        <div
            ref={ref}
            className="flex flex-col gap-4 items-center mt-16 w-full mx-auto max-w-[800px]"
        >
            {dataFeedItems &&
                dataFeedItems?.map((item) => (
                    <Post
                        postedBy={postedBy ? postedBy : item.user}
                        key={item.post._id}
                        {...item.post}
                    />
                ))}
            {posts &&
                posts.map((post) => (
                    <Post postedBy={postedBy!} key={post._id} {...post} />
                ))}
        </div>
    )
}
export default PostsContainer
