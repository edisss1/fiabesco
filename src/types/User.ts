export interface User {
    _id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    handle: string
    photoURL: string
    bannerURL: string
    followersCount: number
    followingCount: number
    bio: string
    followedBy: string[]
    followedUsers: string[]
    createdAt?: string
}
