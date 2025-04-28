import { useQuery } from "@tanstack/react-query"
import PageWrapper from "../components/atoms/PageWrapper"
import { useParams } from "react-router-dom"
import { getPost } from "../utils/getPost"
import Post from "../components/atoms/Post"

const PostView = () => {
    const { postID } = useParams()

    const { data: postData } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPost(postID),
        enabled: !!postID
    })

    return (
        <PageWrapper>
            <div className="flex flex-col w-full items-center gap-8 mt-16">
                {postData && (
                    <Post postedBy={postData.user} {...postData?.post} />
                )}
            </div>
        </PageWrapper>
    )
}
export default PostView
