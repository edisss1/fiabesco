import { Post } from "./Post"

export interface FeedItem {
    post: Post
    userName: string
    photoURL: string
    handle: string
}
