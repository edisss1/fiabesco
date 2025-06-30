import PageWrapper from "../components/atoms/PageWrapper"
import { useParams } from "react-router-dom"
import Post from "../components/atoms/Post"
import CreateCommentForm from "../components/molecules/CreateCommentForm"
import Comment from "../components/atoms/Comment"
import { usePostView } from "../hooks/usePostView"

const PostView = () => {
    const { postID } = useParams()

    const { postData, comments, currentUserID } = usePostView(postID)

    return (
        <PageWrapper>
            <div className="flex flex-col w-full mx-auto max-w-[800px] items-center gap-8 mt-16">
                {postData && (
                    <Post postedBy={postData.user} {...postData?.post} />
                )}
                <CreateCommentForm />
                {comments && (
                    <div className="flex flex-col gap-4 w-full">
                        {comments.map((comment) => (
                            <Comment
                                currentUserID={currentUserID}
                                userName={`${comment.user.firstName} ${comment.user.lastName}`}
                                key={comment.comment?._id}
                                {...comment.comment}
                            />
                        ))}
                    </div>
                )}
            </div>
        </PageWrapper>
    )
}
export default PostView
