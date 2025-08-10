import PageWrapper from "../components/Layout/PageWrapper"
import { useParams } from "react-router-dom"
import Post from "../components/Post/Post"
import CreateCommentForm from "../components/Comment/CreateCommentForm"
import Comment from "../components/Comment/Comment"
import { usePostView } from "../hooks/usePostView"
import { useEffect } from "react"

const PostView = () => {
    const { postID } = useParams()

    const {
        postData,
        comments,
        currentUserID,
        scrollContainerRef,
        inView,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    } = usePostView(postID)

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    return (
        <PageWrapper>
            <div className="flex flex-col w-full mx-auto max-w-[800px] items-center gap-8 mt-16">
                {postData && (
                    <Post
                        postedBy={postData.userName}
                        handle={postData.handle}
                        photoURL={postData.photoURL}
                        {...postData.post}
                    />
                )}
                <CreateCommentForm />
                {comments ? (
                    <div className="flex flex-col gap-4 w-full">
                        {comments.map((commentItem) => {
                            console.log(JSON.stringify(commentItem))
                            return (
                                <Comment
                                    key={commentItem.comment._id}
                                    comment={commentItem.comment}
                                    currentUserID={currentUserID}
                                    userName={commentItem.userName}
                                    photoURL={commentItem.photoURL}
                                />
                            )
                        })}
                        <div ref={scrollContainerRef} className="h-10" />
                    </div>
                ) : (
                    <p>There are no comments yet</p>
                )}
            </div>
        </PageWrapper>
    )
}
export default PostView
