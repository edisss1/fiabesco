import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import PageWrapper from "../components/atoms/PageWrapper"
import ProfileWrapper from "../components/atoms/ProfileWrapper"
import Banner from "../components/atoms/Banner"

import { useProfileData } from "../hooks/useProfileData"
import ProfileHeader from "../components/molecules/ProfileHeader"
import PostsContainer from "../components/atoms/PostsContainer"
import PostSkeleton from "../components/atoms/PostSkeleton"

const Profile = () => {
    const { userID } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { token, user: currentUser } = useSelector(
        (state: RootState) => state.auth
    )

    const {
        profileData,
        data: posts,
        isLoading
    } = useProfileData(userID, token, dispatch)

    const isOwner = userID === currentUser?._id

    return (
        <PageWrapper bannerPresent>
            <ProfileWrapper>
                <Banner
                    userID={userID}
                    isOwner={isOwner}
                    bannerURL={profileData?.bannerURL}
                />
                <ProfileHeader
                    userID={userID}
                    profileData={profileData}
                    isOwner={isOwner}
                />
                <PostsContainer posts={posts} />
                {isLoading && <PostSkeleton />}
            </ProfileWrapper>
        </PageWrapper>
    )
}
export default Profile
