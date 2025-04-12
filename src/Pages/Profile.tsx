import { useQuery } from "@tanstack/react-query"
import { User } from "../types/User"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { setStatus } from "../redux/slices/authSlice"
import axios from "axios"
import PageWrapper from "../components/atoms/PageWrapper"
import ProfileWrapper from "../components/atoms/ProfileWrapper"
import Banner from "../components/atoms/Banner"
import UserInfo from "../components/atoms/UserInfo"

const Profile = () => {
    const { userID } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { token } = useSelector((state: RootState) => state.auth)

    const { data: profileData } = useQuery<User>({
        queryKey: ["profileData"],
        queryFn: async () => {
            try {
                dispatch(setStatus("loading"))

                const res = await axios.get(
                    import.meta.env.VITE_BASE_URL + `/users/profile/${userID}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                const data = res.data

                console.log(data)
                dispatch(setStatus("idle"))

                return data
            } catch (error) {
                console.error(error)
            }
        },
        refetchOnReconnect: true,
        refetchOnWindowFocus: false
    })

    return (
        <PageWrapper>
            <ProfileWrapper>
                <Banner
                    bannerURL={
                        "https://images.unsplash.com/photo-1741722604231-3d24c0c44864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    }
                />
                <div className="px-4">
                    <UserInfo
                        hoverEnabled={false}
                        firstName={profileData?.firstName}
                        lastName={profileData?.lastName}
                        photoURL={profileData?.photoURL}
                        userID={profileData?._id}
                        bio={profileData?.bio ? profileData.bio : "No bio yet"}
                        isBio
                    />
                </div>
            </ProfileWrapper>
        </PageWrapper>
    )
}
export default Profile
