export interface Post {
    _id?: string
    userID: string
    userFirstName: string
    userLastName: string
    photoURL: string
    userHandle: string
    caption: string
    images: string[]
    tags: string[]
    likesCount: number
    commentsCount: number
    likedBy: string[]
    commentedBy: string[]
    createdAt: string
    updatedAt: string
}
