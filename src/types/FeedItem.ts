import { Post } from "./Post"
import { User } from "./User"

export interface FeedItem {
    post: Post
    user: User
}
