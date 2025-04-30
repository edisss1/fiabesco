import { useQuery } from "@tanstack/react-query"
import PageWrapper from "../components/atoms/PageWrapper"
import { useParams } from "react-router-dom"
import { getPost } from "../utils/getPost"
import Post from "../components/atoms/Post"
import CreateCommentForm from "../components/molecules/CreateCommentForm"
import { Comment as CommentType } from "../types/Comment"
import { getComments } from "../utils/getComments"
import Comment from "../components/atoms/Comment"

const PostView = () => {
    const { postID } = useParams()

    const { data: postData } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPost(postID),
        enabled: !!postID
    })

    const { data: comments } = useQuery({
        queryKey: ["comments"],
        queryFn: () => getComments(postID)
    })

    const mockComment: CommentType = {
        _id: "1",
        postID: "1",
        userID: "1",
        content:
            "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        createdAt: "2023-01-01T00:12:00.000Z"
    }

    return (
        <PageWrapper>
            <div className="flex flex-col w-full max-w-[800px] items-center gap-8 mt-16">
                {postData && (
                    <Post postedBy={postData.user} {...postData?.post} />
                )}
                <CreateCommentForm />
                <Comment {...mockComment} />
            </div>
        </PageWrapper>
    )
}
export default PostView
