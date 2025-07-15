import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { getPost } from "../services/endpoints/posts/getPost"
import { getComments } from "../services/endpoints/comments/getComments"

export function usePostView(postID: string | undefined) {
    const { user } = useSelector((state: RootState) => state.auth)

    const { data: postData } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPost(postID),
        enabled: !!postID
    })

    console.log(postData?.post)

    const { data: comments } = useQuery({
        queryKey: ["comments"],
        queryFn: () => getComments(postID)
    })

    const currentUserID = user?._id

    return { postData, comments, currentUserID }
}
