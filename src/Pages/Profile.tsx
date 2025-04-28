import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import PageWrapper from "../components/atoms/PageWrapper"
import ProfileWrapper from "../components/atoms/ProfileWrapper"
import Banner from "../components/atoms/Banner"

import { useProfileData } from "../hooks/useProfileData"
import ProfileHeader from "../components/molecules/ProfileHeader"
import PostsContainer from "../components/atoms/PostsContainer"

const Profile = () => {
    const { userID } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { token, user: currentUser } = useSelector(
        (state: RootState) => state.auth
    )

    const { profileData, posts, user } = useProfileData(userID, token, dispatch)

    const isOwner = userID === currentUser?._id

    return (
        <PageWrapper>
            <ProfileWrapper>
                <Banner isOwner={isOwner} bannerURL={profileData?.bannerURL} />
                <ProfileHeader profileData={profileData} isOwner={isOwner} />
                <PostsContainer postedBy={user} posts={posts} />
            </ProfileWrapper>
        </PageWrapper>
    )
}
export default Profile
