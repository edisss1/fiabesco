import { useQuery } from "@tanstack/react-query"
import { getPost } from "../utils/getPost"
import { getComments } from "../utils/getComments"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export function usePostView(postID: string | undefined) {
    const { user } = useSelector((state: RootState) => state.auth)

    const { data: postData } = useQuery({
        queryKey: ["post"],
        queryFn: () => getPost(postID),
        enabled: !!postID
    })

    const { data: comments } = useQuery({
        queryKey: ["comments"],
        queryFn: () => getComments(postID)
    })

    const currentUserID = user?._id

    return { postData, comments, currentUserID }
}
