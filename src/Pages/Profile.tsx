import { useQuery } from "@tanstack/react-query"
import { User } from "../types/User"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import PageWrapper from "../components/atoms/PageWrapper"
import ProfileWrapper from "../components/atoms/ProfileWrapper"
import Banner from "../components/atoms/Banner"
import Button from "../components/atoms/Button"
import MessageIcon from "../assets/MessageIcon"
import FollowIcon from "../assets/FollowIcon"
import { getProfileData } from "../utils/getProfileData"

const Profile = () => {
    const { userID } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { token } = useSelector((state: RootState) => state.auth)

    const { data: profileData } = useQuery<User>({
        queryKey: ["profileData", userID],
        queryFn: () => getProfileData(token, dispatch, userID),
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        enabled: !!token
    })

    return (
        <PageWrapper>
            <ProfileWrapper>
                <Banner
                    bannerURL={
                        "https://images.unsplash.com/photo-1741722604231-3d24c0c44864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    }
                />
                <div className="px-4 flex flex-col gap-4 text-text-secondary">
                    <div className="flex items-start gap-2">
                        {profileData?.photoURL ? (
                            <img src={profileData.photoURL} />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-white" />
                        )}
                        <div className="flex flex-col gap-1">
                            <p>
                                {profileData?.firstName} {profileData?.lastName}
                            </p>
                            <span className="text-sm">
                                {profileData?.bio
                                    ? profileData.bio
                                    : "No bio yet"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 [&>*]:cursor-pointer">
                        <Button className="flex items-center gap-2">
                            <MessageIcon />
                            Message
                        </Button>
                        <Button className="flex items-center gap-2">
                            <FollowIcon />
                            Message
                        </Button>
                    </div>
                </div>
            </ProfileWrapper>
        </PageWrapper>
    )
}
export default Profile
