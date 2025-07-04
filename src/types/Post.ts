export interface Post {
    _id?: string
    userID: string
    caption: string
    images: string[]
    files: string[]
    tags: string[]
    likesCount: number
    commentsCount: number
    likedBy: string[]
    commentedBy: string[]
    createdAt: string
    updatedAt: string
}
