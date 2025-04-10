import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Feed = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <div>
            Hi, {user?.firstName} {user?.lastName}
        </div>
    )
}
export default Feed
